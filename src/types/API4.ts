export interface IAPI4Request {
  object_id: string;
  methods: { method1: string; method2: string };
}

export interface IAPI4Response {
  add_method_success: boolean;
}
