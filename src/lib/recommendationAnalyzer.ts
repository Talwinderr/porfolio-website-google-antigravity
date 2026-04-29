interface AuditData {
  id: string;
  title: string;
  description: string;
  score: number;
  displayValue?: string;
  numericValue?: number;
  details?: any;
}

interface CategoryScores {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

export interface Recommendation {
  id: string;
  category: 'Performance' | 'SEO' | 'Accessibility' | 'Best Practices';
  priority: 'Critical' | 'Important' | 'Nice to Have';
  title: string;
  description: string;
  actionSteps: string[];
  impact: string;
}

export class RecommendationAnalyzer {
  private audits: Map<string, AuditData>;
  private scores: CategoryScores;

  constructor(audits: AuditData[], scores: CategoryScores) {
    this.audits = new Map(audits.map(a => [a.id, a]));
    this.scores = scores;
  }

  generateRecommendations(): Recommendation[] {
    const recommendations: Recommendation[] = [];

    recommendations.push(...this.analyzePerformance());
    recommendations.push(...this.analyzeSEO());
    recommendations.push(...this.analyzeAccessibility());
    recommendations.push(...this.analyzeBestPractices());

    return recommendations.sort((a, b) => {
      const priorityOrder = { 'Critical': 0, 'Important': 1, 'Nice to Have': 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }

  private analyzePerformance(): Recommendation[] {
    const recommendations: Recommendation[] = [];

    const imageAudit = this.audits.get('uses-optimized-images') ||
                       this.audits.get('modern-image-formats') ||
                       this.audits.get('offscreen-images');
    if (imageAudit && imageAudit.score < 0.9) {
      recommendations.push({
        id: 'optimize-images',
        category: 'Performance',
        priority: this.scores.performance < 50 ? 'Critical' : 'Important',
        title: 'Optimize Your Images',
        description: 'Large, unoptimized images are slowing down your website significantly.',
        actionSteps: [
          'Compress images using tools like TinyPNG or ImageOptim before uploading',
          'Convert images to modern formats (WebP or AVIF) for better compression',
          'Use responsive images with srcset to serve appropriately sized images',
          'Implement lazy loading for images below the fold'
        ],
        impact: 'Faster page load times, especially on mobile devices'
      });
    }

    const renderBlockingAudit = this.audits.get('render-blocking-resources');
    if (renderBlockingAudit && renderBlockingAudit.score < 0.9) {
      recommendations.push({
        id: 'reduce-blocking-resources',
        category: 'Performance',
        priority: 'Critical',
        title: 'Reduce Render-Blocking Resources',
        description: 'CSS and JavaScript files are preventing your page from displaying quickly.',
        actionSteps: [
          'Move non-critical CSS to load after page render',
          'Inline critical CSS directly in the HTML head',
          'Defer non-essential JavaScript using the "defer" or "async" attributes',
          'Minimize the number of external scripts and stylesheets'
        ],
        impact: 'Page content will appear faster for visitors'
      });
    }

    const unusedJsAudit = this.audits.get('unused-javascript') || this.audits.get('unminified-javascript');
    if (unusedJsAudit && unusedJsAudit.score < 0.7) {
      recommendations.push({
        id: 'reduce-javascript',
        category: 'Performance',
        priority: this.scores.performance < 60 ? 'Critical' : 'Important',
        title: 'Reduce JavaScript File Sizes',
        description: 'Your website is loading too much JavaScript code that slows down page interactions.',
        actionSteps: [
          'Remove unused JavaScript libraries and code',
          'Enable code splitting to load only necessary scripts per page',
          'Minify JavaScript files to reduce file size',
          'Consider replacing heavy libraries with lighter alternatives'
        ],
        impact: 'Faster page interactions and improved mobile performance'
      });
    }

    const serverResponseAudit = this.audits.get('server-response-time');
    if (serverResponseAudit && serverResponseAudit.score < 0.8) {
      recommendations.push({
        id: 'improve-server-response',
        category: 'Performance',
        priority: 'Important',
        title: 'Improve Server Response Time',
        description: 'Your server is taking too long to respond to requests.',
        actionSteps: [
          'Upgrade to a faster web hosting provider if needed',
          'Implement server-side caching (Redis, Memcached)',
          'Use a Content Delivery Network (CDN) to serve static files',
          'Optimize database queries and server-side code'
        ],
        impact: 'Faster initial page load for all visitors'
      });
    }

    const cacheAudit = this.audits.get('uses-long-cache-ttl');
    if (cacheAudit && cacheAudit.score < 0.8) {
      recommendations.push({
        id: 'enable-caching',
        category: 'Performance',
        priority: 'Nice to Have',
        title: 'Enable Browser Caching',
        description: 'Your static files are not being cached properly, causing repeat visitors to reload everything.',
        actionSteps: [
          'Set cache headers for static assets (images, CSS, JS) to expire in 1 year',
          'Use versioned filenames (e.g., style.v123.css) to bust cache when needed',
          'Configure your server or CDN to send proper Cache-Control headers',
          'Enable compression (gzip or brotli) for text-based files'
        ],
        impact: 'Much faster load times for returning visitors'
      });
    }

    return recommendations;
  }

  private analyzeSEO(): Recommendation[] {
    const recommendations: Recommendation[] = [];

    const metaDescAudit = this.audits.get('meta-description');
    if (metaDescAudit && metaDescAudit.score < 1) {
      recommendations.push({
        id: 'add-meta-description',
        category: 'SEO',
        priority: 'Critical',
        title: 'Add Meta Descriptions',
        description: 'Your pages are missing meta descriptions that appear in search results.',
        actionSteps: [
          'Write unique meta descriptions (150-160 characters) for each page',
          'Include relevant keywords naturally in the description',
          'Make descriptions compelling to encourage clicks from search results',
          'Add the meta tag in the HTML head: <meta name="description" content="...">'
        ],
        impact: 'Better click-through rates from search engine results'
      });
    }

    const titleAudit = this.audits.get('document-title');
    if (titleAudit && titleAudit.score < 1) {
      recommendations.push({
        id: 'add-page-titles',
        category: 'SEO',
        priority: 'Critical',
        title: 'Add Descriptive Page Titles',
        description: 'Your pages are missing or have poor title tags.',
        actionSteps: [
          'Create unique, descriptive titles for each page (50-60 characters)',
          'Include your primary keyword near the beginning of the title',
          'Add your brand name at the end of the title',
          'Make titles compelling and accurately describe the page content'
        ],
        impact: 'Improved search engine rankings and click-through rates'
      });
    }

    const headingAudit = this.audits.get('heading-order');
    if (headingAudit && headingAudit.score < 1) {
      recommendations.push({
        id: 'fix-heading-structure',
        category: 'SEO',
        priority: 'Important',
        title: 'Fix Heading Structure',
        description: 'Your page headings are not in proper order, confusing search engines.',
        actionSteps: [
          'Use only one H1 tag per page for the main title',
          'Follow proper heading hierarchy (H1 → H2 → H3, never skip levels)',
          'Make headings descriptive and include relevant keywords',
          'Ensure headings accurately reflect the content structure'
        ],
        impact: 'Better SEO and improved content understanding'
      });
    }

    const linkTextAudit = this.audits.get('link-text');
    if (linkTextAudit && linkTextAudit.score < 0.9) {
      recommendations.push({
        id: 'improve-link-text',
        category: 'SEO',
        priority: 'Important',
        title: 'Use Descriptive Link Text',
        description: 'Your links use vague text like "click here" instead of descriptive phrases.',
        actionSteps: [
          'Replace generic link text with descriptive phrases',
          'Make link text clearly indicate where the link leads',
          'Include keywords in link text when natural',
          'Avoid "click here", "read more", or "learn more" without context'
        ],
        impact: 'Better SEO and improved user experience'
      });
    }

    const imageAltAudit = this.audits.get('image-alt');
    if (imageAltAudit && imageAltAudit.score < 1) {
      recommendations.push({
        id: 'add-alt-text',
        category: 'SEO',
        priority: 'Important',
        title: 'Add Alt Text to Images',
        description: 'Many images are missing alt text, hurting SEO and accessibility.',
        actionSteps: [
          'Add descriptive alt attributes to all images',
          'Describe what the image shows in 10-15 words',
          'Include relevant keywords naturally when appropriate',
          'For decorative images, use empty alt text (alt="")'
        ],
        impact: 'Better image search rankings and accessibility'
      });
    }

    const robotsAudit = this.audits.get('is-crawlable');
    if (robotsAudit && robotsAudit.score < 1) {
      recommendations.push({
        id: 'fix-crawlability',
        category: 'SEO',
        priority: 'Critical',
        title: 'Fix Search Engine Blocking',
        description: 'Your website is blocking search engines from indexing your content.',
        actionSteps: [
          'Check robots.txt file and remove unnecessary blocks',
          'Remove or update restrictive meta robots tags',
          'Ensure your pages are not marked as "noindex"',
          'Submit your sitemap to Google Search Console'
        ],
        impact: 'Your website will appear in search results'
      });
    }

    return recommendations;
  }

  private analyzeAccessibility(): Recommendation[] {
    const recommendations: Recommendation[] = [];

    const colorContrastAudit = this.audits.get('color-contrast');
    if (colorContrastAudit && colorContrastAudit.score < 1) {
      recommendations.push({
        id: 'fix-color-contrast',
        category: 'Accessibility',
        priority: 'Critical',
        title: 'Improve Text Color Contrast',
        description: 'Text on your website is hard to read due to poor contrast with backgrounds.',
        actionSteps: [
          'Use a contrast checker tool to test your color combinations',
          'Aim for a contrast ratio of at least 4.5:1 for normal text',
          'Use darker text colors or lighter backgrounds',
          'Avoid light gray text on white backgrounds'
        ],
        impact: 'Easier reading for all users, especially those with vision impairments'
      });
    }

    const ariaAudit = this.audits.get('aria-valid-attr') ||
                     this.audits.get('aria-required-attr') ||
                     this.audits.get('button-name');
    if (ariaAudit && ariaAudit.score < 1) {
      recommendations.push({
        id: 'fix-aria-labels',
        category: 'Accessibility',
        priority: 'Important',
        title: 'Fix ARIA Labels and Attributes',
        description: 'Interactive elements lack proper labels for screen readers.',
        actionSteps: [
          'Add aria-label attributes to buttons and icons without text',
          'Ensure form inputs have associated label elements',
          'Add alt text to all images and icons',
          'Use semantic HTML elements (button, nav, main) where appropriate'
        ],
        impact: 'Screen reader users can navigate your website effectively'
      });
    }

    const formLabelsAudit = this.audits.get('label');
    if (formLabelsAudit && formLabelsAudit.score < 1) {
      recommendations.push({
        id: 'add-form-labels',
        category: 'Accessibility',
        priority: 'Critical',
        title: 'Add Labels to Form Fields',
        description: 'Form inputs are missing labels, making them difficult to use.',
        actionSteps: [
          'Add <label> elements for every form input',
          'Connect labels to inputs using the "for" attribute',
          'Make label text clear and descriptive',
          'Ensure placeholder text is not used as a replacement for labels'
        ],
        impact: 'Forms become usable for screen reader users'
      });
    }

    const tapTargetsAudit = this.audits.get('tap-targets');
    if (tapTargetsAudit && tapTargetsAudit.score < 0.9) {
      recommendations.push({
        id: 'increase-tap-targets',
        category: 'Accessibility',
        priority: 'Important',
        title: 'Make Buttons and Links Easier to Tap',
        description: 'Clickable elements are too small or too close together on mobile.',
        actionSteps: [
          'Make buttons and links at least 48x48 pixels in size',
          'Add spacing between clickable elements (at least 8px)',
          'Increase padding on mobile navigation items',
          'Test your website on a mobile device to verify tap targets'
        ],
        impact: 'Easier navigation on mobile devices'
      });
    }

    return recommendations;
  }

  private analyzeBestPractices(): Recommendation[] {
    const recommendations: Recommendation[] = [];

    const httpsAudit = this.audits.get('is-on-https');
    if (httpsAudit && httpsAudit.score < 1) {
      recommendations.push({
        id: 'enable-https',
        category: 'Best Practices',
        priority: 'Critical',
        title: 'Enable HTTPS Security',
        description: 'Your website is not using secure HTTPS connection.',
        actionSteps: [
          'Purchase and install an SSL certificate (or use free Let\'s Encrypt)',
          'Update all internal links to use https://',
          'Redirect all http:// traffic to https://',
          'Update external links and resources to use HTTPS'
        ],
        impact: 'Secure user data and improve trust and SEO rankings'
      });
    }

    const consoleErrorsAudit = this.audits.get('errors-in-console');
    if (consoleErrorsAudit && consoleErrorsAudit.score < 1) {
      recommendations.push({
        id: 'fix-console-errors',
        category: 'Best Practices',
        priority: 'Important',
        title: 'Fix JavaScript Errors',
        description: 'Your website has JavaScript errors that may break functionality.',
        actionSteps: [
          'Open browser developer tools and check the Console tab',
          'Fix all red errors shown in the console',
          'Test your website functionality thoroughly after fixes',
          'Implement error tracking to catch issues early'
        ],
        impact: 'Reliable website functionality for all users'
      });
    }

    const imageAspectAudit = this.audits.get('image-aspect-ratio');
    if (imageAspectAudit && imageAspectAudit.score < 1) {
      recommendations.push({
        id: 'fix-image-aspect-ratios',
        category: 'Best Practices',
        priority: 'Nice to Have',
        title: 'Fix Image Display Issues',
        description: 'Images are being stretched or squished due to incorrect sizing.',
        actionSteps: [
          'Set explicit width and height attributes on images',
          'Use CSS to maintain aspect ratios (aspect-ratio property)',
          'Ensure images are not distorted when resized',
          'Upload images in the correct dimensions for their display size'
        ],
        impact: 'Professional-looking images without distortion'
      });
    }

    return recommendations;
  }
}
