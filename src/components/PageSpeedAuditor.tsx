import React, { useState } from 'react';
import { CircularProgress } from './CircularProgress';
import { Loader2, AlertCircle, Monitor, Smartphone, Clock } from 'lucide-react';
import { RecommendationAnalyzer, Recommendation } from '../lib/recommendationAnalyzer';
import { PersonalizedRecommendations } from './PersonalizedRecommendations';

interface PageSpeedResults {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  lcp?: string;
  tbt?: string;
  cls?: string;
  recommendations: Recommendation[];
  screenshot?: string;
  fetchTime?: string;
  lighthouseVersion?: string;
  analyzedUrl?: string;
}

export const PageSpeedAuditor: React.FC = () => {
  const [url, setUrl] = useState('');
  const [strategy, setStrategy] = useState<'mobile' | 'desktop'>('mobile');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<PageSpeedResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processUrl = (urlString: string): string => {
    // Clean up the URL by removing trailing/leading spaces
    let cleanedUrl = urlString.trim();

    // Auto-prepend https:// if no protocol is present
    if (!cleanedUrl.startsWith('http://') && !cleanedUrl.startsWith('https://')) {
      cleanedUrl = 'https://' + cleanedUrl;
    }

    return cleanedUrl;
  };

  const validateUrl = (urlString: string): boolean => {
    try {
      const processedUrl = processUrl(urlString);
      const url = new URL(processedUrl);
      // Check if it has a valid hostname
      return url.hostname.includes('.');
    } catch {
      return false;
    }
  };

  const analyzeWebsite = async () => {
    if (!url) {
      setError('Please enter a URL');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid domain');
      return;
    }

    const processedUrl = processUrl(url);

    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    if (!apiKey || apiKey === 'PASTE_YOUR_KEY_HERE') {
      setError('Google API key not configured. Please add your API key to the .env file.');
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 40000);

    try {
      const apiUrl = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
      apiUrl.searchParams.append('url', processedUrl);
      apiUrl.searchParams.append('key', apiKey);
      apiUrl.searchParams.append('strategy', strategy);
      apiUrl.searchParams.append('category', 'performance');
      apiUrl.searchParams.append('category', 'accessibility');
      apiUrl.searchParams.append('category', 'best-practices');
      apiUrl.searchParams.append('category', 'seo');

      const response = await fetch(apiUrl.toString(), { signal: controller.signal });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error?.message || `API Error: ${response.status}`);
      }

      const data = await response.json();
      const lighthouse = data.lighthouseResult;

      const lcpMetric = lighthouse.audits['largest-contentful-paint'];
      const tbtMetric = lighthouse.audits['total-blocking-time'];
      const clsMetric = lighthouse.audits['cumulative-layout-shift'];

      const screenshot = lighthouse.audits['final-screenshot']?.details?.data || '';

      const categoryScores = {
        performance: (lighthouse.categories.performance?.score || 0) * 100,
        accessibility: (lighthouse.categories.accessibility?.score || 0) * 100,
        bestPractices: (lighthouse.categories['best-practices']?.score || 0) * 100,
        seo: (lighthouse.categories.seo?.score || 0) * 100,
      };

      const allAudits = Object.entries(lighthouse.audits).map(([id, audit]: [string, any]) => ({
        id,
        title: audit.title,
        description: audit.description,
        score: audit.score ?? 1,
        displayValue: audit.displayValue,
        numericValue: audit.numericValue,
        details: audit.details
      }));

      const analyzer = new RecommendationAnalyzer(allAudits, categoryScores);
      const recommendations = analyzer.generateRecommendations();

      setResults({
        ...categoryScores,
        lcp: lcpMetric?.displayValue || 'N/A',
        tbt: tbtMetric?.displayValue || 'N/A',
        cls: clsMetric?.displayValue || 'N/A',
        recommendations,
        screenshot,
        fetchTime: lighthouse.fetchTime,
        lighthouseVersion: lighthouse.lighthouseVersion,
        analyzedUrl: lighthouse.finalUrl || processedUrl
      });
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof Error && err.name === 'AbortError') {
        setError('Google is taking too long - please try again');
      } else {
        setError(err instanceof Error ? err.message : 'Failed to analyze website. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const getMetricColor = (value: string, metricType: string) => {
    if (value === 'N/A') return 'text-gray-400';

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));

    if (metricType === 'lcp') {
      if (numericValue <= 2.5) return 'text-green-400';
      if (numericValue <= 4.0) return 'text-orange-400';
      return 'text-red-400';
    }

    if (metricType === 'tbt') {
      if (numericValue <= 200) return 'text-green-400';
      if (numericValue <= 600) return 'text-orange-400';
      return 'text-red-400';
    }

    if (metricType === 'cls') {
      if (numericValue <= 0.1) return 'text-green-400';
      if (numericValue <= 0.25) return 'text-orange-400';
      return 'text-red-400';
    }

    return 'text-gray-400';
  };

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="example.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>

          <div className="flex items-center justify-center gap-2 p-1 bg-white/5 rounded-lg border border-white/10">
            <button
              onClick={() => setStrategy('mobile')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-all ${
                strategy === 'mobile'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span className="font-medium">Mobile</span>
            </button>
            <button
              onClick={() => setStrategy('desktop')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-all ${
                strategy === 'desktop'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span className="font-medium">Desktop</span>
            </button>
          </div>

          <button
            onClick={analyzeWebsite}
            disabled={loading || !url}
            className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing...
              </span>
            ) : (
              'Analyze'
            )}
          </button>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="w-12 h-12 text-white animate-spin" />
            <p className="text-gray-300 text-lg">Analyzing Core Web Vitals...</p>
            <p className="text-gray-500 text-sm">This may take 10-20 seconds</p>
          </div>
        )}

        {error && !loading && (
          <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-400 font-medium">Error</p>
              <p className="text-red-300 text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {results && !loading && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <CircularProgress score={results.performance} label="Performance" />
              <CircularProgress score={results.accessibility} label="Accessibility" />
              <CircularProgress score={results.bestPractices} label="Best Practices" />
              <CircularProgress score={results.seo} label="SEO" />
            </div>

            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Core Web Vitals</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Largest Contentful Paint</p>
                  <p className={`text-2xl font-bold ${getMetricColor(results.lcp || '', 'lcp')}`}>
                    {results.lcp}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Good: ≤ 2.5s</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Total Blocking Time</p>
                  <p className={`text-2xl font-bold ${getMetricColor(results.tbt || '', 'tbt')}`}>
                    {results.tbt}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Good: ≤ 200ms</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Cumulative Layout Shift</p>
                  <p className={`text-2xl font-bold ${getMetricColor(results.cls || '', 'cls')}`}>
                    {results.cls}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Good: ≤ 0.1</p>
                </div>
              </div>
            </div>

            <PersonalizedRecommendations recommendations={results.recommendations} />

            {results.screenshot && (
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">Site Preview</h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <img
                    src={results.screenshot}
                    alt="Site Screenshot"
                    className="w-full max-h-64 object-contain object-top rounded-lg"
                  />
                  <p className="text-gray-500 text-xs mt-2">Screenshot captured by Lighthouse</p>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-gray-400" />
                <h3 className="text-sm font-semibold text-gray-400">Runtime Information</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {results.fetchTime && (
                  <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-gray-400 text-xs">Fetch Time: </span>
                    <span className="text-white text-xs font-medium">{results.fetchTime}</span>
                  </div>
                )}
                <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                  <span className="text-gray-400 text-xs">Device: </span>
                  <span className="text-white text-xs font-medium capitalize">{strategy}</span>
                </div>
                {results.lighthouseVersion && (
                  <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-gray-400 text-xs">Lighthouse: </span>
                    <span className="text-white text-xs font-medium">{results.lighthouseVersion}</span>
                  </div>
                )}
                {results.analyzedUrl && (
                  <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full max-w-full">
                    <span className="text-gray-400 text-xs">URL: </span>
                    <span className="text-white text-xs font-medium truncate">{results.analyzedUrl}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
