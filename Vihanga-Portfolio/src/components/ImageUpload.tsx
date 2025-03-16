import React, { useCallback, useState } from 'react';
import { Upload } from 'lucide-react';
import { uploadImage, validateImage } from '../utils/imageUpload';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload, className }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrop = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    await handleFile(file);
  }, []);

  const handleFileInput = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await handleFile(file);
    }
  }, []);

  const handleFile = async (file: File) => {
    try {
      setError(null);
      setIsUploading(true);
      
      validateImage(file);
      const url = await uploadImage(file);
      onUpload(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={className}>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-lg p-6 
          ${isUploading ? 'bg-gray-100' : 'hover:bg-gray-50'} 
          transition-colors duration-200 cursor-pointer`}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            {isUploading ? 'Uploading...' : 'Drag and drop or click to upload'}
          </p>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
