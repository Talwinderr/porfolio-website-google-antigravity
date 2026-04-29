import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, AlertCircle, Info, Zap, Search, Eye, Shield, CheckCircle } from 'lucide-react';
import { Recommendation } from '../lib/recommendationAnalyzer';

interface PersonalizedRecommendationsProps {
  recommendations: Recommendation[];
}

export const PersonalizedRecommendations: React.FC<PersonalizedRecommendationsProps> = ({ recommendations }) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleRecommendation = (id: string) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return <AlertTriangle className="w-5 h-5" />;
      case 'Important':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'border-red-500/30 bg-red-500/5 text-red-400';
      case 'Important':
        return 'border-orange-500/30 bg-orange-500/5 text-orange-400';
      default:
        return 'border-blue-500/30 bg-blue-500/5 text-blue-400';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'Important':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      default:
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Performance':
        return <Zap className="w-4 h-4" />;
      case 'SEO':
        return <Search className="w-4 h-4" />;
      case 'Accessibility':
        return <Eye className="w-4 h-4" />;
      case 'Best Practices':
        return <Shield className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  const categories = ['All', 'Performance', 'SEO', 'Accessibility', 'Best Practices'];
  const filteredRecommendations = selectedCategory === 'All'
    ? recommendations
    : recommendations.filter(r => r.category === selectedCategory);

  const categoryCount = (cat: string) => {
    if (cat === 'All') return recommendations.length;
    return recommendations.filter(r => r.category === cat).length;
  };

  if (recommendations.length === 0) {
    return (
      <div className="pt-6 border-t border-white/10">
        <div className="flex items-center gap-3 p-6 bg-green-500/10 border border-green-500/30 rounded-lg">
          <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-green-400 mb-1">Excellent Performance!</h3>
            <p className="text-green-300 text-sm">
              Your website is well-optimized. We found no critical issues to address.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-6 border-t border-white/10">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">How to Improve Your Website</h3>
        <p className="text-gray-400 text-sm">
          Based on your website's performance, here are specific actions you can take to improve it.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => {
          const count = categoryCount(cat);
          if (count === 0 && cat !== 'All') return null;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                selectedCategory === cat
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                selectedCategory === cat
                  ? 'bg-black/20 text-black'
                  : 'bg-white/10 text-gray-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        {filteredRecommendations.map((recommendation) => (
          <div
            key={recommendation.id}
            className={`border rounded-lg overflow-hidden transition-all ${getPriorityColor(recommendation.priority)}`}
          >
            <button
              onClick={() => toggleRecommendation(recommendation.id)}
              className="w-full px-5 py-4 flex items-start gap-4 hover:bg-white/5 transition-colors text-left"
            >
              <div className="flex-shrink-0 mt-1">
                {getPriorityIcon(recommendation.priority)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getPriorityBadge(recommendation.priority)}`}>
                    {recommendation.priority}
                  </span>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-white/10 text-gray-300 border border-white/20">
                    {recommendation.category}
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-1">
                  {recommendation.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {recommendation.description}
                </p>
              </div>
              <div className="flex-shrink-0 mt-1">
                {expandedIds.has(recommendation.id) ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>

            {expandedIds.has(recommendation.id) && (
              <div className="px-5 py-4 border-t border-white/10 bg-black/30">
                <div className="mb-4">
                  <h5 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Action Steps:
                  </h5>
                  <ol className="space-y-2">
                    {recommendation.actionSteps.map((step, index) => (
                      <li key={index} className="flex gap-3 text-gray-300 text-sm">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-400 text-xs font-medium">Expected Impact:</span>
                      <p className="text-gray-300 text-sm mt-1">{recommendation.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredRecommendations.length === 0 && selectedCategory !== 'All' && (
        <div className="text-center py-8 text-gray-400">
          <p>No recommendations in this category</p>
        </div>
      )}
    </div>
  );
};
