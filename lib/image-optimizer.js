"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageOptimizer = void 0;
// Core Modules
const fs_1 = __importDefault(require("fs"));
// NPM Modules
const axios_1 = __importDefault(require("axios"));
class ImageOptimizer {
    optimizeImage(filePath, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const imageFile = fs_1.default.readFileSync(filePath);
            return yield (0, axios_1.default)({
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
                .catch((error) => {
                console.log('Error Received:\n', error);
            });
        });
    }
}
exports.ImageOptimizer = ImageOptimizer;
