'use strict';

/** @template T */
module.exports = class TokenStream {
  #tokens

  /** @param {T[]} tokens */
  constructor (tokens) {
    if (!Array.isArray(tokens)) {
      throw new TypeError('tokens must be passed to TokenStream as an array.');
    }
    this.#tokens = tokens;
  }

  /** @param {number} index */
  lookahead (index) {
    if (this.#tokens.length <= index) {
      throw new Error('Cannot read past the end of a stream');
    }
    return this.#tokens[index];
  }

  peek () {
    if (this.#tokens.length === 0) {
      throw new Error('Cannot read past the end of a stream');
    }
    return this.#tokens[0];
  }

  advance () {
    if (this.#tokens.length === 0) {
      throw new Error('Cannot read past the end of a stream');
    }
    return this.#tokens.shift();
  }

  /** @param {T} token */
  defer (token) {
    this.#tokens.unshift(token);
  }
}
