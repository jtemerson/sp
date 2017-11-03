/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { SortedMap } from './SortedMap';
import { Path } from './Path';
/**
 * A tree with immutable elements.
 */
export declare class ImmutableTree<T> {
    readonly value: T | null;
    readonly children: SortedMap<string, ImmutableTree<T>>;
    static Empty: ImmutableTree<any>;
    /**
     * @template T
     * @param {!Object.<string, !T>} obj
     * @return {!ImmutableTree.<!T>}
     */
    static fromObject<T>(obj: {
        [k: string]: T;
    }): ImmutableTree<T>;
    /**
     * @template T
     * @param {?T} value
     * @param {SortedMap.<string, !ImmutableTree.<T>>=} children
     */
    constructor(value: T | null, children?: SortedMap<string, ImmutableTree<T>>);
    /**
     * True if the value is empty and there are no children
     * @return {boolean}
     */
    isEmpty(): boolean;
    /**
     * Given a path and predicate, return the first node and the path to that node
     * where the predicate returns true.
     *
     * TODO Do a perf test -- If we're creating a bunch of {path: value:} objects
     * on the way back out, it may be better to pass down a pathSoFar obj.
     *
     * @param {!Path} relativePath The remainder of the path
     * @param {function(T):boolean} predicate The predicate to satisfy to return a
     *   node
     * @return {?{path:!Path, value:!T}}
     */
    findRootMostMatchingPathAndValue(relativePath: Path, predicate: (a: T) => boolean): {
        path: Path;
        value: T;
    } | null;
    /**
     * Find, if it exists, the shortest subpath of the given path that points a defined
     * value in the tree
     * @param {!Path} relativePath
     * @return {?{path: !Path, value: !T}}
     */
    findRootMostValueAndPath(relativePath: Path): {
        path: Path;
        value: T;
    } | null;
    /**
     * @param {!Path} relativePath
     * @return {!ImmutableTree.<T>} The subtree at the given path
     */
    subtree(relativePath: Path): ImmutableTree<T>;
    /**
     * Sets a value at the specified path.
     *
     * @param {!Path} relativePath Path to set value at.
     * @param {?T} toSet Value to set.
     * @return {!ImmutableTree.<T>} Resulting tree.
     */
    set(relativePath: Path, toSet: T | null): ImmutableTree<T>;
    /**
     * Removes the value at the specified path.
     *
     * @param {!Path} relativePath Path to value to remove.
     * @return {!ImmutableTree.<T>} Resulting tree.
     */
    remove(relativePath: Path): ImmutableTree<T>;
    /**
     * Gets a value from the tree.
     *
     * @param {!Path} relativePath Path to get value for.
     * @return {?T} Value at path, or null.
     */
    get(relativePath: Path): T | null;
    /**
     * Replace the subtree at the specified path with the given new tree.
     *
     * @param {!Path} relativePath Path to replace subtree for.
     * @param {!ImmutableTree} newTree New tree.
     * @return {!ImmutableTree} Resulting tree.
     */
    setTree(relativePath: Path, newTree: ImmutableTree<T>): ImmutableTree<T>;
    /**
     * Performs a depth first fold on this tree. Transforms a tree into a single
     * value, given a function that operates on the path to a node, an optional
     * current value, and a map of child names to folded subtrees
     * @template V
     * @param {function(Path, ?T, Object.<string, V>):V} fn
     * @return {V}
     */
    fold<V>(fn: (path: Path, value: T, children: {
        [k: string]: V;
    }) => V): V;
    /**
     * Recursive helper for public-facing fold() method
     * @template V
     * @param {!Path} pathSoFar
     * @param {function(Path, ?T, Object.<string, V>):V} fn
     * @return {V}
     * @private
     */
    private fold_<V>(pathSoFar, fn);
    /**
     * Find the first matching value on the given path. Return the result of applying f to it.
     * @template V
     * @param {!Path} path
     * @param {!function(!Path, !T):?V} f
     * @return {?V}
     */
    findOnPath<V>(path: Path, f: (path: Path, value: T) => V | null): V | null;
    private findOnPath_<V>(pathToFollow, pathSoFar, f);
    /**
     *
     * @param {!Path} path
     * @param {!function(!Path, !T)} f
     * @returns {!ImmutableTree.<T>}
     */
    foreachOnPath(path: Path, f: (path: Path, value: T) => void): ImmutableTree<T>;
    private foreachOnPath_(pathToFollow, currentRelativePath, f);
    /**
     * Calls the given function for each node in the tree that has a value.
     *
     * @param {function(!Path, !T)} f A function to be called with
     *   the path from the root of the tree to a node, and the value at that node.
     *   Called in depth-first order.
     */
    foreach(f: (path: Path, value: T) => void): void;
    private foreach_(currentRelativePath, f);
    /**
     *
     * @param {function(string, !T)} f
     */
    foreachChild(f: (name: string, value: T) => void): void;
}
