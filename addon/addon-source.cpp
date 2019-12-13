#include <node.h>
#include <stdint.h>
#include <cstdlib>

using namespace v8;

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

void Abs(const FunctionCallbackInfo <Value> &args) {
    Isolate *isolate = args.GetIsolate();

    if (args.Length() < 1) {
        return;
    }

    double value = args[0]->NumberValue() + 0;
    double absValue = abs(value);

    Local <Number> num = Number::New(isolate, absValue);
    args.GetReturnValue().Set(num);
}

void Clz32(const FunctionCallbackInfo <Value> &args) {
    Isolate *isolate = args.GetIsolate();

    if (args.Length() < 1) {
        return;
    }

    int value = args[0]->NumberValue() + 0;
    int zeros = bitCount(value);

    Local <Number> num = Number::New(isolate, zeros);
    args.GetReturnValue().Set(num);
}

void Init(Local <Object> exports) {
    NODE_SET_METHOD(exports, "abs", Abs);
    NODE_SET_METHOD(exports, "clz32", Clz32);
}

NODE_MODULE(mathaddon, Init)
