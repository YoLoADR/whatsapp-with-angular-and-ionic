export interface LoginResponse {
  // ~ Servira just à mieux comprendre ce qui sera typer avec cette interface
  result?: {
    email?: string;
    uid?: string;
  }
  error?: {
    code?: string;
    message?: string;
  }
}
