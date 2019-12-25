#include <napi.h>
#include <stdint.h>
#include <cstdlib>

using namespace Napi;

int bitCount(int num) {
    if (num == 0) {
        return 32;
    }

    uint32_t x = (uint32_t) num;

    static const char debruijn32[32] = {
            0, 31, 9, 30, 3, 8, 13, 29, 2, 5, 7, 21, 12, 24, 28, 19,
            1, 10, 4, 14, 6, 22, 25, 20, 11, 15, 23, 26, 16, 27, 17, 18
    };
    x |= x >> 1;
    x |= x >> 2;
    x |= x >> 4;
    x |= x >> 8;
    x |= x >> 16;
    x++;
    return debruijn32[x * 0x076be629 >> 27];
}

Value Clz32(const CallbackInfo& info) {
     Env env = info.Env();

      if (info.Length() != 1) {
        TypeError::New(env, "Wrong number of arguments")
            .ThrowAsJavaScriptException();
        return env.Null();
      }

      if (!info[0].IsNumber()) {
        TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
        return env.Null();
      }

      double arg0 = info[0].As<Number>().DoubleValue();
      Number num = Number::New(env, bitCount(arg0));

      return num;
}

Value Abs(const CallbackInfo& info) {
     Env env = info.Env();

      if (info.Length() != 1) {
        TypeError::New(env, "Wrong number of arguments")
            .ThrowAsJavaScriptException();
        return env.Null();
      }

      if (!info[0].IsNumber()) {
        TypeError::New(env, "Wrong arguments").ThrowAsJavaScriptException();
        return env.Null();
      }

      double arg0 = info[0].As<Number>().DoubleValue();
      Number num = Number::New(env, abs(arg0));

      return num;
}

Object Init(Env env, Object exports) {
  exports.Set(String::New(env, "abs"), Function::New(env, Abs));
  exports.Set(String::New(env, "clz32"), Function::New(env, Clz32));

  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
