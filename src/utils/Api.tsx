import {useEffect, useState, Fragment } from 'react';
import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';
interface AxiosInstance {
  request<T = any, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R>;
}
