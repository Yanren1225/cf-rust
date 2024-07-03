// .wrangler/tmp/bundle-Lk7eVa/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// build/worker/shim.mjs
import P from "./e107fc2ed42ac996e90afeaaf2999db1966541e4-index.wasm";
import $e from "./e107fc2ed42ac996e90afeaaf2999db1966541e4-index.wasm";
import { WorkerEntrypoint as Oe } from "cloudflare:workers";
var W = Object.defineProperty;
var N = (e, t) => {
  for (var n in t)
    W(e, n, { get: t[n], enumerable: true });
};
var p = {};
N(p, { IntoUnderlyingByteSource: () => T, IntoUnderlyingSink: () => q, IntoUnderlyingSource: () => L, MinifyConfig: () => C, PolishConfig: () => tt, R2Range: () => $, RequestRedirect: () => Z, __wbg_String_b9412f8799faab3e: () => bt, __wbg_abort_2aa7521d5690750e: () => Mt, __wbg_append_7bfcb4937d1d5e29: () => Tt, __wbg_buffer_12d079cc21e14bdb: () => Ae, __wbg_buffer_dd7f74bc60f1faab: () => de, __wbg_byobRequest_72fca99f9c32c193: () => pt, __wbg_byteLength_58f7b4fab1919d44: () => le, __wbg_byteOffset_81d60f7392524f62: () => he, __wbg_call_27c0f87801dedf93: () => Kt, __wbg_call_b3ca7c6051f9bec1: () => Qt, __wbg_cause_3d9c85ebaf6b1155: () => Xt, __wbg_cf_ab668814697435ac: () => dt, __wbg_close_184931724d961ccc: () => lt, __wbg_close_a994f9425dab445c: () => Lt, __wbg_done_298b57d23c0fc80c: () => te, __wbg_enqueue_ea194723156c0cc2: () => Ct, __wbg_error_8e3928cfb8a43e2b: () => ht, __wbg_fetch_1e4e8ed1f64c7e28: () => ut, __wbg_fetch_921fad6ef9e883dd: () => Wt, __wbg_get_e3c254076557e348: () => xe, __wbg_globalThis_d1e6af4856ba331b: () => se, __wbg_global_207b558942527489: () => ae, __wbg_has_0af94d20077affa2: () => ve, __wbg_headers_9620bfada380764a: () => At, __wbg_headers_abb199c3be8d817c: () => It, __wbg_instanceof_Error_e20bb56fd5591a93: () => Jt, __wbg_instanceof_Response_849eb93e75734b6e: () => xt, __wbg_iterator_2cee6dadfd956dfa: () => re, __wbg_length_c20a40f15020d68a: () => pe, __wbg_method_83327ed2e3f3229c: () => $t, __wbg_new_0d76b0581eca6298: () => Ot, __wbg_new_28c511d9baebfa89: () => Ht, __wbg_new_63b92bc8671ed464: () => ge, __wbg_new_72fb9a18b5ae2624: () => ne, __wbg_new_81740750da40724f: () => oe, __wbg_new_ab6fd82b10560829: () => zt, __wbg_newnoargs_e258087cd0daa0ea: () => Gt, __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb: () => be, __wbg_newwithlength_e9b4878cebadb3d3: () => we, __wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96: () => kt, __wbg_newwithoptreadablestreamandinit_0b825f969ca543d6: () => Ft, __wbg_newwithoptstrandinit_219732174c595a25: () => Rt, __wbg_newwithstrandinit_3fd6fba4083ff2d0: () => Dt, __wbg_next_196c84450b364254: () => Yt, __wbg_next_40fc327bfc8770e6: () => Zt, __wbg_queueMicrotask_3cbae2ec6b6cd3d6: () => Bt, __wbg_queueMicrotask_481971b0d87f3dd4: () => Pt, __wbg_resolve_b0083a7967828ec8: () => _e, __wbg_respond_b1a43b2e3a06d525: () => yt, __wbg_self_ce0dbfc45cf2f5be: () => ce, __wbg_set_1f9b04f170055d33: () => Ee, __wbg_set_a47bac70306a19a7: () => me, __wbg_set_cb0e7a5c2dd66afd: () => qt, __wbg_signal_a61f78a3478fd9bc: () => jt, __wbg_status_61a01141acd3cf74: () => Et, __wbg_stringify_8887fe74e1c50d81: () => ye, __wbg_text_450a059667fd91fd: () => St, __wbg_then_0c86a60e8fcfe9f6: () => ie, __wbg_then_a73caa9a87991566: () => ue, __wbg_toString_ffe4c9ea3b3532e9: () => Vt, __wbg_url_5f6dc4009ac5f99d: () => vt, __wbg_url_7807f6a1fddc3e23: () => Ut, __wbg_value_d93c65011f51a456: () => ee, __wbg_view_7f0ce470793a340f: () => mt, __wbg_window_c6fb939a7f436783: () => fe, __wbindgen_cb_drop: () => wt, __wbindgen_closure_wrapper4854: () => je, __wbindgen_debug_string: () => ke, __wbindgen_is_function: () => Nt, __wbindgen_is_object: () => gt, __wbindgen_is_undefined: () => ft, __wbindgen_memory: () => Se, __wbindgen_number_new: () => at, __wbindgen_object_clone_ref: () => ct, __wbindgen_object_drop_ref: () => Re, __wbindgen_string_get: () => it, __wbindgen_string_new: () => st, __wbindgen_throw: () => Fe, fetch: () => U, getMemory: () => J });
var B = new WebAssembly.Instance(P, { "./index_bg.js": p });
var _ = B.exports;
function J() {
  return _.memory;
}
var m = new Array(128).fill(void 0);
m.push(void 0, null, true, false);
function r(e) {
  return m[e];
}
var x = 0;
var k = null;
function S() {
  return (k === null || k.byteLength === 0) && (k = new Uint8Array(_.memory.buffer)), k;
}
var H = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var j = new H("utf-8");
var X = typeof j.encodeInto == "function" ? function(e, t) {
  return j.encodeInto(e, t);
} : function(e, t) {
  let n = j.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function A(e, t, n) {
  if (typeof e != "string")
    throw new Error(`expected a string argument, found ${typeof e}`);
  if (n === void 0) {
    let b = j.encode(e), v = t(b.length, 1) >>> 0;
    return S().subarray(v, v + b.length).set(b), x = b.length, v;
  }
  let o = e.length, u = t(o, 1) >>> 0, g = S(), a = 0;
  for (; a < o; a++) {
    let b = e.charCodeAt(a);
    if (b > 127)
      break;
    g[u + a] = b;
  }
  if (a !== o) {
    a !== 0 && (e = e.slice(a)), u = n(u, o, o = a + e.length * 3, 1) >>> 0;
    let b = S().subarray(u + a, u + o), v = X(e, b);
    if (v.read !== e.length)
      throw new Error("failed to pass whole string");
    a += v.written, u = n(u, o, a, 1) >>> 0;
  }
  return x = a, u;
}
function d(e) {
  return e == null;
}
var R = null;
function w() {
  return (R === null || R.byteLength === 0) && (R = new Int32Array(_.memory.buffer)), R;
}
var V = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var D = new V("utf-8", { ignoreBOM: true, fatal: true });
D.decode();
function h(e, t) {
  return e = e >>> 0, D.decode(S().subarray(e, e + t));
}
var E = m.length;
function i(e) {
  E === m.length && m.push(m.length + 1);
  let t = E;
  if (E = m[t], typeof E != "number")
    throw new Error("corrupt heap");
  return m[t] = e, t;
}
function l(e) {
  if (typeof e != "boolean")
    throw new Error(`expected a boolean argument, found ${typeof e}`);
}
function G(e) {
  e < 132 || (m[e] = E, E = e);
}
function y(e) {
  let t = r(e);
  return G(e), t;
}
function z(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let u = e.description;
    return u == null ? "Symbol" : `Symbol(${u})`;
  }
  if (t == "function") {
    let u = e.name;
    return typeof u == "string" && u.length > 0 ? `Function(${u})` : "Function";
  }
  if (Array.isArray(e)) {
    let u = e.length, g = "[";
    u > 0 && (g += z(e[0]));
    for (let a = 1; a < u; a++)
      g += ", " + z(e[a]);
    return g += "]", g;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), o;
  if (n.length > 1)
    o = n[1];
  else
    return toString.call(e);
  if (o == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : o;
}
var I = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => {
  _.__wbindgen_export_2.get(e.dtor)(e.a, e.b);
});
function K(e, t, n, o) {
  let u = { a: e, b: t, cnt: 1, dtor: n }, g = (...a) => {
    u.cnt++;
    let b = u.a;
    u.a = 0;
    try {
      return o(b, u.b, ...a);
    } finally {
      --u.cnt === 0 ? (_.__wbindgen_export_2.get(u.dtor)(b, u.b), I.unregister(u)) : u.a = b;
    }
  };
  return g.original = u, I.register(g, u, u), g;
}
function s(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    let o = function() {
      try {
        return n instanceof Error ? `${n.message}

Stack:
${n.stack}` : n.toString();
      } catch {
        return "<failed to stringify thrown value>";
      }
    }();
    throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", o), n;
  }
}
function c(e) {
  if (typeof e != "number")
    throw new Error(`expected a number argument, found ${typeof e}`);
}
function Q(e, t, n) {
  c(e), c(t), _._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc0b3cdf6df049d46(e, t, i(n));
}
function U(e, t, n) {
  let o = _.fetch(i(e), i(t), i(n));
  return y(o);
}
function f(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    _.__wbindgen_exn_store(i(n));
  }
}
var F = null;
function M() {
  return (F === null || F.byteLength === 0) && (F = new Float64Array(_.memory.buffer)), F;
}
function Y(e, t, n, o) {
  c(e), c(t), _.wasm_bindgen__convert__closures__invoke2_mut__h1d34ea32a0b6cb2a(e, t, i(n), i(o));
}
var Z = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var tt = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var et = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => _.__wbg_intounderlyingbytesource_free(e >>> 0));
var T = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, et.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    _.__wbg_intounderlyingbytesource_free(t);
  }
  get type() {
    let t, n;
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let g = _.__wbindgen_add_to_stack_pointer(-16);
      c(this.__wbg_ptr), _.intounderlyingbytesource_type(g, this.__wbg_ptr);
      var o = w()[g / 4 + 0], u = w()[g / 4 + 1];
      return t = o, n = u, h(o, u);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, n, 1);
    }
  }
  get autoAllocateChunkSize() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return c(this.__wbg_ptr), _.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  start(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    c(this.__wbg_ptr), _.intounderlyingbytesource_start(this.__wbg_ptr, i(t));
  }
  pull(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    c(this.__wbg_ptr);
    let n = _.intounderlyingbytesource_pull(this.__wbg_ptr, i(t));
    return y(n);
  }
  cancel() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let t = this.__destroy_into_raw();
    c(t), _.intounderlyingbytesource_cancel(t);
  }
};
var nt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => _.__wbg_intounderlyingsink_free(e >>> 0));
var q = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, nt.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    _.__wbg_intounderlyingsink_free(t);
  }
  write(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    c(this.__wbg_ptr);
    let n = _.intounderlyingsink_write(this.__wbg_ptr, i(t));
    return y(n);
  }
  close() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let t = this.__destroy_into_raw();
    c(t);
    let n = _.intounderlyingsink_close(t);
    return y(n);
  }
  abort(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let n = this.__destroy_into_raw();
    c(n);
    let o = _.intounderlyingsink_abort(n, i(t));
    return y(o);
  }
};
var rt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => _.__wbg_intounderlyingsource_free(e >>> 0));
var L = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, rt.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    _.__wbg_intounderlyingsource_free(t);
  }
  pull(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    c(this.__wbg_ptr);
    let n = _.intounderlyingsource_pull(this.__wbg_ptr, i(t));
    return y(n);
  }
  cancel() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    let t = this.__destroy_into_raw();
    c(t), _.intounderlyingsource_cancel(t);
  }
};
var ot = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => _.__wbg_minifyconfig_free(e >>> 0));
var C = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ot.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    _.__wbg_minifyconfig_free(t);
  }
  get js() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return c(this.__wbg_ptr), _.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set js(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    c(this.__wbg_ptr), l(t), _.__wbg_set_minifyconfig_js(this.__wbg_ptr, t);
  }
  get html() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return c(this.__wbg_ptr), _.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  set html(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    c(this.__wbg_ptr), l(t), _.__wbg_set_minifyconfig_html(this.__wbg_ptr, t);
  }
  get css() {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    return c(this.__wbg_ptr), _.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  set css(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    c(this.__wbg_ptr), l(t), _.__wbg_set_minifyconfig_css(this.__wbg_ptr, t);
  }
};
var _t = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((e) => _.__wbg_r2range_free(e >>> 0));
var $ = class {
  constructor() {
    throw new Error("cannot invoke `new` directly");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, _t.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    _.__wbg_r2range_free(t);
  }
  get offset() {
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let o = _.__wbindgen_add_to_stack_pointer(-16);
      c(this.__wbg_ptr), _.__wbg_get_r2range_offset(o, this.__wbg_ptr);
      var t = w()[o / 4 + 0], n = M()[o / 8 + 1];
      return t === 0 ? void 0 : n;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set offset(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    c(this.__wbg_ptr), d(t) || c(t), _.__wbg_set_r2range_offset(this.__wbg_ptr, !d(t), d(t) ? 0 : t);
  }
  get length() {
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let o = _.__wbindgen_add_to_stack_pointer(-16);
      c(this.__wbg_ptr), _.__wbg_get_r2range_length(o, this.__wbg_ptr);
      var t = w()[o / 4 + 0], n = M()[o / 8 + 1];
      return t === 0 ? void 0 : n;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    c(this.__wbg_ptr), d(t) || c(t), _.__wbg_set_r2range_length(this.__wbg_ptr, !d(t), d(t) ? 0 : t);
  }
  get suffix() {
    try {
      if (this.__wbg_ptr == 0)
        throw new Error("Attempt to use a moved value");
      let o = _.__wbindgen_add_to_stack_pointer(-16);
      c(this.__wbg_ptr), _.__wbg_get_r2range_suffix(o, this.__wbg_ptr);
      var t = w()[o / 4 + 0], n = M()[o / 8 + 1];
      return t === 0 ? void 0 : n;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set suffix(t) {
    if (this.__wbg_ptr == 0)
      throw new Error("Attempt to use a moved value");
    c(this.__wbg_ptr), d(t) || c(t), _.__wbg_set_r2range_suffix(this.__wbg_ptr, !d(t), d(t) ? 0 : t);
  }
};
function it(e, t) {
  let n = r(t), o = typeof n == "string" ? n : void 0;
  var u = d(o) ? 0 : A(o, _.__wbindgen_malloc, _.__wbindgen_realloc), g = x;
  w()[e / 4 + 1] = g, w()[e / 4 + 0] = u;
}
function ut() {
  return s(function(e) {
    let t = fetch(r(e));
    return i(t);
  }, arguments);
}
function st(e, t) {
  let n = h(e, t);
  return i(n);
}
function ct(e) {
  let t = r(e);
  return i(t);
}
function ft(e) {
  let t = r(e) === void 0;
  return l(t), t;
}
function at(e) {
  return i(e);
}
function gt(e) {
  let t = r(e), n = typeof t == "object" && t !== null;
  return l(n), n;
}
function wt(e) {
  let t = y(e).original;
  if (t.cnt-- == 1)
    return t.a = 0, true;
  let n = false;
  return l(n), n;
}
function bt() {
  return s(function(e, t) {
    let n = String(r(t)), o = A(n, _.__wbindgen_malloc, _.__wbindgen_realloc), u = x;
    w()[e / 4 + 1] = u, w()[e / 4 + 0] = o;
  }, arguments);
}
function dt() {
  return f(function(e) {
    let t = r(e).cf;
    return d(t) ? 0 : i(t);
  }, arguments);
}
function pt() {
  return s(function(e) {
    let t = r(e).byobRequest;
    return d(t) ? 0 : i(t);
  }, arguments);
}
function lt() {
  return f(function(e) {
    r(e).close();
  }, arguments);
}
function ht() {
  return s(function(e) {
    console.error(r(e));
  }, arguments);
}
function mt() {
  return s(function(e) {
    let t = r(e).view;
    return d(t) ? 0 : i(t);
  }, arguments);
}
function yt() {
  return f(function(e, t) {
    r(e).respond(t >>> 0);
  }, arguments);
}
function xt() {
  return s(function(e) {
    let t;
    try {
      t = r(e) instanceof Response;
    } catch {
      t = false;
    }
    let n = t;
    return l(n), n;
  }, arguments);
}
function vt() {
  return s(function(e, t) {
    let n = r(t).url, o = A(n, _.__wbindgen_malloc, _.__wbindgen_realloc), u = x;
    w()[e / 4 + 1] = u, w()[e / 4 + 0] = o;
  }, arguments);
}
function Et() {
  return s(function(e) {
    let t = r(e).status;
    return c(t), t;
  }, arguments);
}
function At() {
  return s(function(e) {
    let t = r(e).headers;
    return i(t);
  }, arguments);
}
function kt() {
  return f(function(e, t) {
    let n = new Response(r(e), r(t));
    return i(n);
  }, arguments);
}
function Rt() {
  return f(function(e, t, n) {
    let o = new Response(e === 0 ? void 0 : h(e, t), r(n));
    return i(o);
  }, arguments);
}
function Ft() {
  return f(function(e, t) {
    let n = new Response(r(e), r(t));
    return i(n);
  }, arguments);
}
function St() {
  return f(function(e) {
    let t = r(e).text();
    return i(t);
  }, arguments);
}
function jt() {
  return s(function(e) {
    let t = r(e).signal;
    return i(t);
  }, arguments);
}
function Ot() {
  return f(function() {
    let e = new AbortController();
    return i(e);
  }, arguments);
}
function Mt() {
  return s(function(e) {
    r(e).abort();
  }, arguments);
}
function zt() {
  return f(function() {
    let e = new Headers();
    return i(e);
  }, arguments);
}
function Tt() {
  return f(function(e, t, n, o, u) {
    r(e).append(h(t, n), h(o, u));
  }, arguments);
}
function qt() {
  return f(function(e, t, n, o, u) {
    r(e).set(h(t, n), h(o, u));
  }, arguments);
}
function Lt() {
  return f(function(e) {
    r(e).close();
  }, arguments);
}
function Ct() {
  return f(function(e, t) {
    r(e).enqueue(r(t));
  }, arguments);
}
function $t() {
  return s(function(e, t) {
    let n = r(t).method, o = A(n, _.__wbindgen_malloc, _.__wbindgen_realloc), u = x;
    w()[e / 4 + 1] = u, w()[e / 4 + 0] = o;
  }, arguments);
}
function Ut() {
  return s(function(e, t) {
    let n = r(t).url, o = A(n, _.__wbindgen_malloc, _.__wbindgen_realloc), u = x;
    w()[e / 4 + 1] = u, w()[e / 4 + 0] = o;
  }, arguments);
}
function It() {
  return s(function(e) {
    let t = r(e).headers;
    return i(t);
  }, arguments);
}
function Dt() {
  return f(function(e, t, n) {
    let o = new Request(h(e, t), r(n));
    return i(o);
  }, arguments);
}
function Wt() {
  return s(function(e, t) {
    let n = r(e).fetch(r(t));
    return i(n);
  }, arguments);
}
function Nt(e) {
  let t = typeof r(e) == "function";
  return l(t), t;
}
function Pt() {
  return s(function(e) {
    queueMicrotask(r(e));
  }, arguments);
}
function Bt() {
  return s(function(e) {
    let t = r(e).queueMicrotask;
    return i(t);
  }, arguments);
}
function Jt() {
  return s(function(e) {
    let t;
    try {
      t = r(e) instanceof Error;
    } catch {
      t = false;
    }
    let n = t;
    return l(n), n;
  }, arguments);
}
function Ht() {
  return s(function(e, t) {
    let n = new Error(h(e, t));
    return i(n);
  }, arguments);
}
function Xt() {
  return s(function(e) {
    let t = r(e).cause;
    return i(t);
  }, arguments);
}
function Vt() {
  return s(function(e) {
    let t = r(e).toString();
    return i(t);
  }, arguments);
}
function Gt() {
  return s(function(e, t) {
    let n = new Function(h(e, t));
    return i(n);
  }, arguments);
}
function Kt() {
  return f(function(e, t) {
    let n = r(e).call(r(t));
    return i(n);
  }, arguments);
}
function Qt() {
  return f(function(e, t, n) {
    let o = r(e).call(r(t), r(n));
    return i(o);
  }, arguments);
}
function Yt() {
  return f(function(e) {
    let t = r(e).next();
    return i(t);
  }, arguments);
}
function Zt() {
  return s(function(e) {
    let t = r(e).next;
    return i(t);
  }, arguments);
}
function te() {
  return s(function(e) {
    let t = r(e).done;
    return l(t), t;
  }, arguments);
}
function ee() {
  return s(function(e) {
    let t = r(e).value;
    return i(t);
  }, arguments);
}
function ne() {
  return s(function() {
    let e = new Object();
    return i(e);
  }, arguments);
}
function re() {
  return s(function() {
    return i(Symbol.iterator);
  }, arguments);
}
function oe() {
  return s(function(e, t) {
    try {
      var n = { a: e, b: t }, o = (g, a) => {
        let b = n.a;
        n.a = 0;
        try {
          return Y(b, n.b, g, a);
        } finally {
          n.a = b;
        }
      };
      let u = new Promise(o);
      return i(u);
    } finally {
      n.a = n.b = 0;
    }
  }, arguments);
}
function _e() {
  return s(function(e) {
    let t = Promise.resolve(r(e));
    return i(t);
  }, arguments);
}
function ie() {
  return s(function(e, t) {
    let n = r(e).then(r(t));
    return i(n);
  }, arguments);
}
function ue() {
  return s(function(e, t, n) {
    let o = r(e).then(r(t), r(n));
    return i(o);
  }, arguments);
}
function se() {
  return f(function() {
    let e = globalThis.globalThis;
    return i(e);
  }, arguments);
}
function ce() {
  return f(function() {
    let e = self.self;
    return i(e);
  }, arguments);
}
function fe() {
  return f(function() {
    let e = window.window;
    return i(e);
  }, arguments);
}
function ae() {
  return f(function() {
    let e = global.global;
    return i(e);
  }, arguments);
}
function ge() {
  return s(function(e) {
    let t = new Uint8Array(r(e));
    return i(t);
  }, arguments);
}
function we() {
  return s(function(e) {
    let t = new Uint8Array(e >>> 0);
    return i(t);
  }, arguments);
}
function be() {
  return s(function(e, t, n) {
    let o = new Uint8Array(r(e), t >>> 0, n >>> 0);
    return i(o);
  }, arguments);
}
function de() {
  return s(function(e) {
    let t = r(e).buffer;
    return i(t);
  }, arguments);
}
function pe() {
  return s(function(e) {
    let t = r(e).length;
    return c(t), t;
  }, arguments);
}
function le() {
  return s(function(e) {
    let t = r(e).byteLength;
    return c(t), t;
  }, arguments);
}
function he() {
  return s(function(e) {
    let t = r(e).byteOffset;
    return c(t), t;
  }, arguments);
}
function me() {
  return s(function(e, t, n) {
    r(e).set(r(t), n >>> 0);
  }, arguments);
}
function ye() {
  return f(function(e) {
    let t = JSON.stringify(r(e));
    return i(t);
  }, arguments);
}
function xe() {
  return f(function(e, t) {
    let n = Reflect.get(r(e), r(t));
    return i(n);
  }, arguments);
}
function ve() {
  return f(function(e, t) {
    let n = Reflect.has(r(e), r(t));
    return l(n), n;
  }, arguments);
}
function Ee() {
  return f(function(e, t, n) {
    let o = Reflect.set(r(e), r(t), r(n));
    return l(o), o;
  }, arguments);
}
function Ae() {
  return s(function(e) {
    let t = r(e).buffer;
    return i(t);
  }, arguments);
}
function ke(e, t) {
  let n = z(r(t)), o = A(n, _.__wbindgen_malloc, _.__wbindgen_realloc), u = x;
  w()[e / 4 + 1] = u, w()[e / 4 + 0] = o;
}
function Re(e) {
  y(e);
}
function Fe(e, t) {
  throw new Error(h(e, t));
}
function Se() {
  let e = _.memory;
  return i(e);
}
function je() {
  return s(function(e, t, n) {
    let o = K(e, t, 397, Q);
    return i(o);
  }, arguments);
}
var O = class extends Oe {
  async fetch(t) {
    return await U(t, this.env, this.ctx);
  }
  async queue(t) {
    return await (void 0)(t, this.env, this.ctx);
  }
  async scheduled(t) {
    return await (void 0)(t, this.env, this.ctx);
  }
};
var Me = ["IntoUnderlyingByteSource", "IntoUnderlyingSink", "IntoUnderlyingSource", "MinifyConfig", "PolishConfig", "R2Range", "RequestRedirect", "fetch", "queue", "scheduled", "getMemory"];
Object.keys(p).map((e) => {
  Me.includes(e) | e.startsWith("__") || (O.prototype[e] = p[e]);
});
var Ie = O;

// node_modules/.pnpm/wrangler@3.62.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/.pnpm/wrangler@3.62.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-Lk7eVa/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = Ie;

// node_modules/.pnpm/wrangler@3.62.0/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-Lk7eVa/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  T as IntoUnderlyingByteSource,
  q as IntoUnderlyingSink,
  L as IntoUnderlyingSource,
  C as MinifyConfig,
  tt as PolishConfig,
  $ as R2Range,
  Z as RequestRedirect,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  bt as __wbg_String_b9412f8799faab3e,
  Mt as __wbg_abort_2aa7521d5690750e,
  Tt as __wbg_append_7bfcb4937d1d5e29,
  Ae as __wbg_buffer_12d079cc21e14bdb,
  de as __wbg_buffer_dd7f74bc60f1faab,
  pt as __wbg_byobRequest_72fca99f9c32c193,
  le as __wbg_byteLength_58f7b4fab1919d44,
  he as __wbg_byteOffset_81d60f7392524f62,
  Kt as __wbg_call_27c0f87801dedf93,
  Qt as __wbg_call_b3ca7c6051f9bec1,
  Xt as __wbg_cause_3d9c85ebaf6b1155,
  dt as __wbg_cf_ab668814697435ac,
  lt as __wbg_close_184931724d961ccc,
  Lt as __wbg_close_a994f9425dab445c,
  te as __wbg_done_298b57d23c0fc80c,
  Ct as __wbg_enqueue_ea194723156c0cc2,
  ht as __wbg_error_8e3928cfb8a43e2b,
  ut as __wbg_fetch_1e4e8ed1f64c7e28,
  Wt as __wbg_fetch_921fad6ef9e883dd,
  xe as __wbg_get_e3c254076557e348,
  se as __wbg_globalThis_d1e6af4856ba331b,
  ae as __wbg_global_207b558942527489,
  ve as __wbg_has_0af94d20077affa2,
  At as __wbg_headers_9620bfada380764a,
  It as __wbg_headers_abb199c3be8d817c,
  Jt as __wbg_instanceof_Error_e20bb56fd5591a93,
  xt as __wbg_instanceof_Response_849eb93e75734b6e,
  re as __wbg_iterator_2cee6dadfd956dfa,
  pe as __wbg_length_c20a40f15020d68a,
  $t as __wbg_method_83327ed2e3f3229c,
  Ot as __wbg_new_0d76b0581eca6298,
  Ht as __wbg_new_28c511d9baebfa89,
  ge as __wbg_new_63b92bc8671ed464,
  ne as __wbg_new_72fb9a18b5ae2624,
  oe as __wbg_new_81740750da40724f,
  zt as __wbg_new_ab6fd82b10560829,
  Gt as __wbg_newnoargs_e258087cd0daa0ea,
  be as __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb,
  we as __wbg_newwithlength_e9b4878cebadb3d3,
  kt as __wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96,
  Ft as __wbg_newwithoptreadablestreamandinit_0b825f969ca543d6,
  Rt as __wbg_newwithoptstrandinit_219732174c595a25,
  Dt as __wbg_newwithstrandinit_3fd6fba4083ff2d0,
  Yt as __wbg_next_196c84450b364254,
  Zt as __wbg_next_40fc327bfc8770e6,
  Bt as __wbg_queueMicrotask_3cbae2ec6b6cd3d6,
  Pt as __wbg_queueMicrotask_481971b0d87f3dd4,
  _e as __wbg_resolve_b0083a7967828ec8,
  yt as __wbg_respond_b1a43b2e3a06d525,
  ce as __wbg_self_ce0dbfc45cf2f5be,
  Ee as __wbg_set_1f9b04f170055d33,
  me as __wbg_set_a47bac70306a19a7,
  qt as __wbg_set_cb0e7a5c2dd66afd,
  jt as __wbg_signal_a61f78a3478fd9bc,
  Et as __wbg_status_61a01141acd3cf74,
  ye as __wbg_stringify_8887fe74e1c50d81,
  St as __wbg_text_450a059667fd91fd,
  ie as __wbg_then_0c86a60e8fcfe9f6,
  ue as __wbg_then_a73caa9a87991566,
  Vt as __wbg_toString_ffe4c9ea3b3532e9,
  vt as __wbg_url_5f6dc4009ac5f99d,
  Ut as __wbg_url_7807f6a1fddc3e23,
  ee as __wbg_value_d93c65011f51a456,
  mt as __wbg_view_7f0ce470793a340f,
  fe as __wbg_window_c6fb939a7f436783,
  wt as __wbindgen_cb_drop,
  je as __wbindgen_closure_wrapper4854,
  ke as __wbindgen_debug_string,
  Nt as __wbindgen_is_function,
  gt as __wbindgen_is_object,
  ft as __wbindgen_is_undefined,
  Se as __wbindgen_memory,
  at as __wbindgen_number_new,
  ct as __wbindgen_object_clone_ref,
  Re as __wbindgen_object_drop_ref,
  it as __wbindgen_string_get,
  st as __wbindgen_string_new,
  Fe as __wbindgen_throw,
  middleware_loader_entry_default as default,
  U as fetch,
  J as getMemory,
  $e as wasmModule
};
//# sourceMappingURL=shim.js.map
