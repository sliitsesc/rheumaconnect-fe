/**
 * Utility function to handle smart navigation
 * - If on homepage and target is a section ID, scroll to that section
 * - Otherwise, navigate to the path-based route
 */
export const getSmartNavigationUrl = (linkUrl: string, pathname: string): string => {
  // Define mapping of hash routes to path routes
  const routeMapping: Record<string, string> = {
    '#home': '/',
    '#categories': '/categories',
    '#contact': '/contact',
    '#about': '/about'
  };

  // If it's already a path-based route, return as is
  if (!linkUrl.startsWith('#')) {
    return linkUrl;
  }

  // If user is on homepage and the target is a section that exists on homepage
  if (pathname === '/' && (linkUrl === '#home' || linkUrl === '#categories' || linkUrl === '#contact')) {
    return linkUrl; // Keep hash for scrolling behavior on homepage
  }

  // Otherwise, return the path-based route
  return routeMapping[linkUrl] || linkUrl;
};

/**
 * Check if a URL is a hash-based route that should trigger scrolling behavior
 */
export const isHashRoute = (url: string): boolean => {
  return url.startsWith('#');
};
