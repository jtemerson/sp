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
import firebase from '@firebase/app';
import { Database } from './src/api/Database';
import { Query } from './src/api/Query';
import { Reference } from './src/api/Reference';
import { enableLogging } from './src/core/util/util';
import { RepoManager } from './src/core/RepoManager';
import * as INTERNAL from './src/api/internal';
import * as TEST_ACCESS from './src/api/test_access';
import { isNodeSdk } from '@firebase/util';
import './src/nodePatches';
/**
 * A one off register function which returns a database based on the app and
 * passed database URL.
 *
 * @param app A valid FirebaseApp-like object
 * @param url A valid Firebase databaseURL
 */
var ServerValue = Database.ServerValue;
export function initStandalone(app, url) {
    return {
        instance: RepoManager.getInstance().databaseFromApp(app, url),
        namespace: {
            Reference: Reference,
            Query: Query,
            Database: Database,
            enableLogging: enableLogging,
            INTERNAL: INTERNAL,
            ServerValue: ServerValue,
            TEST_ACCESS: TEST_ACCESS
        }
    };
}
export function registerDatabase(instance) {
    // Register the Database Service with the 'firebase' namespace.
    var namespace = instance.INTERNAL.registerService('database', function (app, unused, url) { return RepoManager.getInstance().databaseFromApp(app, url); }, 
    // firebase.database namespace properties
    {
        Reference: Reference,
        Query: Query,
        Database: Database,
        enableLogging: enableLogging,
        INTERNAL: INTERNAL,
        ServerValue: ServerValue,
        TEST_ACCESS: TEST_ACCESS
    }, null, true);
    if (isNodeSdk()) {
        module.exports = Object.assign({}, namespace, { initStandalone: initStandalone });
    }
}
registerDatabase(firebase);
// Types to export for the admin SDK
export { Database, Query, Reference, enableLogging, ServerValue };
export { DataSnapshot } from './src/api/DataSnapshot';
export { OnDisconnect } from './src/api/onDisconnect';

//# sourceMappingURL=index.node.js.map
