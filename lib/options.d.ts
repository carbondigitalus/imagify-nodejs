export interface ImageParams {
    image: any;
    data?: DataParams;
}
export interface DataParams {
    normal?: boolean;
    aggressive?: boolean;
    ultra?: boolean;
    keep_exif?: boolean;
    resize?: boolean | {
        width?: number;
        height?: number;
        percentage?: number;
    };
}
export interface UploadResponse {
    code: number;
    image: string;
    new_size: number;
    original_size: number;
    percent: number;
    success: boolean;
}
