// Custom Modules
import { ImageParams, UploadResponse } from './options';
import { ImageOptimizer } from './image-optimizer';

export default async function robotsParser(filePath: string, options?: ImageParams) {
  const imagify = new ImageOptimizer();
  const imagifyResponse: UploadResponse = await imagify.optimizeImage(filePath, options);
  return imagifyResponse;
}
