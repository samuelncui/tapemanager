// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "job_restore.proto" (package "job_restore", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { CopyStatus } from "./copy_status";
/**
 * @generated from protobuf message job_restore.JobRestoreParam
 */
export interface JobRestoreParam {
    /**
     * @generated from protobuf field: repeated int64 file_ids = 1;
     */
    fileIds: bigint[];
}
/**
 * @generated from protobuf message job_restore.JobRestoreDispatchParam
 */
export interface JobRestoreDispatchParam {
    /**
     * @generated from protobuf oneof: param
     */
    param: {
        oneofKind: "waitForTape";
        /**
         * @generated from protobuf field: job_restore.JobRestoreWaitForTapeParam wait_for_tape = 1;
         */
        waitForTape: JobRestoreWaitForTapeParam;
    } | {
        oneofKind: "copying";
        /**
         * @generated from protobuf field: job_restore.JobRestoreCopyingParam copying = 2;
         */
        copying: JobRestoreCopyingParam;
    } | {
        oneofKind: "finished";
        /**
         * @generated from protobuf field: job_restore.JobRestoreFinishedParam finished = 255;
         */
        finished: JobRestoreFinishedParam;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message job_restore.JobRestoreWaitForTapeParam
 */
export interface JobRestoreWaitForTapeParam {
}
/**
 * @generated from protobuf message job_restore.JobRestoreCopyingParam
 */
export interface JobRestoreCopyingParam {
    /**
     * @generated from protobuf field: string device = 1;
     */
    device: string;
}
/**
 * @generated from protobuf message job_restore.JobRestoreFinishedParam
 */
export interface JobRestoreFinishedParam {
}
/**
 * @generated from protobuf message job_restore.RestoreFile
 */
export interface RestoreFile {
    /**
     * @generated from protobuf field: int64 file_id = 1;
     */
    fileId: bigint;
    /**
     * @generated from protobuf field: int64 tape_id = 2;
     */
    tapeId: bigint;
    /**
     * @generated from protobuf field: int64 position_id = 3;
     */
    positionId: bigint;
    /**
     * @generated from protobuf field: copy_status.CopyStatus status = 17;
     */
    status: CopyStatus;
    /**
     * @generated from protobuf field: int64 size = 18;
     */
    size: bigint;
    /**
     * @generated from protobuf field: bytes hash = 19;
     */
    hash: Uint8Array;
    /**
     * @generated from protobuf field: string tape_path = 33;
     */
    tapePath: string;
    /**
     * @generated from protobuf field: string target_path = 34;
     */
    targetPath: string;
}
/**
 * @generated from protobuf message job_restore.RestoreTape
 */
export interface RestoreTape {
    /**
     * @generated from protobuf field: int64 tape_id = 1;
     */
    tapeId: bigint;
    /**
     * @generated from protobuf field: string barcode = 2;
     */
    barcode: string;
    /**
     * @generated from protobuf field: copy_status.CopyStatus status = 17;
     */
    status: CopyStatus;
    /**
     * @generated from protobuf field: repeated job_restore.RestoreFile files = 18;
     */
    files: RestoreFile[];
}
/**
 * @generated from protobuf message job_restore.JobRestoreState
 */
export interface JobRestoreState {
    /**
     * @generated from protobuf field: job_restore.JobRestoreStep step = 1;
     */
    step: JobRestoreStep;
    /**
     * @generated from protobuf field: repeated job_restore.RestoreTape tapes = 2;
     */
    tapes: RestoreTape[];
}
/**
 * @generated from protobuf message job_restore.JobRestoreDisplay
 */
export interface JobRestoreDisplay {
    /**
     * @generated from protobuf field: int64 copied_bytes = 1;
     */
    copiedBytes: bigint;
    /**
     * @generated from protobuf field: int64 copied_files = 2;
     */
    copiedFiles: bigint;
    /**
     * @generated from protobuf field: int64 total_bytes = 3;
     */
    totalBytes: bigint;
    /**
     * @generated from protobuf field: int64 total_files = 4;
     */
    totalFiles: bigint;
    /**
     * @generated from protobuf field: optional int64 speed = 5;
     */
    speed?: bigint;
    /**
     * @generated from protobuf field: int64 start_time = 6;
     */
    startTime: bigint;
}
/**
 * @generated from protobuf enum job_restore.JobRestoreStep
 */
export enum JobRestoreStep {
    /**
     * @generated from protobuf enum value: PENDING = 0;
     */
    PENDING = 0,
    /**
     * @generated from protobuf enum value: WAIT_FOR_TAPE = 1;
     */
    WAIT_FOR_TAPE = 1,
    /**
     * @generated from protobuf enum value: COPYING = 2;
     */
    COPYING = 2,
    /**
     * @generated from protobuf enum value: FINISHED = 255;
     */
    FINISHED = 255
}
// @generated message type with reflection information, may provide speed optimized methods
class JobRestoreParam$Type extends MessageType<JobRestoreParam> {
    constructor() {
        super("job_restore.JobRestoreParam", [
            { no: 1, name: "file_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<JobRestoreParam>): JobRestoreParam {
        const message = { fileIds: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JobRestoreParam>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JobRestoreParam): JobRestoreParam {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int64 file_ids */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fileIds.push(reader.int64().toBigInt());
                    else
                        message.fileIds.push(reader.int64().toBigInt());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: JobRestoreParam, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated int64 file_ids = 1; */
        if (message.fileIds.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fileIds.length; i++)
                writer.int64(message.fileIds[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message job_restore.JobRestoreParam
 */
export const JobRestoreParam = new JobRestoreParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JobRestoreDispatchParam$Type extends MessageType<JobRestoreDispatchParam> {
    constructor() {
        super("job_restore.JobRestoreDispatchParam", [
            { no: 1, name: "wait_for_tape", kind: "message", oneof: "param", T: () => JobRestoreWaitForTapeParam },
            { no: 2, name: "copying", kind: "message", oneof: "param", T: () => JobRestoreCopyingParam },
            { no: 255, name: "finished", kind: "message", oneof: "param", T: () => JobRestoreFinishedParam }
        ]);
    }
    create(value?: PartialMessage<JobRestoreDispatchParam>): JobRestoreDispatchParam {
        const message = { param: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JobRestoreDispatchParam>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JobRestoreDispatchParam): JobRestoreDispatchParam {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* job_restore.JobRestoreWaitForTapeParam wait_for_tape */ 1:
                    message.param = {
                        oneofKind: "waitForTape",
                        waitForTape: JobRestoreWaitForTapeParam.internalBinaryRead(reader, reader.uint32(), options, (message.param as any).waitForTape)
                    };
                    break;
                case /* job_restore.JobRestoreCopyingParam copying */ 2:
                    message.param = {
                        oneofKind: "copying",
                        copying: JobRestoreCopyingParam.internalBinaryRead(reader, reader.uint32(), options, (message.param as any).copying)
                    };
                    break;
                case /* job_restore.JobRestoreFinishedParam finished */ 255:
                    message.param = {
                        oneofKind: "finished",
                        finished: JobRestoreFinishedParam.internalBinaryRead(reader, reader.uint32(), options, (message.param as any).finished)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: JobRestoreDispatchParam, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* job_restore.JobRestoreWaitForTapeParam wait_for_tape = 1; */
        if (message.param.oneofKind === "waitForTape")
            JobRestoreWaitForTapeParam.internalBinaryWrite(message.param.waitForTape, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* job_restore.JobRestoreCopyingParam copying = 2; */
        if (message.param.oneofKind === "copying")
            JobRestoreCopyingParam.internalBinaryWrite(message.param.copying, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* job_restore.JobRestoreFinishedParam finished = 255; */
        if (message.param.oneofKind === "finished")
            JobRestoreFinishedParam.internalBinaryWrite(message.param.finished, writer.tag(255, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message job_restore.JobRestoreDispatchParam
 */
export const JobRestoreDispatchParam = new JobRestoreDispatchParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JobRestoreWaitForTapeParam$Type extends MessageType<JobRestoreWaitForTapeParam> {
    constructor() {
        super("job_restore.JobRestoreWaitForTapeParam", []);
    }
    create(value?: PartialMessage<JobRestoreWaitForTapeParam>): JobRestoreWaitForTapeParam {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JobRestoreWaitForTapeParam>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JobRestoreWaitForTapeParam): JobRestoreWaitForTapeParam {
        return target ?? this.create();
    }
    internalBinaryWrite(message: JobRestoreWaitForTapeParam, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message job_restore.JobRestoreWaitForTapeParam
 */
export const JobRestoreWaitForTapeParam = new JobRestoreWaitForTapeParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JobRestoreCopyingParam$Type extends MessageType<JobRestoreCopyingParam> {
    constructor() {
        super("job_restore.JobRestoreCopyingParam", [
            { no: 1, name: "device", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<JobRestoreCopyingParam>): JobRestoreCopyingParam {
        const message = { device: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JobRestoreCopyingParam>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JobRestoreCopyingParam): JobRestoreCopyingParam {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string device */ 1:
                    message.device = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: JobRestoreCopyingParam, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string device = 1; */
        if (message.device !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.device);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message job_restore.JobRestoreCopyingParam
 */
export const JobRestoreCopyingParam = new JobRestoreCopyingParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JobRestoreFinishedParam$Type extends MessageType<JobRestoreFinishedParam> {
    constructor() {
        super("job_restore.JobRestoreFinishedParam", []);
    }
    create(value?: PartialMessage<JobRestoreFinishedParam>): JobRestoreFinishedParam {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JobRestoreFinishedParam>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JobRestoreFinishedParam): JobRestoreFinishedParam {
        return target ?? this.create();
    }
    internalBinaryWrite(message: JobRestoreFinishedParam, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message job_restore.JobRestoreFinishedParam
 */
export const JobRestoreFinishedParam = new JobRestoreFinishedParam$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RestoreFile$Type extends MessageType<RestoreFile> {
    constructor() {
        super("job_restore.RestoreFile", [
            { no: 1, name: "file_id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "tape_id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "position_id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 17, name: "status", kind: "enum", T: () => ["copy_status.CopyStatus", CopyStatus] },
            { no: 18, name: "size", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 19, name: "hash", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 33, name: "tape_path", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 34, name: "target_path", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RestoreFile>): RestoreFile {
        const message = { fileId: 0n, tapeId: 0n, positionId: 0n, status: 0, size: 0n, hash: new Uint8Array(0), tapePath: "", targetPath: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RestoreFile>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RestoreFile): RestoreFile {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 file_id */ 1:
                    message.fileId = reader.int64().toBigInt();
                    break;
                case /* int64 tape_id */ 2:
                    message.tapeId = reader.int64().toBigInt();
                    break;
                case /* int64 position_id */ 3:
                    message.positionId = reader.int64().toBigInt();
                    break;
                case /* copy_status.CopyStatus status */ 17:
                    message.status = reader.int32();
                    break;
                case /* int64 size */ 18:
                    message.size = reader.int64().toBigInt();
                    break;
                case /* bytes hash */ 19:
                    message.hash = reader.bytes();
                    break;
                case /* string tape_path */ 33:
                    message.tapePath = reader.string();
                    break;
                case /* string target_path */ 34:
                    message.targetPath = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RestoreFile, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 file_id = 1; */
        if (message.fileId !== 0n)
            writer.tag(1, WireType.Varint).int64(message.fileId);
        /* int64 tape_id = 2; */
        if (message.tapeId !== 0n)
            writer.tag(2, WireType.Varint).int64(message.tapeId);
        /* int64 position_id = 3; */
        if (message.positionId !== 0n)
            writer.tag(3, WireType.Varint).int64(message.positionId);
        /* copy_status.CopyStatus status = 17; */
        if (message.status !== 0)
            writer.tag(17, WireType.Varint).int32(message.status);
        /* int64 size = 18; */
        if (message.size !== 0n)
            writer.tag(18, WireType.Varint).int64(message.size);
        /* bytes hash = 19; */
        if (message.hash.length)
            writer.tag(19, WireType.LengthDelimited).bytes(message.hash);
        /* string tape_path = 33; */
        if (message.tapePath !== "")
            writer.tag(33, WireType.LengthDelimited).string(message.tapePath);
        /* string target_path = 34; */
        if (message.targetPath !== "")
            writer.tag(34, WireType.LengthDelimited).string(message.targetPath);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message job_restore.RestoreFile
 */
export const RestoreFile = new RestoreFile$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RestoreTape$Type extends MessageType<RestoreTape> {
    constructor() {
        super("job_restore.RestoreTape", [
            { no: 1, name: "tape_id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "barcode", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 17, name: "status", kind: "enum", T: () => ["copy_status.CopyStatus", CopyStatus] },
            { no: 18, name: "files", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RestoreFile }
        ]);
    }
    create(value?: PartialMessage<RestoreTape>): RestoreTape {
        const message = { tapeId: 0n, barcode: "", status: 0, files: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RestoreTape>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RestoreTape): RestoreTape {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 tape_id */ 1:
                    message.tapeId = reader.int64().toBigInt();
                    break;
                case /* string barcode */ 2:
                    message.barcode = reader.string();
                    break;
                case /* copy_status.CopyStatus status */ 17:
                    message.status = reader.int32();
                    break;
                case /* repeated job_restore.RestoreFile files */ 18:
                    message.files.push(RestoreFile.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RestoreTape, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 tape_id = 1; */
        if (message.tapeId !== 0n)
            writer.tag(1, WireType.Varint).int64(message.tapeId);
        /* string barcode = 2; */
        if (message.barcode !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.barcode);
        /* copy_status.CopyStatus status = 17; */
        if (message.status !== 0)
            writer.tag(17, WireType.Varint).int32(message.status);
        /* repeated job_restore.RestoreFile files = 18; */
        for (let i = 0; i < message.files.length; i++)
            RestoreFile.internalBinaryWrite(message.files[i], writer.tag(18, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message job_restore.RestoreTape
 */
export const RestoreTape = new RestoreTape$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JobRestoreState$Type extends MessageType<JobRestoreState> {
    constructor() {
        super("job_restore.JobRestoreState", [
            { no: 1, name: "step", kind: "enum", T: () => ["job_restore.JobRestoreStep", JobRestoreStep] },
            { no: 2, name: "tapes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RestoreTape }
        ]);
    }
    create(value?: PartialMessage<JobRestoreState>): JobRestoreState {
        const message = { step: 0, tapes: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JobRestoreState>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JobRestoreState): JobRestoreState {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* job_restore.JobRestoreStep step */ 1:
                    message.step = reader.int32();
                    break;
                case /* repeated job_restore.RestoreTape tapes */ 2:
                    message.tapes.push(RestoreTape.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: JobRestoreState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* job_restore.JobRestoreStep step = 1; */
        if (message.step !== 0)
            writer.tag(1, WireType.Varint).int32(message.step);
        /* repeated job_restore.RestoreTape tapes = 2; */
        for (let i = 0; i < message.tapes.length; i++)
            RestoreTape.internalBinaryWrite(message.tapes[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message job_restore.JobRestoreState
 */
export const JobRestoreState = new JobRestoreState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JobRestoreDisplay$Type extends MessageType<JobRestoreDisplay> {
    constructor() {
        super("job_restore.JobRestoreDisplay", [
            { no: 1, name: "copied_bytes", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "copied_files", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "total_bytes", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "total_files", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "speed", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "start_time", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<JobRestoreDisplay>): JobRestoreDisplay {
        const message = { copiedBytes: 0n, copiedFiles: 0n, totalBytes: 0n, totalFiles: 0n, startTime: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JobRestoreDisplay>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JobRestoreDisplay): JobRestoreDisplay {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 copied_bytes */ 1:
                    message.copiedBytes = reader.int64().toBigInt();
                    break;
                case /* int64 copied_files */ 2:
                    message.copiedFiles = reader.int64().toBigInt();
                    break;
                case /* int64 total_bytes */ 3:
                    message.totalBytes = reader.int64().toBigInt();
                    break;
                case /* int64 total_files */ 4:
                    message.totalFiles = reader.int64().toBigInt();
                    break;
                case /* optional int64 speed */ 5:
                    message.speed = reader.int64().toBigInt();
                    break;
                case /* int64 start_time */ 6:
                    message.startTime = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: JobRestoreDisplay, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 copied_bytes = 1; */
        if (message.copiedBytes !== 0n)
            writer.tag(1, WireType.Varint).int64(message.copiedBytes);
        /* int64 copied_files = 2; */
        if (message.copiedFiles !== 0n)
            writer.tag(2, WireType.Varint).int64(message.copiedFiles);
        /* int64 total_bytes = 3; */
        if (message.totalBytes !== 0n)
            writer.tag(3, WireType.Varint).int64(message.totalBytes);
        /* int64 total_files = 4; */
        if (message.totalFiles !== 0n)
            writer.tag(4, WireType.Varint).int64(message.totalFiles);
        /* optional int64 speed = 5; */
        if (message.speed !== undefined)
            writer.tag(5, WireType.Varint).int64(message.speed);
        /* int64 start_time = 6; */
        if (message.startTime !== 0n)
            writer.tag(6, WireType.Varint).int64(message.startTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message job_restore.JobRestoreDisplay
 */
export const JobRestoreDisplay = new JobRestoreDisplay$Type();
