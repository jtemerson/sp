import { CredentialsProvider } from '../api/credentials';
import { DatabaseInfo } from '../core/database_info';
import { MaybeDocument } from '../model/document';
import { DocumentKey } from '../model/document_key';
import { Mutation, MutationResult } from '../model/mutation';
import { AsyncQueue } from '../util/async_queue';
import { Connection } from './connection';
import { PersistentListenStream, PersistentWriteStream, WatchStreamListener, WriteStreamListener } from './persistent_stream';
import { JsonProtoSerializer } from './serializer';
/**
 * Datastore is a wrapper around the external Google Cloud Datastore grpc API,
 * which provides an interface that is more convenient for the rest of the
 * client SDK architecture to consume.
 */
export declare class Datastore {
    private databaseInfo;
    private queue;
    private connection;
    private credentials;
    private serializer;
    private initialBackoffDelay;
    constructor(databaseInfo: DatabaseInfo, queue: AsyncQueue, connection: Connection, credentials: CredentialsProvider, serializer: JsonProtoSerializer, initialBackoffDelay?: number);
    newPersistentWriteStream(listener: WriteStreamListener): PersistentWriteStream;
    newPersistentWatchStream(listener: WatchStreamListener): PersistentListenStream;
    commit(mutations: Mutation[]): Promise<MutationResult[]>;
    lookup(keys: DocumentKey[]): Promise<MaybeDocument[]>;
    /** Gets an auth token and invokes the provided RPC. */
    private invokeRPC(rpcName, request);
}
