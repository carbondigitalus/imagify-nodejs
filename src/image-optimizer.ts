// Core Modules
import fs from 'fs';

// NPM Modules
import axios from 'axios';

// Custom Modules
import { ImageParams } from './options';

export class ImageOptimizer {
  async optimizeImage(filePath: string, options?: ImageParams) {
    const imageFile = fs.readFileSync(filePath);
    return await axios({
      method: 'post',
      url: `${process.env.API_URL}/upload`,
      headers: { Authorization: `token ${process.env.API_KEY}` },
      data: {
        image: imageFile,
        data: options != null || {}
      }
    })
      .then((res) => {
        console.log('Success:\n', res.statusText);
        return res.data;
      })
      .catch((error: Error) => {
        console.log('Error Received:\n', error);
      })
  }
}
