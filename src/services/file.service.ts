export class FileService {
  static async toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  }

  static createObjectURL(file: File): string {
    return URL.createObjectURL(file);
  }

  static revokeObjectURL(url: string): void {
    try {
      URL.revokeObjectURL(url);
    } catch {
      // Ignore errors when revoking URLs
    }
  }
}
