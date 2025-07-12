import { API_BASE_URL } from "@/config";

/**
 * Constructs a proper image URL from the given image URL
 * Handles both relative and absolute URLs correctly
 */
export function getImageUrl(imageUrl: string | null | undefined): string {
  if (!imageUrl) {
    return '/common/broken-image-placeholder.png'; // fallback image
  }
  
  // If the URL is already absolute (starts with http:// or https://), return as is
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // If it's a relative URL, prepend the API_BASE_URL
  return `${API_BASE_URL}${imageUrl}`;
}

/**
 * Constructs a proper file URL (for PDFs, documents, etc.) from the given file URL
 * Handles both relative and absolute URLs correctly
 */
export function getFileUrl(fileUrl: string | null | undefined): string {
  if (!fileUrl) {
    return '';
  }
  
  // If the URL is already absolute (starts with http:// or https://), return as is
  if (fileUrl.startsWith('http://') || fileUrl.startsWith('https://')) {
    return fileUrl;
  }
  
  // If it's a relative URL, prepend the API_BASE_URL
  return `${API_BASE_URL}${fileUrl}`;
}
