import { SwaggerException } from "@/api/api";

/**
 * Interface for displaying error alerts
 */
export interface ErrorAlert {
  /**
   * Error code
   */
  code: string,

  /**
   * Error message
   */
  message: string
};

/**
 * Response interface from API for errors
 */
interface ErrorResponse {
  /**
   * Error type
   */
  type: string,

  /**
   * Error title
   */
  title: string,

  /**
   * Error code
   */
  status: number,

  /**
   * Error detail
   */
  detail: string
}

/**
 * Convert error in API calls to IError interface for displaying error alerts
 * @param err Error
 * @returns IError
 */
export const apiError = (err: any): ErrorAlert => {
  if (SwaggerException.isSwaggerException(err)) {
    if (err.response) {
      if (typeof err.response == 'object') {
        const res = err.response as ErrorResponse;
        return { code: res.status.toString(), message: res.title };
      } else return { code: '', message: err.response };
    } else
      return { code: err.status.toString(), message: err.message };
  } else
    throw err;
}