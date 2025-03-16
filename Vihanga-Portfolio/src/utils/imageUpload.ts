export async function uploadImage(file: File): Promise<string> {
  try {
    // Use FormData to send the file
    const formData = new FormData();
    formData.append('file', file);
    
    // Replace this URL with your actual image upload API endpoint
    const response = await fetch('YOUR_UPLOAD_API_ENDPOINT', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.url; // Assuming the API returns the image URL
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

export function validateImage(file: File): boolean {
  // Validate file type
  const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (!validTypes.includes(file.type)) {
    throw new Error('Invalid file type. Please upload an image file.');
  }

  // Validate file size (max 5MB)
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  if (file.size > maxSize) {
    throw new Error('File size too large. Maximum size is 5MB.');
  }

  return true;
}
