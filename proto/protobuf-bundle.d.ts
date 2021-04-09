import * as $protobuf from "protobufjs";
/** Namespace akkaserverless. */
export namespace akkaserverless {

    /** Properties of a FieldOptions. */
    interface IFieldOptions {

        /** FieldOptions entityKey */
        entityKey?: (boolean|null);
    }

    /** Represents a FieldOptions. */
    class FieldOptions implements IFieldOptions {

        /**
         * Constructs a new FieldOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IFieldOptions);

        /** FieldOptions entityKey. */
        public entityKey: boolean;

        /**
         * Creates a new FieldOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FieldOptions instance
         */
        public static create(properties?: akkaserverless.IFieldOptions): akkaserverless.FieldOptions;

        /**
         * Encodes the specified FieldOptions message. Does not implicitly {@link akkaserverless.FieldOptions.verify|verify} messages.
         * @param message FieldOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link akkaserverless.FieldOptions.verify|verify} messages.
         * @param message FieldOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FieldOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FieldOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.FieldOptions;

        /**
         * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FieldOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.FieldOptions;

        /**
         * Verifies a FieldOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FieldOptions
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.FieldOptions;

        /**
         * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
         * @param message FieldOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FieldOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileOptions. */
    interface IFileOptions {

        /** FileOptions eventSourcedEntity */
        eventSourcedEntity?: (akkaserverless.IEventSourcedEntity|null);
    }

    /** Represents a FileOptions. */
    class FileOptions implements IFileOptions {

        /**
         * Constructs a new FileOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IFileOptions);

        /** FileOptions eventSourcedEntity. */
        public eventSourcedEntity?: (akkaserverless.IEventSourcedEntity|null);

        /**
         * Creates a new FileOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileOptions instance
         */
        public static create(properties?: akkaserverless.IFileOptions): akkaserverless.FileOptions;

        /**
         * Encodes the specified FileOptions message. Does not implicitly {@link akkaserverless.FileOptions.verify|verify} messages.
         * @param message FileOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link akkaserverless.FileOptions.verify|verify} messages.
         * @param message FileOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.FileOptions;

        /**
         * Decodes a FileOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.FileOptions;

        /**
         * Verifies a FileOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileOptions
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.FileOptions;

        /**
         * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
         * @param message FileOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MethodOptions. */
    interface IMethodOptions {

        /** MethodOptions eventing */
        eventing?: (akkaserverless.IEventing|null);

        /** MethodOptions view */
        view?: (akkaserverless.IView|null);
    }

    /** Represents a MethodOptions. */
    class MethodOptions implements IMethodOptions {

        /**
         * Constructs a new MethodOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IMethodOptions);

        /** MethodOptions eventing. */
        public eventing?: (akkaserverless.IEventing|null);

        /** MethodOptions view. */
        public view?: (akkaserverless.IView|null);

        /**
         * Creates a new MethodOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MethodOptions instance
         */
        public static create(properties?: akkaserverless.IMethodOptions): akkaserverless.MethodOptions;

        /**
         * Encodes the specified MethodOptions message. Does not implicitly {@link akkaserverless.MethodOptions.verify|verify} messages.
         * @param message MethodOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link akkaserverless.MethodOptions.verify|verify} messages.
         * @param message MethodOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MethodOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MethodOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.MethodOptions;

        /**
         * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MethodOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.MethodOptions;

        /**
         * Verifies a MethodOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MethodOptions
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.MethodOptions;

        /**
         * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
         * @param message MethodOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MethodOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceOptions. */
    interface IServiceOptions {

        /** ServiceOptions entity */
        entity?: (akkaserverless.IEntityAssociation|null);
    }

    /** Represents a ServiceOptions. */
    class ServiceOptions implements IServiceOptions {

        /**
         * Constructs a new ServiceOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IServiceOptions);

        /** ServiceOptions entity. */
        public entity?: (akkaserverless.IEntityAssociation|null);

        /**
         * Creates a new ServiceOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceOptions instance
         */
        public static create(properties?: akkaserverless.IServiceOptions): akkaserverless.ServiceOptions;

        /**
         * Encodes the specified ServiceOptions message. Does not implicitly {@link akkaserverless.ServiceOptions.verify|verify} messages.
         * @param message ServiceOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link akkaserverless.ServiceOptions.verify|verify} messages.
         * @param message ServiceOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.ServiceOptions;

        /**
         * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.ServiceOptions;

        /**
         * Verifies a ServiceOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceOptions
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.ServiceOptions;

        /**
         * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
         * @param message ServiceOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EntityAssociation. */
    interface IEntityAssociation {

        /** EntityAssociation type */
        type?: (string|null);
    }

    /** Represents an EntityAssociation. */
    class EntityAssociation implements IEntityAssociation {

        /**
         * Constructs a new EntityAssociation.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IEntityAssociation);

        /** EntityAssociation type. */
        public type: string;

        /**
         * Creates a new EntityAssociation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityAssociation instance
         */
        public static create(properties?: akkaserverless.IEntityAssociation): akkaserverless.EntityAssociation;

        /**
         * Encodes the specified EntityAssociation message. Does not implicitly {@link akkaserverless.EntityAssociation.verify|verify} messages.
         * @param message EntityAssociation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IEntityAssociation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityAssociation message, length delimited. Does not implicitly {@link akkaserverless.EntityAssociation.verify|verify} messages.
         * @param message EntityAssociation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IEntityAssociation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityAssociation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityAssociation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.EntityAssociation;

        /**
         * Decodes an EntityAssociation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntityAssociation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.EntityAssociation;

        /**
         * Verifies an EntityAssociation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityAssociation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityAssociation
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.EntityAssociation;

        /**
         * Creates a plain object from an EntityAssociation message. Also converts values to other types if specified.
         * @param message EntityAssociation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.EntityAssociation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityAssociation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateDescriptor. */
    interface IStateDescriptor {

        /** StateDescriptor type */
        type?: (string|null);
    }

    /** Represents a StateDescriptor. */
    class StateDescriptor implements IStateDescriptor {

        /**
         * Constructs a new StateDescriptor.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IStateDescriptor);

        /** StateDescriptor type. */
        public type: string;

        /**
         * Creates a new StateDescriptor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateDescriptor instance
         */
        public static create(properties?: akkaserverless.IStateDescriptor): akkaserverless.StateDescriptor;

        /**
         * Encodes the specified StateDescriptor message. Does not implicitly {@link akkaserverless.StateDescriptor.verify|verify} messages.
         * @param message StateDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IStateDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateDescriptor message, length delimited. Does not implicitly {@link akkaserverless.StateDescriptor.verify|verify} messages.
         * @param message StateDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IStateDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateDescriptor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.StateDescriptor;

        /**
         * Decodes a StateDescriptor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.StateDescriptor;

        /**
         * Verifies a StateDescriptor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateDescriptor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateDescriptor
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.StateDescriptor;

        /**
         * Creates a plain object from a StateDescriptor message. Also converts values to other types if specified.
         * @param message StateDescriptor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.StateDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateDescriptor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventDescriptor. */
    interface IEventDescriptor {

        /** EventDescriptor type */
        type?: (string|null);
    }

    /** Represents an EventDescriptor. */
    class EventDescriptor implements IEventDescriptor {

        /**
         * Constructs a new EventDescriptor.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IEventDescriptor);

        /** EventDescriptor type. */
        public type: string;

        /**
         * Creates a new EventDescriptor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventDescriptor instance
         */
        public static create(properties?: akkaserverless.IEventDescriptor): akkaserverless.EventDescriptor;

        /**
         * Encodes the specified EventDescriptor message. Does not implicitly {@link akkaserverless.EventDescriptor.verify|verify} messages.
         * @param message EventDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IEventDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventDescriptor message, length delimited. Does not implicitly {@link akkaserverless.EventDescriptor.verify|verify} messages.
         * @param message EventDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IEventDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventDescriptor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.EventDescriptor;

        /**
         * Decodes an EventDescriptor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.EventDescriptor;

        /**
         * Verifies an EventDescriptor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventDescriptor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventDescriptor
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.EventDescriptor;

        /**
         * Creates a plain object from an EventDescriptor message. Also converts values to other types if specified.
         * @param message EventDescriptor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.EventDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventDescriptor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventSourcedEntity. */
    interface IEventSourcedEntity {

        /** EventSourcedEntity name */
        name?: (string|null);

        /** EventSourcedEntity entityType */
        entityType?: (string|null);

        /** EventSourcedEntity state */
        state?: (akkaserverless.IStateDescriptor|null);

        /** EventSourcedEntity event */
        event?: (akkaserverless.IEventDescriptor[]|null);
    }

    /** Represents an EventSourcedEntity. */
    class EventSourcedEntity implements IEventSourcedEntity {

        /**
         * Constructs a new EventSourcedEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IEventSourcedEntity);

        /** EventSourcedEntity name. */
        public name: string;

        /** EventSourcedEntity entityType. */
        public entityType: string;

        /** EventSourcedEntity state. */
        public state?: (akkaserverless.IStateDescriptor|null);

        /** EventSourcedEntity event. */
        public event: akkaserverless.IEventDescriptor[];

        /**
         * Creates a new EventSourcedEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventSourcedEntity instance
         */
        public static create(properties?: akkaserverless.IEventSourcedEntity): akkaserverless.EventSourcedEntity;

        /**
         * Encodes the specified EventSourcedEntity message. Does not implicitly {@link akkaserverless.EventSourcedEntity.verify|verify} messages.
         * @param message EventSourcedEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IEventSourcedEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventSourcedEntity message, length delimited. Does not implicitly {@link akkaserverless.EventSourcedEntity.verify|verify} messages.
         * @param message EventSourcedEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IEventSourcedEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventSourcedEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventSourcedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.EventSourcedEntity;

        /**
         * Decodes an EventSourcedEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventSourcedEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.EventSourcedEntity;

        /**
         * Verifies an EventSourcedEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventSourcedEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventSourcedEntity
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.EventSourcedEntity;

        /**
         * Creates a plain object from an EventSourcedEntity message. Also converts values to other types if specified.
         * @param message EventSourcedEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.EventSourcedEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventSourcedEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Eventing. */
    interface IEventing {

        /** Eventing in */
        "in"?: (akkaserverless.IEventSource|null);

        /** Eventing out */
        out?: (akkaserverless.IEventDestination|null);
    }

    /** Represents an Eventing. */
    class Eventing implements IEventing {

        /**
         * Constructs a new Eventing.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IEventing);

        /** Eventing in. */
        public in?: (akkaserverless.IEventSource|null);

        /** Eventing out. */
        public out?: (akkaserverless.IEventDestination|null);

        /**
         * Creates a new Eventing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Eventing instance
         */
        public static create(properties?: akkaserverless.IEventing): akkaserverless.Eventing;

        /**
         * Encodes the specified Eventing message. Does not implicitly {@link akkaserverless.Eventing.verify|verify} messages.
         * @param message Eventing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IEventing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Eventing message, length delimited. Does not implicitly {@link akkaserverless.Eventing.verify|verify} messages.
         * @param message Eventing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IEventing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Eventing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Eventing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.Eventing;

        /**
         * Decodes an Eventing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Eventing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.Eventing;

        /**
         * Verifies an Eventing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Eventing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Eventing
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.Eventing;

        /**
         * Creates a plain object from an Eventing message. Also converts values to other types if specified.
         * @param message Eventing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.Eventing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Eventing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventSource. */
    interface IEventSource {

        /** EventSource consumerGroup */
        consumerGroup?: (string|null);

        /** EventSource topic */
        topic?: (string|null);

        /** EventSource eventLog */
        eventLog?: (string|null);

        /** EventSource valueChanges */
        valueChanges?: (string|null);
    }

    /** Represents an EventSource. */
    class EventSource implements IEventSource {

        /**
         * Constructs a new EventSource.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IEventSource);

        /** EventSource consumerGroup. */
        public consumerGroup: string;

        /** EventSource topic. */
        public topic: string;

        /** EventSource eventLog. */
        public eventLog: string;

        /** EventSource valueChanges. */
        public valueChanges: string;

        /** EventSource source. */
        public source?: ("topic"|"eventLog"|"valueChanges");

        /**
         * Creates a new EventSource instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventSource instance
         */
        public static create(properties?: akkaserverless.IEventSource): akkaserverless.EventSource;

        /**
         * Encodes the specified EventSource message. Does not implicitly {@link akkaserverless.EventSource.verify|verify} messages.
         * @param message EventSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IEventSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventSource message, length delimited. Does not implicitly {@link akkaserverless.EventSource.verify|verify} messages.
         * @param message EventSource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IEventSource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventSource message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.EventSource;

        /**
         * Decodes an EventSource message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventSource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.EventSource;

        /**
         * Verifies an EventSource message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventSource message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventSource
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.EventSource;

        /**
         * Creates a plain object from an EventSource message. Also converts values to other types if specified.
         * @param message EventSource
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.EventSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventSource to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventDestination. */
    interface IEventDestination {

        /** EventDestination topic */
        topic?: (string|null);
    }

    /** Represents an EventDestination. */
    class EventDestination implements IEventDestination {

        /**
         * Constructs a new EventDestination.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IEventDestination);

        /** EventDestination topic. */
        public topic: string;

        /** EventDestination destination. */
        public destination?: "topic";

        /**
         * Creates a new EventDestination instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventDestination instance
         */
        public static create(properties?: akkaserverless.IEventDestination): akkaserverless.EventDestination;

        /**
         * Encodes the specified EventDestination message. Does not implicitly {@link akkaserverless.EventDestination.verify|verify} messages.
         * @param message EventDestination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IEventDestination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventDestination message, length delimited. Does not implicitly {@link akkaserverless.EventDestination.verify|verify} messages.
         * @param message EventDestination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IEventDestination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventDestination message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventDestination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.EventDestination;

        /**
         * Decodes an EventDestination message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventDestination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.EventDestination;

        /**
         * Verifies an EventDestination message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventDestination message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventDestination
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.EventDestination;

        /**
         * Creates a plain object from an EventDestination message. Also converts values to other types if specified.
         * @param message EventDestination
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.EventDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventDestination to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a View. */
    interface IView {

        /** View update */
        update?: (akkaserverless.View.IUpdate|null);

        /** View query */
        query?: (akkaserverless.View.IQuery|null);
    }

    /** Represents a View. */
    class View implements IView {

        /**
         * Constructs a new View.
         * @param [properties] Properties to set
         */
        constructor(properties?: akkaserverless.IView);

        /** View update. */
        public update?: (akkaserverless.View.IUpdate|null);

        /** View query. */
        public query?: (akkaserverless.View.IQuery|null);

        /**
         * Creates a new View instance using the specified properties.
         * @param [properties] Properties to set
         * @returns View instance
         */
        public static create(properties?: akkaserverless.IView): akkaserverless.View;

        /**
         * Encodes the specified View message. Does not implicitly {@link akkaserverless.View.verify|verify} messages.
         * @param message View message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: akkaserverless.IView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified View message, length delimited. Does not implicitly {@link akkaserverless.View.verify|verify} messages.
         * @param message View message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: akkaserverless.IView, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a View message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns View
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.View;

        /**
         * Decodes a View message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns View
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.View;

        /**
         * Verifies a View message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a View message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns View
         */
        public static fromObject(object: { [k: string]: any }): akkaserverless.View;

        /**
         * Creates a plain object from a View message. Also converts values to other types if specified.
         * @param message View
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: akkaserverless.View, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this View to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace View {

        /** Properties of an Update. */
        interface IUpdate {

            /** Update table */
            table?: (string|null);

            /** Update transformUpdates */
            transformUpdates?: (boolean|null);
        }

        /** Represents an Update. */
        class Update implements IUpdate {

            /**
             * Constructs a new Update.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.View.IUpdate);

            /** Update table. */
            public table: string;

            /** Update transformUpdates. */
            public transformUpdates: boolean;

            /**
             * Creates a new Update instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Update instance
             */
            public static create(properties?: akkaserverless.View.IUpdate): akkaserverless.View.Update;

            /**
             * Encodes the specified Update message. Does not implicitly {@link akkaserverless.View.Update.verify|verify} messages.
             * @param message Update message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.View.IUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Update message, length delimited. Does not implicitly {@link akkaserverless.View.Update.verify|verify} messages.
             * @param message Update message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.View.IUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Update message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Update
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.View.Update;

            /**
             * Decodes an Update message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Update
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.View.Update;

            /**
             * Verifies an Update message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Update message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Update
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.View.Update;

            /**
             * Creates a plain object from an Update message. Also converts values to other types if specified.
             * @param message Update
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.View.Update, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Update to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Query. */
        interface IQuery {

            /** Query query */
            query?: (string|null);

            /** Query transformResults */
            transformResults?: (boolean|null);
        }

        /** Represents a Query. */
        class Query implements IQuery {

            /**
             * Constructs a new Query.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.View.IQuery);

            /** Query query. */
            public query: string;

            /** Query transformResults. */
            public transformResults: boolean;

            /**
             * Creates a new Query instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Query instance
             */
            public static create(properties?: akkaserverless.View.IQuery): akkaserverless.View.Query;

            /**
             * Encodes the specified Query message. Does not implicitly {@link akkaserverless.View.Query.verify|verify} messages.
             * @param message Query message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.View.IQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Query message, length delimited. Does not implicitly {@link akkaserverless.View.Query.verify|verify} messages.
             * @param message Query message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.View.IQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Query message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Query
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.View.Query;

            /**
             * Decodes a Query message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Query
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.View.Query;

            /**
             * Verifies a Query message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Query message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Query
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.View.Query;

            /**
             * Creates a plain object from a Query message. Also converts values to other types if specified.
             * @param message Query
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.View.Query, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Query to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protocol. */
    namespace protocol {

        /** Properties of a Spec. */
        interface ISpec {

            /** Spec proto */
            proto?: (Uint8Array|null);

            /** Spec components */
            components?: (akkaserverless.protocol.IComponent[]|null);

            /** Spec serviceInfo */
            serviceInfo?: (akkaserverless.protocol.IServiceInfo|null);
        }

        /** Represents a Spec. */
        class Spec implements ISpec {

            /**
             * Constructs a new Spec.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.protocol.ISpec);

            /** Spec proto. */
            public proto: Uint8Array;

            /** Spec components. */
            public components: akkaserverless.protocol.IComponent[];

            /** Spec serviceInfo. */
            public serviceInfo?: (akkaserverless.protocol.IServiceInfo|null);

            /**
             * Creates a new Spec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Spec instance
             */
            public static create(properties?: akkaserverless.protocol.ISpec): akkaserverless.protocol.Spec;

            /**
             * Encodes the specified Spec message. Does not implicitly {@link akkaserverless.protocol.Spec.verify|verify} messages.
             * @param message Spec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.protocol.ISpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Spec message, length delimited. Does not implicitly {@link akkaserverless.protocol.Spec.verify|verify} messages.
             * @param message Spec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.protocol.ISpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Spec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Spec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.protocol.Spec;

            /**
             * Decodes a Spec message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Spec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.protocol.Spec;

            /**
             * Verifies a Spec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Spec message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Spec
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.protocol.Spec;

            /**
             * Creates a plain object from a Spec message. Also converts values to other types if specified.
             * @param message Spec
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.protocol.Spec, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Spec to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceInfo. */
        interface IServiceInfo {

            /** ServiceInfo serviceName */
            serviceName?: (string|null);

            /** ServiceInfo serviceVersion */
            serviceVersion?: (string|null);

            /** ServiceInfo serviceRuntime */
            serviceRuntime?: (string|null);

            /** ServiceInfo supportLibraryName */
            supportLibraryName?: (string|null);

            /** ServiceInfo supportLibraryVersion */
            supportLibraryVersion?: (string|null);

            /** ServiceInfo protocolMajorVersion */
            protocolMajorVersion?: (number|null);

            /** ServiceInfo protocolMinorVersion */
            protocolMinorVersion?: (number|null);
        }

        /** Represents a ServiceInfo. */
        class ServiceInfo implements IServiceInfo {

            /**
             * Constructs a new ServiceInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.protocol.IServiceInfo);

            /** ServiceInfo serviceName. */
            public serviceName: string;

            /** ServiceInfo serviceVersion. */
            public serviceVersion: string;

            /** ServiceInfo serviceRuntime. */
            public serviceRuntime: string;

            /** ServiceInfo supportLibraryName. */
            public supportLibraryName: string;

            /** ServiceInfo supportLibraryVersion. */
            public supportLibraryVersion: string;

            /** ServiceInfo protocolMajorVersion. */
            public protocolMajorVersion: number;

            /** ServiceInfo protocolMinorVersion. */
            public protocolMinorVersion: number;

            /**
             * Creates a new ServiceInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceInfo instance
             */
            public static create(properties?: akkaserverless.protocol.IServiceInfo): akkaserverless.protocol.ServiceInfo;

            /**
             * Encodes the specified ServiceInfo message. Does not implicitly {@link akkaserverless.protocol.ServiceInfo.verify|verify} messages.
             * @param message ServiceInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.protocol.IServiceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceInfo message, length delimited. Does not implicitly {@link akkaserverless.protocol.ServiceInfo.verify|verify} messages.
             * @param message ServiceInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.protocol.IServiceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.protocol.ServiceInfo;

            /**
             * Decodes a ServiceInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.protocol.ServiceInfo;

            /**
             * Verifies a ServiceInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceInfo
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.protocol.ServiceInfo;

            /**
             * Creates a plain object from a ServiceInfo message. Also converts values to other types if specified.
             * @param message ServiceInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.protocol.ServiceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Component. */
        interface IComponent {

            /** Component componentType */
            componentType?: (string|null);

            /** Component serviceName */
            serviceName?: (string|null);

            /** Component entity */
            entity?: (akkaserverless.protocol.IEntitySettings|null);
        }

        /** Represents a Component. */
        class Component implements IComponent {

            /**
             * Constructs a new Component.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.protocol.IComponent);

            /** Component componentType. */
            public componentType: string;

            /** Component serviceName. */
            public serviceName: string;

            /** Component entity. */
            public entity?: (akkaserverless.protocol.IEntitySettings|null);

            /** Component componentSettings. */
            public componentSettings?: "entity";

            /**
             * Creates a new Component instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Component instance
             */
            public static create(properties?: akkaserverless.protocol.IComponent): akkaserverless.protocol.Component;

            /**
             * Encodes the specified Component message. Does not implicitly {@link akkaserverless.protocol.Component.verify|verify} messages.
             * @param message Component message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.protocol.IComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Component message, length delimited. Does not implicitly {@link akkaserverless.protocol.Component.verify|verify} messages.
             * @param message Component message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.protocol.IComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Component message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Component
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.protocol.Component;

            /**
             * Decodes a Component message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Component
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.protocol.Component;

            /**
             * Verifies a Component message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Component message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Component
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.protocol.Component;

            /**
             * Creates a plain object from a Component message. Also converts values to other types if specified.
             * @param message Component
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.protocol.Component, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Component to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EntitySettings. */
        interface IEntitySettings {

            /** EntitySettings entityType */
            entityType?: (string|null);

            /** EntitySettings passivationStrategy */
            passivationStrategy?: (akkaserverless.protocol.IPassivationStrategy|null);
        }

        /** Represents an EntitySettings. */
        class EntitySettings implements IEntitySettings {

            /**
             * Constructs a new EntitySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.protocol.IEntitySettings);

            /** EntitySettings entityType. */
            public entityType: string;

            /** EntitySettings passivationStrategy. */
            public passivationStrategy?: (akkaserverless.protocol.IPassivationStrategy|null);

            /**
             * Creates a new EntitySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntitySettings instance
             */
            public static create(properties?: akkaserverless.protocol.IEntitySettings): akkaserverless.protocol.EntitySettings;

            /**
             * Encodes the specified EntitySettings message. Does not implicitly {@link akkaserverless.protocol.EntitySettings.verify|verify} messages.
             * @param message EntitySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.protocol.IEntitySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntitySettings message, length delimited. Does not implicitly {@link akkaserverless.protocol.EntitySettings.verify|verify} messages.
             * @param message EntitySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.protocol.IEntitySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntitySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EntitySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.protocol.EntitySettings;

            /**
             * Decodes an EntitySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EntitySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.protocol.EntitySettings;

            /**
             * Verifies an EntitySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntitySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntitySettings
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.protocol.EntitySettings;

            /**
             * Creates a plain object from an EntitySettings message. Also converts values to other types if specified.
             * @param message EntitySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.protocol.EntitySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntitySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PassivationStrategy. */
        interface IPassivationStrategy {

            /** PassivationStrategy timeout */
            timeout?: (akkaserverless.protocol.ITimeoutPassivationStrategy|null);
        }

        /** Represents a PassivationStrategy. */
        class PassivationStrategy implements IPassivationStrategy {

            /**
             * Constructs a new PassivationStrategy.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.protocol.IPassivationStrategy);

            /** PassivationStrategy timeout. */
            public timeout?: (akkaserverless.protocol.ITimeoutPassivationStrategy|null);

            /** PassivationStrategy strategy. */
            public strategy?: "timeout";

            /**
             * Creates a new PassivationStrategy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PassivationStrategy instance
             */
            public static create(properties?: akkaserverless.protocol.IPassivationStrategy): akkaserverless.protocol.PassivationStrategy;

            /**
             * Encodes the specified PassivationStrategy message. Does not implicitly {@link akkaserverless.protocol.PassivationStrategy.verify|verify} messages.
             * @param message PassivationStrategy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.protocol.IPassivationStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PassivationStrategy message, length delimited. Does not implicitly {@link akkaserverless.protocol.PassivationStrategy.verify|verify} messages.
             * @param message PassivationStrategy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.protocol.IPassivationStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PassivationStrategy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PassivationStrategy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.protocol.PassivationStrategy;

            /**
             * Decodes a PassivationStrategy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PassivationStrategy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.protocol.PassivationStrategy;

            /**
             * Verifies a PassivationStrategy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PassivationStrategy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PassivationStrategy
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.protocol.PassivationStrategy;

            /**
             * Creates a plain object from a PassivationStrategy message. Also converts values to other types if specified.
             * @param message PassivationStrategy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.protocol.PassivationStrategy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PassivationStrategy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TimeoutPassivationStrategy. */
        interface ITimeoutPassivationStrategy {

            /** TimeoutPassivationStrategy timeout */
            timeout?: (number|Long|null);
        }

        /** Represents a TimeoutPassivationStrategy. */
        class TimeoutPassivationStrategy implements ITimeoutPassivationStrategy {

            /**
             * Constructs a new TimeoutPassivationStrategy.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.protocol.ITimeoutPassivationStrategy);

            /** TimeoutPassivationStrategy timeout. */
            public timeout: (number|Long);

            /**
             * Creates a new TimeoutPassivationStrategy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeoutPassivationStrategy instance
             */
            public static create(properties?: akkaserverless.protocol.ITimeoutPassivationStrategy): akkaserverless.protocol.TimeoutPassivationStrategy;

            /**
             * Encodes the specified TimeoutPassivationStrategy message. Does not implicitly {@link akkaserverless.protocol.TimeoutPassivationStrategy.verify|verify} messages.
             * @param message TimeoutPassivationStrategy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.protocol.ITimeoutPassivationStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeoutPassivationStrategy message, length delimited. Does not implicitly {@link akkaserverless.protocol.TimeoutPassivationStrategy.verify|verify} messages.
             * @param message TimeoutPassivationStrategy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.protocol.ITimeoutPassivationStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeoutPassivationStrategy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeoutPassivationStrategy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.protocol.TimeoutPassivationStrategy;

            /**
             * Decodes a TimeoutPassivationStrategy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeoutPassivationStrategy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.protocol.TimeoutPassivationStrategy;

            /**
             * Verifies a TimeoutPassivationStrategy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeoutPassivationStrategy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeoutPassivationStrategy
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.protocol.TimeoutPassivationStrategy;

            /**
             * Creates a plain object from a TimeoutPassivationStrategy message. Also converts values to other types if specified.
             * @param message TimeoutPassivationStrategy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.protocol.TimeoutPassivationStrategy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeoutPassivationStrategy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserFunctionError. */
        interface IUserFunctionError {

            /** UserFunctionError message */
            message?: (string|null);

            /** UserFunctionError code */
            code?: (string|null);

            /** UserFunctionError detail */
            detail?: (string|null);

            /** UserFunctionError sourceLocations */
            sourceLocations?: (akkaserverless.protocol.UserFunctionError.ISourceLocation[]|null);
        }

        /** Represents a UserFunctionError. */
        class UserFunctionError implements IUserFunctionError {

            /**
             * Constructs a new UserFunctionError.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.protocol.IUserFunctionError);

            /** UserFunctionError message. */
            public message: string;

            /** UserFunctionError code. */
            public code: string;

            /** UserFunctionError detail. */
            public detail: string;

            /** UserFunctionError sourceLocations. */
            public sourceLocations: akkaserverless.protocol.UserFunctionError.ISourceLocation[];

            /**
             * Creates a new UserFunctionError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserFunctionError instance
             */
            public static create(properties?: akkaserverless.protocol.IUserFunctionError): akkaserverless.protocol.UserFunctionError;

            /**
             * Encodes the specified UserFunctionError message. Does not implicitly {@link akkaserverless.protocol.UserFunctionError.verify|verify} messages.
             * @param message UserFunctionError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.protocol.IUserFunctionError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserFunctionError message, length delimited. Does not implicitly {@link akkaserverless.protocol.UserFunctionError.verify|verify} messages.
             * @param message UserFunctionError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.protocol.IUserFunctionError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserFunctionError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserFunctionError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.protocol.UserFunctionError;

            /**
             * Decodes a UserFunctionError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserFunctionError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.protocol.UserFunctionError;

            /**
             * Verifies a UserFunctionError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserFunctionError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserFunctionError
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.protocol.UserFunctionError;

            /**
             * Creates a plain object from a UserFunctionError message. Also converts values to other types if specified.
             * @param message UserFunctionError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.protocol.UserFunctionError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserFunctionError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UserFunctionError {

            /** Properties of a SourceLocation. */
            interface ISourceLocation {

                /** SourceLocation fileName */
                fileName?: (string|null);

                /** SourceLocation startLine */
                startLine?: (number|null);

                /** SourceLocation startCol */
                startCol?: (number|null);

                /** SourceLocation endLine */
                endLine?: (number|null);

                /** SourceLocation endCol */
                endCol?: (number|null);

                /** SourceLocation protoPath */
                protoPath?: (number[]|null);
            }

            /** Represents a SourceLocation. */
            class SourceLocation implements ISourceLocation {

                /**
                 * Constructs a new SourceLocation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.protocol.UserFunctionError.ISourceLocation);

                /** SourceLocation fileName. */
                public fileName: string;

                /** SourceLocation startLine. */
                public startLine: number;

                /** SourceLocation startCol. */
                public startCol: number;

                /** SourceLocation endLine. */
                public endLine: number;

                /** SourceLocation endCol. */
                public endCol: number;

                /** SourceLocation protoPath. */
                public protoPath: number[];

                /**
                 * Creates a new SourceLocation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SourceLocation instance
                 */
                public static create(properties?: akkaserverless.protocol.UserFunctionError.ISourceLocation): akkaserverless.protocol.UserFunctionError.SourceLocation;

                /**
                 * Encodes the specified SourceLocation message. Does not implicitly {@link akkaserverless.protocol.UserFunctionError.SourceLocation.verify|verify} messages.
                 * @param message SourceLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.protocol.UserFunctionError.ISourceLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SourceLocation message, length delimited. Does not implicitly {@link akkaserverless.protocol.UserFunctionError.SourceLocation.verify|verify} messages.
                 * @param message SourceLocation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.protocol.UserFunctionError.ISourceLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SourceLocation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SourceLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.protocol.UserFunctionError.SourceLocation;

                /**
                 * Decodes a SourceLocation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SourceLocation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.protocol.UserFunctionError.SourceLocation;

                /**
                 * Verifies a SourceLocation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SourceLocation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SourceLocation
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.protocol.UserFunctionError.SourceLocation;

                /**
                 * Creates a plain object from a SourceLocation message. Also converts values to other types if specified.
                 * @param message SourceLocation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.protocol.UserFunctionError.SourceLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SourceLocation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ProxyInfo. */
        interface IProxyInfo {

            /** ProxyInfo protocolMajorVersion */
            protocolMajorVersion?: (number|null);

            /** ProxyInfo protocolMinorVersion */
            protocolMinorVersion?: (number|null);

            /** ProxyInfo proxyName */
            proxyName?: (string|null);

            /** ProxyInfo proxyVersion */
            proxyVersion?: (string|null);

            /** ProxyInfo supportedEntityTypes */
            supportedEntityTypes?: (string[]|null);
        }

        /** Represents a ProxyInfo. */
        class ProxyInfo implements IProxyInfo {

            /**
             * Constructs a new ProxyInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.protocol.IProxyInfo);

            /** ProxyInfo protocolMajorVersion. */
            public protocolMajorVersion: number;

            /** ProxyInfo protocolMinorVersion. */
            public protocolMinorVersion: number;

            /** ProxyInfo proxyName. */
            public proxyName: string;

            /** ProxyInfo proxyVersion. */
            public proxyVersion: string;

            /** ProxyInfo supportedEntityTypes. */
            public supportedEntityTypes: string[];

            /**
             * Creates a new ProxyInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProxyInfo instance
             */
            public static create(properties?: akkaserverless.protocol.IProxyInfo): akkaserverless.protocol.ProxyInfo;

            /**
             * Encodes the specified ProxyInfo message. Does not implicitly {@link akkaserverless.protocol.ProxyInfo.verify|verify} messages.
             * @param message ProxyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.protocol.IProxyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProxyInfo message, length delimited. Does not implicitly {@link akkaserverless.protocol.ProxyInfo.verify|verify} messages.
             * @param message ProxyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.protocol.IProxyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProxyInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProxyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.protocol.ProxyInfo;

            /**
             * Decodes a ProxyInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProxyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.protocol.ProxyInfo;

            /**
             * Verifies a ProxyInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProxyInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProxyInfo
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.protocol.ProxyInfo;

            /**
             * Creates a plain object from a ProxyInfo message. Also converts values to other types if specified.
             * @param message ProxyInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.protocol.ProxyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProxyInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a Discovery */
        class Discovery extends $protobuf.rpc.Service {

            /**
             * Constructs a new Discovery service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Discovery service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Discovery;

            /**
             * Calls Discover.
             * @param request ProxyInfo message or plain object
             * @param callback Node-style callback called with the error, if any, and Spec
             */
            public discover(request: akkaserverless.protocol.IProxyInfo, callback: akkaserverless.protocol.Discovery.DiscoverCallback): void;

            /**
             * Calls Discover.
             * @param request ProxyInfo message or plain object
             * @returns Promise
             */
            public discover(request: akkaserverless.protocol.IProxyInfo): Promise<akkaserverless.protocol.Spec>;

            /**
             * Calls ReportError.
             * @param request UserFunctionError message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public reportError(request: akkaserverless.protocol.IUserFunctionError, callback: akkaserverless.protocol.Discovery.ReportErrorCallback): void;

            /**
             * Calls ReportError.
             * @param request UserFunctionError message or plain object
             * @returns Promise
             */
            public reportError(request: akkaserverless.protocol.IUserFunctionError): Promise<google.protobuf.Empty>;
        }

        namespace Discovery {

            /**
             * Callback as used by {@link akkaserverless.protocol.Discovery#discover}.
             * @param error Error, if any
             * @param [response] Spec
             */
            type DiscoverCallback = (error: (Error|null), response?: akkaserverless.protocol.Spec) => void;

            /**
             * Callback as used by {@link akkaserverless.protocol.Discovery#reportError}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type ReportErrorCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
        }
    }

    /** Namespace component. */
    namespace component {

        /** Properties of a Metadata. */
        interface IMetadata {

            /** Metadata entries */
            entries?: (akkaserverless.component.IMetadataEntry[]|null);
        }

        /** Represents a Metadata. */
        class Metadata implements IMetadata {

            /**
             * Constructs a new Metadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.component.IMetadata);

            /** Metadata entries. */
            public entries: akkaserverless.component.IMetadataEntry[];

            /**
             * Creates a new Metadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Metadata instance
             */
            public static create(properties?: akkaserverless.component.IMetadata): akkaserverless.component.Metadata;

            /**
             * Encodes the specified Metadata message. Does not implicitly {@link akkaserverless.component.Metadata.verify|verify} messages.
             * @param message Metadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.component.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Metadata message, length delimited. Does not implicitly {@link akkaserverless.component.Metadata.verify|verify} messages.
             * @param message Metadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.component.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Metadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.Metadata;

            /**
             * Decodes a Metadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.Metadata;

            /**
             * Verifies a Metadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Metadata
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.component.Metadata;

            /**
             * Creates a plain object from a Metadata message. Also converts values to other types if specified.
             * @param message Metadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.component.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Metadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MetadataEntry. */
        interface IMetadataEntry {

            /** MetadataEntry key */
            key?: (string|null);

            /** MetadataEntry stringValue */
            stringValue?: (string|null);

            /** MetadataEntry bytesValue */
            bytesValue?: (Uint8Array|null);
        }

        /** Represents a MetadataEntry. */
        class MetadataEntry implements IMetadataEntry {

            /**
             * Constructs a new MetadataEntry.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.component.IMetadataEntry);

            /** MetadataEntry key. */
            public key: string;

            /** MetadataEntry stringValue. */
            public stringValue: string;

            /** MetadataEntry bytesValue. */
            public bytesValue: Uint8Array;

            /** MetadataEntry value. */
            public value?: ("stringValue"|"bytesValue");

            /**
             * Creates a new MetadataEntry instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MetadataEntry instance
             */
            public static create(properties?: akkaserverless.component.IMetadataEntry): akkaserverless.component.MetadataEntry;

            /**
             * Encodes the specified MetadataEntry message. Does not implicitly {@link akkaserverless.component.MetadataEntry.verify|verify} messages.
             * @param message MetadataEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.component.IMetadataEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MetadataEntry message, length delimited. Does not implicitly {@link akkaserverless.component.MetadataEntry.verify|verify} messages.
             * @param message MetadataEntry message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.component.IMetadataEntry, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MetadataEntry message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MetadataEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.MetadataEntry;

            /**
             * Decodes a MetadataEntry message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MetadataEntry
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.MetadataEntry;

            /**
             * Verifies a MetadataEntry message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MetadataEntry message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MetadataEntry
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.component.MetadataEntry;

            /**
             * Creates a plain object from a MetadataEntry message. Also converts values to other types if specified.
             * @param message MetadataEntry
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.component.MetadataEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MetadataEntry to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Reply. */
        interface IReply {

            /** Reply payload */
            payload?: (google.protobuf.IAny|null);

            /** Reply metadata */
            metadata?: (akkaserverless.component.IMetadata|null);
        }

        /** Represents a Reply. */
        class Reply implements IReply {

            /**
             * Constructs a new Reply.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.component.IReply);

            /** Reply payload. */
            public payload?: (google.protobuf.IAny|null);

            /** Reply metadata. */
            public metadata?: (akkaserverless.component.IMetadata|null);

            /**
             * Creates a new Reply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reply instance
             */
            public static create(properties?: akkaserverless.component.IReply): akkaserverless.component.Reply;

            /**
             * Encodes the specified Reply message. Does not implicitly {@link akkaserverless.component.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.component.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link akkaserverless.component.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.component.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.Reply;

            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.Reply;

            /**
             * Verifies a Reply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reply
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.component.Reply;

            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @param message Reply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.component.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Forward. */
        interface IForward {

            /** Forward serviceName */
            serviceName?: (string|null);

            /** Forward commandName */
            commandName?: (string|null);

            /** Forward payload */
            payload?: (google.protobuf.IAny|null);

            /** Forward metadata */
            metadata?: (akkaserverless.component.IMetadata|null);
        }

        /** Represents a Forward. */
        class Forward implements IForward {

            /**
             * Constructs a new Forward.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.component.IForward);

            /** Forward serviceName. */
            public serviceName: string;

            /** Forward commandName. */
            public commandName: string;

            /** Forward payload. */
            public payload?: (google.protobuf.IAny|null);

            /** Forward metadata. */
            public metadata?: (akkaserverless.component.IMetadata|null);

            /**
             * Creates a new Forward instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Forward instance
             */
            public static create(properties?: akkaserverless.component.IForward): akkaserverless.component.Forward;

            /**
             * Encodes the specified Forward message. Does not implicitly {@link akkaserverless.component.Forward.verify|verify} messages.
             * @param message Forward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.component.IForward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Forward message, length delimited. Does not implicitly {@link akkaserverless.component.Forward.verify|verify} messages.
             * @param message Forward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.component.IForward, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Forward message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Forward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.Forward;

            /**
             * Decodes a Forward message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Forward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.Forward;

            /**
             * Verifies a Forward message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Forward message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Forward
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.component.Forward;

            /**
             * Creates a plain object from a Forward message. Also converts values to other types if specified.
             * @param message Forward
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.component.Forward, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Forward to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ClientAction. */
        interface IClientAction {

            /** ClientAction reply */
            reply?: (akkaserverless.component.IReply|null);

            /** ClientAction forward */
            forward?: (akkaserverless.component.IForward|null);

            /** ClientAction failure */
            failure?: (akkaserverless.component.IFailure|null);
        }

        /** Represents a ClientAction. */
        class ClientAction implements IClientAction {

            /**
             * Constructs a new ClientAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.component.IClientAction);

            /** ClientAction reply. */
            public reply?: (akkaserverless.component.IReply|null);

            /** ClientAction forward. */
            public forward?: (akkaserverless.component.IForward|null);

            /** ClientAction failure. */
            public failure?: (akkaserverless.component.IFailure|null);

            /** ClientAction action. */
            public action?: ("reply"|"forward"|"failure");

            /**
             * Creates a new ClientAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientAction instance
             */
            public static create(properties?: akkaserverless.component.IClientAction): akkaserverless.component.ClientAction;

            /**
             * Encodes the specified ClientAction message. Does not implicitly {@link akkaserverless.component.ClientAction.verify|verify} messages.
             * @param message ClientAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.component.IClientAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientAction message, length delimited. Does not implicitly {@link akkaserverless.component.ClientAction.verify|verify} messages.
             * @param message ClientAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.component.IClientAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.ClientAction;

            /**
             * Decodes a ClientAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.ClientAction;

            /**
             * Verifies a ClientAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientAction
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.component.ClientAction;

            /**
             * Creates a plain object from a ClientAction message. Also converts values to other types if specified.
             * @param message ClientAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.component.ClientAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SideEffect. */
        interface ISideEffect {

            /** SideEffect serviceName */
            serviceName?: (string|null);

            /** SideEffect commandName */
            commandName?: (string|null);

            /** SideEffect payload */
            payload?: (google.protobuf.IAny|null);

            /** SideEffect synchronous */
            synchronous?: (boolean|null);

            /** SideEffect metadata */
            metadata?: (akkaserverless.component.IMetadata|null);
        }

        /** Represents a SideEffect. */
        class SideEffect implements ISideEffect {

            /**
             * Constructs a new SideEffect.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.component.ISideEffect);

            /** SideEffect serviceName. */
            public serviceName: string;

            /** SideEffect commandName. */
            public commandName: string;

            /** SideEffect payload. */
            public payload?: (google.protobuf.IAny|null);

            /** SideEffect synchronous. */
            public synchronous: boolean;

            /** SideEffect metadata. */
            public metadata?: (akkaserverless.component.IMetadata|null);

            /**
             * Creates a new SideEffect instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SideEffect instance
             */
            public static create(properties?: akkaserverless.component.ISideEffect): akkaserverless.component.SideEffect;

            /**
             * Encodes the specified SideEffect message. Does not implicitly {@link akkaserverless.component.SideEffect.verify|verify} messages.
             * @param message SideEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.component.ISideEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SideEffect message, length delimited. Does not implicitly {@link akkaserverless.component.SideEffect.verify|verify} messages.
             * @param message SideEffect message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.component.ISideEffect, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SideEffect message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SideEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.SideEffect;

            /**
             * Decodes a SideEffect message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SideEffect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.SideEffect;

            /**
             * Verifies a SideEffect message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SideEffect message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SideEffect
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.component.SideEffect;

            /**
             * Creates a plain object from a SideEffect message. Also converts values to other types if specified.
             * @param message SideEffect
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.component.SideEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SideEffect to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StreamCancelled. */
        interface IStreamCancelled {

            /** StreamCancelled componentId */
            componentId?: (string|null);

            /** StreamCancelled id */
            id?: (number|Long|null);
        }

        /** Represents a StreamCancelled. */
        class StreamCancelled implements IStreamCancelled {

            /**
             * Constructs a new StreamCancelled.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.component.IStreamCancelled);

            /** StreamCancelled componentId. */
            public componentId: string;

            /** StreamCancelled id. */
            public id: (number|Long);

            /**
             * Creates a new StreamCancelled instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StreamCancelled instance
             */
            public static create(properties?: akkaserverless.component.IStreamCancelled): akkaserverless.component.StreamCancelled;

            /**
             * Encodes the specified StreamCancelled message. Does not implicitly {@link akkaserverless.component.StreamCancelled.verify|verify} messages.
             * @param message StreamCancelled message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.component.IStreamCancelled, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StreamCancelled message, length delimited. Does not implicitly {@link akkaserverless.component.StreamCancelled.verify|verify} messages.
             * @param message StreamCancelled message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.component.IStreamCancelled, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StreamCancelled message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StreamCancelled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.StreamCancelled;

            /**
             * Decodes a StreamCancelled message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StreamCancelled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.StreamCancelled;

            /**
             * Verifies a StreamCancelled message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StreamCancelled message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StreamCancelled
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.component.StreamCancelled;

            /**
             * Creates a plain object from a StreamCancelled message. Also converts values to other types if specified.
             * @param message StreamCancelled
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.component.StreamCancelled, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StreamCancelled to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Failure. */
        interface IFailure {

            /** Failure commandId */
            commandId?: (number|Long|null);

            /** Failure description */
            description?: (string|null);

            /** Failure restart */
            restart?: (boolean|null);
        }

        /** Represents a Failure. */
        class Failure implements IFailure {

            /**
             * Constructs a new Failure.
             * @param [properties] Properties to set
             */
            constructor(properties?: akkaserverless.component.IFailure);

            /** Failure commandId. */
            public commandId: (number|Long);

            /** Failure description. */
            public description: string;

            /** Failure restart. */
            public restart: boolean;

            /**
             * Creates a new Failure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Failure instance
             */
            public static create(properties?: akkaserverless.component.IFailure): akkaserverless.component.Failure;

            /**
             * Encodes the specified Failure message. Does not implicitly {@link akkaserverless.component.Failure.verify|verify} messages.
             * @param message Failure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: akkaserverless.component.IFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Failure message, length delimited. Does not implicitly {@link akkaserverless.component.Failure.verify|verify} messages.
             * @param message Failure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: akkaserverless.component.IFailure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Failure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Failure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.Failure;

            /**
             * Decodes a Failure message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Failure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.Failure;

            /**
             * Verifies a Failure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Failure message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Failure
             */
            public static fromObject(object: { [k: string]: any }): akkaserverless.component.Failure;

            /**
             * Creates a plain object from a Failure message. Also converts values to other types if specified.
             * @param message Failure
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: akkaserverless.component.Failure, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Failure to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Namespace action. */
        namespace action {

            /** Properties of an ActionCommand. */
            interface IActionCommand {

                /** ActionCommand serviceName */
                serviceName?: (string|null);

                /** ActionCommand name */
                name?: (string|null);

                /** ActionCommand payload */
                payload?: (google.protobuf.IAny|null);

                /** ActionCommand metadata */
                metadata?: (akkaserverless.component.IMetadata|null);
            }

            /** Represents an ActionCommand. */
            class ActionCommand implements IActionCommand {

                /**
                 * Constructs a new ActionCommand.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.action.IActionCommand);

                /** ActionCommand serviceName. */
                public serviceName: string;

                /** ActionCommand name. */
                public name: string;

                /** ActionCommand payload. */
                public payload?: (google.protobuf.IAny|null);

                /** ActionCommand metadata. */
                public metadata?: (akkaserverless.component.IMetadata|null);

                /**
                 * Creates a new ActionCommand instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ActionCommand instance
                 */
                public static create(properties?: akkaserverless.component.action.IActionCommand): akkaserverless.component.action.ActionCommand;

                /**
                 * Encodes the specified ActionCommand message. Does not implicitly {@link akkaserverless.component.action.ActionCommand.verify|verify} messages.
                 * @param message ActionCommand message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.action.IActionCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ActionCommand message, length delimited. Does not implicitly {@link akkaserverless.component.action.ActionCommand.verify|verify} messages.
                 * @param message ActionCommand message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.action.IActionCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ActionCommand message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ActionCommand
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.action.ActionCommand;

                /**
                 * Decodes an ActionCommand message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ActionCommand
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.action.ActionCommand;

                /**
                 * Verifies an ActionCommand message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ActionCommand message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ActionCommand
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.action.ActionCommand;

                /**
                 * Creates a plain object from an ActionCommand message. Also converts values to other types if specified.
                 * @param message ActionCommand
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.action.ActionCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ActionCommand to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ActionResponse. */
            interface IActionResponse {

                /** ActionResponse failure */
                failure?: (akkaserverless.component.IFailure|null);

                /** ActionResponse reply */
                reply?: (akkaserverless.component.IReply|null);

                /** ActionResponse forward */
                forward?: (akkaserverless.component.IForward|null);

                /** ActionResponse sideEffects */
                sideEffects?: (akkaserverless.component.ISideEffect[]|null);
            }

            /** Represents an ActionResponse. */
            class ActionResponse implements IActionResponse {

                /**
                 * Constructs a new ActionResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.action.IActionResponse);

                /** ActionResponse failure. */
                public failure?: (akkaserverless.component.IFailure|null);

                /** ActionResponse reply. */
                public reply?: (akkaserverless.component.IReply|null);

                /** ActionResponse forward. */
                public forward?: (akkaserverless.component.IForward|null);

                /** ActionResponse sideEffects. */
                public sideEffects: akkaserverless.component.ISideEffect[];

                /** ActionResponse response. */
                public response?: ("failure"|"reply"|"forward");

                /**
                 * Creates a new ActionResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ActionResponse instance
                 */
                public static create(properties?: akkaserverless.component.action.IActionResponse): akkaserverless.component.action.ActionResponse;

                /**
                 * Encodes the specified ActionResponse message. Does not implicitly {@link akkaserverless.component.action.ActionResponse.verify|verify} messages.
                 * @param message ActionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.action.IActionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ActionResponse message, length delimited. Does not implicitly {@link akkaserverless.component.action.ActionResponse.verify|verify} messages.
                 * @param message ActionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.action.IActionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ActionResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ActionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.action.ActionResponse;

                /**
                 * Decodes an ActionResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ActionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.action.ActionResponse;

                /**
                 * Verifies an ActionResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ActionResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ActionResponse
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.action.ActionResponse;

                /**
                 * Creates a plain object from an ActionResponse message. Also converts values to other types if specified.
                 * @param message ActionResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.action.ActionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ActionResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents an Actions */
            class Actions extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Actions service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Actions service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Actions;

                /**
                 * Calls HandleUnary.
                 * @param request ActionCommand message or plain object
                 * @param callback Node-style callback called with the error, if any, and ActionResponse
                 */
                public handleUnary(request: akkaserverless.component.action.IActionCommand, callback: akkaserverless.component.action.Actions.HandleUnaryCallback): void;

                /**
                 * Calls HandleUnary.
                 * @param request ActionCommand message or plain object
                 * @returns Promise
                 */
                public handleUnary(request: akkaserverless.component.action.IActionCommand): Promise<akkaserverless.component.action.ActionResponse>;

                /**
                 * Calls HandleStreamedIn.
                 * @param request ActionCommand message or plain object
                 * @param callback Node-style callback called with the error, if any, and ActionResponse
                 */
                public handleStreamedIn(request: akkaserverless.component.action.IActionCommand, callback: akkaserverless.component.action.Actions.HandleStreamedInCallback): void;

                /**
                 * Calls HandleStreamedIn.
                 * @param request ActionCommand message or plain object
                 * @returns Promise
                 */
                public handleStreamedIn(request: akkaserverless.component.action.IActionCommand): Promise<akkaserverless.component.action.ActionResponse>;

                /**
                 * Calls HandleStreamedOut.
                 * @param request ActionCommand message or plain object
                 * @param callback Node-style callback called with the error, if any, and ActionResponse
                 */
                public handleStreamedOut(request: akkaserverless.component.action.IActionCommand, callback: akkaserverless.component.action.Actions.HandleStreamedOutCallback): void;

                /**
                 * Calls HandleStreamedOut.
                 * @param request ActionCommand message or plain object
                 * @returns Promise
                 */
                public handleStreamedOut(request: akkaserverless.component.action.IActionCommand): Promise<akkaserverless.component.action.ActionResponse>;

                /**
                 * Calls HandleStreamed.
                 * @param request ActionCommand message or plain object
                 * @param callback Node-style callback called with the error, if any, and ActionResponse
                 */
                public handleStreamed(request: akkaserverless.component.action.IActionCommand, callback: akkaserverless.component.action.Actions.HandleStreamedCallback): void;

                /**
                 * Calls HandleStreamed.
                 * @param request ActionCommand message or plain object
                 * @returns Promise
                 */
                public handleStreamed(request: akkaserverless.component.action.IActionCommand): Promise<akkaserverless.component.action.ActionResponse>;
            }

            namespace Actions {

                /**
                 * Callback as used by {@link akkaserverless.component.action.Actions#handleUnary}.
                 * @param error Error, if any
                 * @param [response] ActionResponse
                 */
                type HandleUnaryCallback = (error: (Error|null), response?: akkaserverless.component.action.ActionResponse) => void;

                /**
                 * Callback as used by {@link akkaserverless.component.action.Actions#handleStreamedIn}.
                 * @param error Error, if any
                 * @param [response] ActionResponse
                 */
                type HandleStreamedInCallback = (error: (Error|null), response?: akkaserverless.component.action.ActionResponse) => void;

                /**
                 * Callback as used by {@link akkaserverless.component.action.Actions#handleStreamedOut}.
                 * @param error Error, if any
                 * @param [response] ActionResponse
                 */
                type HandleStreamedOutCallback = (error: (Error|null), response?: akkaserverless.component.action.ActionResponse) => void;

                /**
                 * Callback as used by {@link akkaserverless.component.action.Actions#handleStreamed}.
                 * @param error Error, if any
                 * @param [response] ActionResponse
                 */
                type HandleStreamedCallback = (error: (Error|null), response?: akkaserverless.component.action.ActionResponse) => void;
            }
        }

        /** Namespace crdt. */
        namespace crdt {

            /** Represents a Crdt */
            class Crdt extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Crdt service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Crdt service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Crdt;

                /**
                 * Calls Handle.
                 * @param request CrdtStreamIn message or plain object
                 * @param callback Node-style callback called with the error, if any, and CrdtStreamOut
                 */
                public handle(request: akkaserverless.component.crdt.ICrdtStreamIn, callback: akkaserverless.component.crdt.Crdt.HandleCallback): void;

                /**
                 * Calls Handle.
                 * @param request CrdtStreamIn message or plain object
                 * @returns Promise
                 */
                public handle(request: akkaserverless.component.crdt.ICrdtStreamIn): Promise<akkaserverless.component.crdt.CrdtStreamOut>;
            }

            namespace Crdt {

                /**
                 * Callback as used by {@link akkaserverless.component.crdt.Crdt#handle}.
                 * @param error Error, if any
                 * @param [response] CrdtStreamOut
                 */
                type HandleCallback = (error: (Error|null), response?: akkaserverless.component.crdt.CrdtStreamOut) => void;
            }

            /** Properties of a CrdtStreamIn. */
            interface ICrdtStreamIn {

                /** CrdtStreamIn init */
                init?: (akkaserverless.component.crdt.ICrdtInit|null);

                /** CrdtStreamIn delta */
                delta?: (akkaserverless.component.crdt.ICrdtDelta|null);

                /** CrdtStreamIn delete */
                "delete"?: (akkaserverless.component.crdt.ICrdtDelete|null);

                /** CrdtStreamIn command */
                command?: (akkaserverless.component.entity.ICommand|null);

                /** CrdtStreamIn streamCancelled */
                streamCancelled?: (akkaserverless.component.IStreamCancelled|null);
            }

            /** Represents a CrdtStreamIn. */
            class CrdtStreamIn implements ICrdtStreamIn {

                /**
                 * Constructs a new CrdtStreamIn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.ICrdtStreamIn);

                /** CrdtStreamIn init. */
                public init?: (akkaserverless.component.crdt.ICrdtInit|null);

                /** CrdtStreamIn delta. */
                public delta?: (akkaserverless.component.crdt.ICrdtDelta|null);

                /** CrdtStreamIn delete. */
                public delete?: (akkaserverless.component.crdt.ICrdtDelete|null);

                /** CrdtStreamIn command. */
                public command?: (akkaserverless.component.entity.ICommand|null);

                /** CrdtStreamIn streamCancelled. */
                public streamCancelled?: (akkaserverless.component.IStreamCancelled|null);

                /** CrdtStreamIn message. */
                public message?: ("init"|"delta"|"delete"|"command"|"streamCancelled");

                /**
                 * Creates a new CrdtStreamIn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CrdtStreamIn instance
                 */
                public static create(properties?: akkaserverless.component.crdt.ICrdtStreamIn): akkaserverless.component.crdt.CrdtStreamIn;

                /**
                 * Encodes the specified CrdtStreamIn message. Does not implicitly {@link akkaserverless.component.crdt.CrdtStreamIn.verify|verify} messages.
                 * @param message CrdtStreamIn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.ICrdtStreamIn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CrdtStreamIn message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.CrdtStreamIn.verify|verify} messages.
                 * @param message CrdtStreamIn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.ICrdtStreamIn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CrdtStreamIn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CrdtStreamIn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.CrdtStreamIn;

                /**
                 * Decodes a CrdtStreamIn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CrdtStreamIn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.CrdtStreamIn;

                /**
                 * Verifies a CrdtStreamIn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CrdtStreamIn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CrdtStreamIn
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.CrdtStreamIn;

                /**
                 * Creates a plain object from a CrdtStreamIn message. Also converts values to other types if specified.
                 * @param message CrdtStreamIn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.CrdtStreamIn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CrdtStreamIn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CrdtStreamOut. */
            interface ICrdtStreamOut {

                /** CrdtStreamOut reply */
                reply?: (akkaserverless.component.crdt.ICrdtReply|null);

                /** CrdtStreamOut streamedMessage */
                streamedMessage?: (akkaserverless.component.crdt.ICrdtStreamedMessage|null);

                /** CrdtStreamOut streamCancelledResponse */
                streamCancelledResponse?: (akkaserverless.component.crdt.ICrdtStreamCancelledResponse|null);

                /** CrdtStreamOut failure */
                failure?: (akkaserverless.component.IFailure|null);
            }

            /** Represents a CrdtStreamOut. */
            class CrdtStreamOut implements ICrdtStreamOut {

                /**
                 * Constructs a new CrdtStreamOut.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.ICrdtStreamOut);

                /** CrdtStreamOut reply. */
                public reply?: (akkaserverless.component.crdt.ICrdtReply|null);

                /** CrdtStreamOut streamedMessage. */
                public streamedMessage?: (akkaserverless.component.crdt.ICrdtStreamedMessage|null);

                /** CrdtStreamOut streamCancelledResponse. */
                public streamCancelledResponse?: (akkaserverless.component.crdt.ICrdtStreamCancelledResponse|null);

                /** CrdtStreamOut failure. */
                public failure?: (akkaserverless.component.IFailure|null);

                /** CrdtStreamOut message. */
                public message?: ("reply"|"streamedMessage"|"streamCancelledResponse"|"failure");

                /**
                 * Creates a new CrdtStreamOut instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CrdtStreamOut instance
                 */
                public static create(properties?: akkaserverless.component.crdt.ICrdtStreamOut): akkaserverless.component.crdt.CrdtStreamOut;

                /**
                 * Encodes the specified CrdtStreamOut message. Does not implicitly {@link akkaserverless.component.crdt.CrdtStreamOut.verify|verify} messages.
                 * @param message CrdtStreamOut message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.ICrdtStreamOut, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CrdtStreamOut message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.CrdtStreamOut.verify|verify} messages.
                 * @param message CrdtStreamOut message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.ICrdtStreamOut, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CrdtStreamOut message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CrdtStreamOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.CrdtStreamOut;

                /**
                 * Decodes a CrdtStreamOut message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CrdtStreamOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.CrdtStreamOut;

                /**
                 * Verifies a CrdtStreamOut message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CrdtStreamOut message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CrdtStreamOut
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.CrdtStreamOut;

                /**
                 * Creates a plain object from a CrdtStreamOut message. Also converts values to other types if specified.
                 * @param message CrdtStreamOut
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.CrdtStreamOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CrdtStreamOut to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CrdtDelta. */
            interface ICrdtDelta {

                /** CrdtDelta gcounter */
                gcounter?: (akkaserverless.component.crdt.IGCounterDelta|null);

                /** CrdtDelta pncounter */
                pncounter?: (akkaserverless.component.crdt.IPNCounterDelta|null);

                /** CrdtDelta gset */
                gset?: (akkaserverless.component.crdt.IGSetDelta|null);

                /** CrdtDelta orset */
                orset?: (akkaserverless.component.crdt.IORSetDelta|null);

                /** CrdtDelta lwwregister */
                lwwregister?: (akkaserverless.component.crdt.ILWWRegisterDelta|null);

                /** CrdtDelta flag */
                flag?: (akkaserverless.component.crdt.IFlagDelta|null);

                /** CrdtDelta ormap */
                ormap?: (akkaserverless.component.crdt.IORMapDelta|null);

                /** CrdtDelta vote */
                vote?: (akkaserverless.component.crdt.IVoteDelta|null);
            }

            /** Represents a CrdtDelta. */
            class CrdtDelta implements ICrdtDelta {

                /**
                 * Constructs a new CrdtDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.ICrdtDelta);

                /** CrdtDelta gcounter. */
                public gcounter?: (akkaserverless.component.crdt.IGCounterDelta|null);

                /** CrdtDelta pncounter. */
                public pncounter?: (akkaserverless.component.crdt.IPNCounterDelta|null);

                /** CrdtDelta gset. */
                public gset?: (akkaserverless.component.crdt.IGSetDelta|null);

                /** CrdtDelta orset. */
                public orset?: (akkaserverless.component.crdt.IORSetDelta|null);

                /** CrdtDelta lwwregister. */
                public lwwregister?: (akkaserverless.component.crdt.ILWWRegisterDelta|null);

                /** CrdtDelta flag. */
                public flag?: (akkaserverless.component.crdt.IFlagDelta|null);

                /** CrdtDelta ormap. */
                public ormap?: (akkaserverless.component.crdt.IORMapDelta|null);

                /** CrdtDelta vote. */
                public vote?: (akkaserverless.component.crdt.IVoteDelta|null);

                /** CrdtDelta delta. */
                public delta?: ("gcounter"|"pncounter"|"gset"|"orset"|"lwwregister"|"flag"|"ormap"|"vote");

                /**
                 * Creates a new CrdtDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CrdtDelta instance
                 */
                public static create(properties?: akkaserverless.component.crdt.ICrdtDelta): akkaserverless.component.crdt.CrdtDelta;

                /**
                 * Encodes the specified CrdtDelta message. Does not implicitly {@link akkaserverless.component.crdt.CrdtDelta.verify|verify} messages.
                 * @param message CrdtDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.ICrdtDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CrdtDelta message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.CrdtDelta.verify|verify} messages.
                 * @param message CrdtDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.ICrdtDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CrdtDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CrdtDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.CrdtDelta;

                /**
                 * Decodes a CrdtDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CrdtDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.CrdtDelta;

                /**
                 * Verifies a CrdtDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CrdtDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CrdtDelta
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.CrdtDelta;

                /**
                 * Creates a plain object from a CrdtDelta message. Also converts values to other types if specified.
                 * @param message CrdtDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.CrdtDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CrdtDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GCounterDelta. */
            interface IGCounterDelta {

                /** GCounterDelta increment */
                increment?: (number|Long|null);
            }

            /** Represents a GCounterDelta. */
            class GCounterDelta implements IGCounterDelta {

                /**
                 * Constructs a new GCounterDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.IGCounterDelta);

                /** GCounterDelta increment. */
                public increment: (number|Long);

                /**
                 * Creates a new GCounterDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GCounterDelta instance
                 */
                public static create(properties?: akkaserverless.component.crdt.IGCounterDelta): akkaserverless.component.crdt.GCounterDelta;

                /**
                 * Encodes the specified GCounterDelta message. Does not implicitly {@link akkaserverless.component.crdt.GCounterDelta.verify|verify} messages.
                 * @param message GCounterDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.IGCounterDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GCounterDelta message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.GCounterDelta.verify|verify} messages.
                 * @param message GCounterDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.IGCounterDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GCounterDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GCounterDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.GCounterDelta;

                /**
                 * Decodes a GCounterDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GCounterDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.GCounterDelta;

                /**
                 * Verifies a GCounterDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GCounterDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GCounterDelta
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.GCounterDelta;

                /**
                 * Creates a plain object from a GCounterDelta message. Also converts values to other types if specified.
                 * @param message GCounterDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.GCounterDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GCounterDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PNCounterDelta. */
            interface IPNCounterDelta {

                /** PNCounterDelta change */
                change?: (number|Long|null);
            }

            /** Represents a PNCounterDelta. */
            class PNCounterDelta implements IPNCounterDelta {

                /**
                 * Constructs a new PNCounterDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.IPNCounterDelta);

                /** PNCounterDelta change. */
                public change: (number|Long);

                /**
                 * Creates a new PNCounterDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PNCounterDelta instance
                 */
                public static create(properties?: akkaserverless.component.crdt.IPNCounterDelta): akkaserverless.component.crdt.PNCounterDelta;

                /**
                 * Encodes the specified PNCounterDelta message. Does not implicitly {@link akkaserverless.component.crdt.PNCounterDelta.verify|verify} messages.
                 * @param message PNCounterDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.IPNCounterDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PNCounterDelta message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.PNCounterDelta.verify|verify} messages.
                 * @param message PNCounterDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.IPNCounterDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PNCounterDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PNCounterDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.PNCounterDelta;

                /**
                 * Decodes a PNCounterDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PNCounterDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.PNCounterDelta;

                /**
                 * Verifies a PNCounterDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PNCounterDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PNCounterDelta
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.PNCounterDelta;

                /**
                 * Creates a plain object from a PNCounterDelta message. Also converts values to other types if specified.
                 * @param message PNCounterDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.PNCounterDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PNCounterDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GSetDelta. */
            interface IGSetDelta {

                /** GSetDelta added */
                added?: (google.protobuf.IAny[]|null);
            }

            /** Represents a GSetDelta. */
            class GSetDelta implements IGSetDelta {

                /**
                 * Constructs a new GSetDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.IGSetDelta);

                /** GSetDelta added. */
                public added: google.protobuf.IAny[];

                /**
                 * Creates a new GSetDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GSetDelta instance
                 */
                public static create(properties?: akkaserverless.component.crdt.IGSetDelta): akkaserverless.component.crdt.GSetDelta;

                /**
                 * Encodes the specified GSetDelta message. Does not implicitly {@link akkaserverless.component.crdt.GSetDelta.verify|verify} messages.
                 * @param message GSetDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.IGSetDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GSetDelta message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.GSetDelta.verify|verify} messages.
                 * @param message GSetDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.IGSetDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GSetDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GSetDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.GSetDelta;

                /**
                 * Decodes a GSetDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GSetDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.GSetDelta;

                /**
                 * Verifies a GSetDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GSetDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GSetDelta
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.GSetDelta;

                /**
                 * Creates a plain object from a GSetDelta message. Also converts values to other types if specified.
                 * @param message GSetDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.GSetDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GSetDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ORSetDelta. */
            interface IORSetDelta {

                /** ORSetDelta cleared */
                cleared?: (boolean|null);

                /** ORSetDelta removed */
                removed?: (google.protobuf.IAny[]|null);

                /** ORSetDelta added */
                added?: (google.protobuf.IAny[]|null);
            }

            /** Represents a ORSetDelta. */
            class ORSetDelta implements IORSetDelta {

                /**
                 * Constructs a new ORSetDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.IORSetDelta);

                /** ORSetDelta cleared. */
                public cleared: boolean;

                /** ORSetDelta removed. */
                public removed: google.protobuf.IAny[];

                /** ORSetDelta added. */
                public added: google.protobuf.IAny[];

                /**
                 * Creates a new ORSetDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ORSetDelta instance
                 */
                public static create(properties?: akkaserverless.component.crdt.IORSetDelta): akkaserverless.component.crdt.ORSetDelta;

                /**
                 * Encodes the specified ORSetDelta message. Does not implicitly {@link akkaserverless.component.crdt.ORSetDelta.verify|verify} messages.
                 * @param message ORSetDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.IORSetDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ORSetDelta message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.ORSetDelta.verify|verify} messages.
                 * @param message ORSetDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.IORSetDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ORSetDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ORSetDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.ORSetDelta;

                /**
                 * Decodes a ORSetDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ORSetDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.ORSetDelta;

                /**
                 * Verifies a ORSetDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ORSetDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ORSetDelta
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.ORSetDelta;

                /**
                 * Creates a plain object from a ORSetDelta message. Also converts values to other types if specified.
                 * @param message ORSetDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.ORSetDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ORSetDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LWWRegisterDelta. */
            interface ILWWRegisterDelta {

                /** LWWRegisterDelta value */
                value?: (google.protobuf.IAny|null);

                /** LWWRegisterDelta clock */
                clock?: (akkaserverless.component.crdt.CrdtClock|null);

                /** LWWRegisterDelta customClockValue */
                customClockValue?: (number|Long|null);
            }

            /** Represents a LWWRegisterDelta. */
            class LWWRegisterDelta implements ILWWRegisterDelta {

                /**
                 * Constructs a new LWWRegisterDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.ILWWRegisterDelta);

                /** LWWRegisterDelta value. */
                public value?: (google.protobuf.IAny|null);

                /** LWWRegisterDelta clock. */
                public clock: akkaserverless.component.crdt.CrdtClock;

                /** LWWRegisterDelta customClockValue. */
                public customClockValue: (number|Long);

                /**
                 * Creates a new LWWRegisterDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LWWRegisterDelta instance
                 */
                public static create(properties?: akkaserverless.component.crdt.ILWWRegisterDelta): akkaserverless.component.crdt.LWWRegisterDelta;

                /**
                 * Encodes the specified LWWRegisterDelta message. Does not implicitly {@link akkaserverless.component.crdt.LWWRegisterDelta.verify|verify} messages.
                 * @param message LWWRegisterDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.ILWWRegisterDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LWWRegisterDelta message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.LWWRegisterDelta.verify|verify} messages.
                 * @param message LWWRegisterDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.ILWWRegisterDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LWWRegisterDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LWWRegisterDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.LWWRegisterDelta;

                /**
                 * Decodes a LWWRegisterDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LWWRegisterDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.LWWRegisterDelta;

                /**
                 * Verifies a LWWRegisterDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LWWRegisterDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LWWRegisterDelta
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.LWWRegisterDelta;

                /**
                 * Creates a plain object from a LWWRegisterDelta message. Also converts values to other types if specified.
                 * @param message LWWRegisterDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.LWWRegisterDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LWWRegisterDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a FlagDelta. */
            interface IFlagDelta {

                /** FlagDelta value */
                value?: (boolean|null);
            }

            /** Represents a FlagDelta. */
            class FlagDelta implements IFlagDelta {

                /**
                 * Constructs a new FlagDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.IFlagDelta);

                /** FlagDelta value. */
                public value: boolean;

                /**
                 * Creates a new FlagDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FlagDelta instance
                 */
                public static create(properties?: akkaserverless.component.crdt.IFlagDelta): akkaserverless.component.crdt.FlagDelta;

                /**
                 * Encodes the specified FlagDelta message. Does not implicitly {@link akkaserverless.component.crdt.FlagDelta.verify|verify} messages.
                 * @param message FlagDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.IFlagDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FlagDelta message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.FlagDelta.verify|verify} messages.
                 * @param message FlagDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.IFlagDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FlagDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FlagDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.FlagDelta;

                /**
                 * Decodes a FlagDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FlagDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.FlagDelta;

                /**
                 * Verifies a FlagDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FlagDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FlagDelta
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.FlagDelta;

                /**
                 * Creates a plain object from a FlagDelta message. Also converts values to other types if specified.
                 * @param message FlagDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.FlagDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FlagDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ORMapDelta. */
            interface IORMapDelta {

                /** ORMapDelta cleared */
                cleared?: (boolean|null);

                /** ORMapDelta removed */
                removed?: (google.protobuf.IAny[]|null);

                /** ORMapDelta updated */
                updated?: (akkaserverless.component.crdt.IORMapEntryDelta[]|null);

                /** ORMapDelta added */
                added?: (akkaserverless.component.crdt.IORMapEntryDelta[]|null);
            }

            /** Represents a ORMapDelta. */
            class ORMapDelta implements IORMapDelta {

                /**
                 * Constructs a new ORMapDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.IORMapDelta);

                /** ORMapDelta cleared. */
                public cleared: boolean;

                /** ORMapDelta removed. */
                public removed: google.protobuf.IAny[];

                /** ORMapDelta updated. */
                public updated: akkaserverless.component.crdt.IORMapEntryDelta[];

                /** ORMapDelta added. */
                public added: akkaserverless.component.crdt.IORMapEntryDelta[];

                /**
                 * Creates a new ORMapDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ORMapDelta instance
                 */
                public static create(properties?: akkaserverless.component.crdt.IORMapDelta): akkaserverless.component.crdt.ORMapDelta;

                /**
                 * Encodes the specified ORMapDelta message. Does not implicitly {@link akkaserverless.component.crdt.ORMapDelta.verify|verify} messages.
                 * @param message ORMapDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.IORMapDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ORMapDelta message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.ORMapDelta.verify|verify} messages.
                 * @param message ORMapDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.IORMapDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ORMapDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ORMapDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.ORMapDelta;

                /**
                 * Decodes a ORMapDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ORMapDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.ORMapDelta;

                /**
                 * Verifies a ORMapDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ORMapDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ORMapDelta
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.ORMapDelta;

                /**
                 * Creates a plain object from a ORMapDelta message. Also converts values to other types if specified.
                 * @param message ORMapDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.ORMapDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ORMapDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ORMapEntryDelta. */
            interface IORMapEntryDelta {

                /** ORMapEntryDelta key */
                key?: (google.protobuf.IAny|null);

                /** ORMapEntryDelta delta */
                delta?: (akkaserverless.component.crdt.ICrdtDelta|null);
            }

            /** Represents a ORMapEntryDelta. */
            class ORMapEntryDelta implements IORMapEntryDelta {

                /**
                 * Constructs a new ORMapEntryDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.IORMapEntryDelta);

                /** ORMapEntryDelta key. */
                public key?: (google.protobuf.IAny|null);

                /** ORMapEntryDelta delta. */
                public delta?: (akkaserverless.component.crdt.ICrdtDelta|null);

                /**
                 * Creates a new ORMapEntryDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ORMapEntryDelta instance
                 */
                public static create(properties?: akkaserverless.component.crdt.IORMapEntryDelta): akkaserverless.component.crdt.ORMapEntryDelta;

                /**
                 * Encodes the specified ORMapEntryDelta message. Does not implicitly {@link akkaserverless.component.crdt.ORMapEntryDelta.verify|verify} messages.
                 * @param message ORMapEntryDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.IORMapEntryDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ORMapEntryDelta message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.ORMapEntryDelta.verify|verify} messages.
                 * @param message ORMapEntryDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.IORMapEntryDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ORMapEntryDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ORMapEntryDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.ORMapEntryDelta;

                /**
                 * Decodes a ORMapEntryDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ORMapEntryDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.ORMapEntryDelta;

                /**
                 * Verifies a ORMapEntryDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ORMapEntryDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ORMapEntryDelta
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.ORMapEntryDelta;

                /**
                 * Creates a plain object from a ORMapEntryDelta message. Also converts values to other types if specified.
                 * @param message ORMapEntryDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.ORMapEntryDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ORMapEntryDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a VoteDelta. */
            interface IVoteDelta {

                /** VoteDelta selfVote */
                selfVote?: (boolean|null);

                /** VoteDelta votesFor */
                votesFor?: (number|null);

                /** VoteDelta totalVoters */
                totalVoters?: (number|null);
            }

            /** Represents a VoteDelta. */
            class VoteDelta implements IVoteDelta {

                /**
                 * Constructs a new VoteDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.IVoteDelta);

                /** VoteDelta selfVote. */
                public selfVote: boolean;

                /** VoteDelta votesFor. */
                public votesFor: number;

                /** VoteDelta totalVoters. */
                public totalVoters: number;

                /**
                 * Creates a new VoteDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VoteDelta instance
                 */
                public static create(properties?: akkaserverless.component.crdt.IVoteDelta): akkaserverless.component.crdt.VoteDelta;

                /**
                 * Encodes the specified VoteDelta message. Does not implicitly {@link akkaserverless.component.crdt.VoteDelta.verify|verify} messages.
                 * @param message VoteDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.IVoteDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VoteDelta message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.VoteDelta.verify|verify} messages.
                 * @param message VoteDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.IVoteDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VoteDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VoteDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.VoteDelta;

                /**
                 * Decodes a VoteDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VoteDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.VoteDelta;

                /**
                 * Verifies a VoteDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VoteDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VoteDelta
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.VoteDelta;

                /**
                 * Creates a plain object from a VoteDelta message. Also converts values to other types if specified.
                 * @param message VoteDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.VoteDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VoteDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CrdtInit. */
            interface ICrdtInit {

                /** CrdtInit serviceName */
                serviceName?: (string|null);

                /** CrdtInit entityId */
                entityId?: (string|null);

                /** CrdtInit delta */
                delta?: (akkaserverless.component.crdt.ICrdtDelta|null);
            }

            /** Represents a CrdtInit. */
            class CrdtInit implements ICrdtInit {

                /**
                 * Constructs a new CrdtInit.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.ICrdtInit);

                /** CrdtInit serviceName. */
                public serviceName: string;

                /** CrdtInit entityId. */
                public entityId: string;

                /** CrdtInit delta. */
                public delta?: (akkaserverless.component.crdt.ICrdtDelta|null);

                /**
                 * Creates a new CrdtInit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CrdtInit instance
                 */
                public static create(properties?: akkaserverless.component.crdt.ICrdtInit): akkaserverless.component.crdt.CrdtInit;

                /**
                 * Encodes the specified CrdtInit message. Does not implicitly {@link akkaserverless.component.crdt.CrdtInit.verify|verify} messages.
                 * @param message CrdtInit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.ICrdtInit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CrdtInit message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.CrdtInit.verify|verify} messages.
                 * @param message CrdtInit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.ICrdtInit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CrdtInit message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CrdtInit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.CrdtInit;

                /**
                 * Decodes a CrdtInit message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CrdtInit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.CrdtInit;

                /**
                 * Verifies a CrdtInit message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CrdtInit message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CrdtInit
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.CrdtInit;

                /**
                 * Creates a plain object from a CrdtInit message. Also converts values to other types if specified.
                 * @param message CrdtInit
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.CrdtInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CrdtInit to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CrdtDelete. */
            interface ICrdtDelete {
            }

            /** Represents a CrdtDelete. */
            class CrdtDelete implements ICrdtDelete {

                /**
                 * Constructs a new CrdtDelete.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.ICrdtDelete);

                /**
                 * Creates a new CrdtDelete instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CrdtDelete instance
                 */
                public static create(properties?: akkaserverless.component.crdt.ICrdtDelete): akkaserverless.component.crdt.CrdtDelete;

                /**
                 * Encodes the specified CrdtDelete message. Does not implicitly {@link akkaserverless.component.crdt.CrdtDelete.verify|verify} messages.
                 * @param message CrdtDelete message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.ICrdtDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CrdtDelete message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.CrdtDelete.verify|verify} messages.
                 * @param message CrdtDelete message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.ICrdtDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CrdtDelete message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CrdtDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.CrdtDelete;

                /**
                 * Decodes a CrdtDelete message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CrdtDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.CrdtDelete;

                /**
                 * Verifies a CrdtDelete message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CrdtDelete message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CrdtDelete
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.CrdtDelete;

                /**
                 * Creates a plain object from a CrdtDelete message. Also converts values to other types if specified.
                 * @param message CrdtDelete
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.CrdtDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CrdtDelete to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CrdtReply. */
            interface ICrdtReply {

                /** CrdtReply commandId */
                commandId?: (number|Long|null);

                /** CrdtReply clientAction */
                clientAction?: (akkaserverless.component.IClientAction|null);

                /** CrdtReply sideEffects */
                sideEffects?: (akkaserverless.component.ISideEffect[]|null);

                /** CrdtReply stateAction */
                stateAction?: (akkaserverless.component.crdt.ICrdtStateAction|null);

                /** CrdtReply streamed */
                streamed?: (boolean|null);
            }

            /** Represents a CrdtReply. */
            class CrdtReply implements ICrdtReply {

                /**
                 * Constructs a new CrdtReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.ICrdtReply);

                /** CrdtReply commandId. */
                public commandId: (number|Long);

                /** CrdtReply clientAction. */
                public clientAction?: (akkaserverless.component.IClientAction|null);

                /** CrdtReply sideEffects. */
                public sideEffects: akkaserverless.component.ISideEffect[];

                /** CrdtReply stateAction. */
                public stateAction?: (akkaserverless.component.crdt.ICrdtStateAction|null);

                /** CrdtReply streamed. */
                public streamed: boolean;

                /**
                 * Creates a new CrdtReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CrdtReply instance
                 */
                public static create(properties?: akkaserverless.component.crdt.ICrdtReply): akkaserverless.component.crdt.CrdtReply;

                /**
                 * Encodes the specified CrdtReply message. Does not implicitly {@link akkaserverless.component.crdt.CrdtReply.verify|verify} messages.
                 * @param message CrdtReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.ICrdtReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CrdtReply message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.CrdtReply.verify|verify} messages.
                 * @param message CrdtReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.ICrdtReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CrdtReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CrdtReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.CrdtReply;

                /**
                 * Decodes a CrdtReply message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CrdtReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.CrdtReply;

                /**
                 * Verifies a CrdtReply message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CrdtReply message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CrdtReply
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.CrdtReply;

                /**
                 * Creates a plain object from a CrdtReply message. Also converts values to other types if specified.
                 * @param message CrdtReply
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.CrdtReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CrdtReply to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CrdtStateAction. */
            interface ICrdtStateAction {

                /** CrdtStateAction update */
                update?: (akkaserverless.component.crdt.ICrdtDelta|null);

                /** CrdtStateAction delete */
                "delete"?: (akkaserverless.component.crdt.ICrdtDelete|null);

                /** CrdtStateAction writeConsistency */
                writeConsistency?: (akkaserverless.component.crdt.CrdtWriteConsistency|null);
            }

            /** Represents a CrdtStateAction. */
            class CrdtStateAction implements ICrdtStateAction {

                /**
                 * Constructs a new CrdtStateAction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.ICrdtStateAction);

                /** CrdtStateAction update. */
                public update?: (akkaserverless.component.crdt.ICrdtDelta|null);

                /** CrdtStateAction delete. */
                public delete?: (akkaserverless.component.crdt.ICrdtDelete|null);

                /** CrdtStateAction writeConsistency. */
                public writeConsistency: akkaserverless.component.crdt.CrdtWriteConsistency;

                /** CrdtStateAction action. */
                public action?: ("update"|"delete");

                /**
                 * Creates a new CrdtStateAction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CrdtStateAction instance
                 */
                public static create(properties?: akkaserverless.component.crdt.ICrdtStateAction): akkaserverless.component.crdt.CrdtStateAction;

                /**
                 * Encodes the specified CrdtStateAction message. Does not implicitly {@link akkaserverless.component.crdt.CrdtStateAction.verify|verify} messages.
                 * @param message CrdtStateAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.ICrdtStateAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CrdtStateAction message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.CrdtStateAction.verify|verify} messages.
                 * @param message CrdtStateAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.ICrdtStateAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CrdtStateAction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CrdtStateAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.CrdtStateAction;

                /**
                 * Decodes a CrdtStateAction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CrdtStateAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.CrdtStateAction;

                /**
                 * Verifies a CrdtStateAction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CrdtStateAction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CrdtStateAction
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.CrdtStateAction;

                /**
                 * Creates a plain object from a CrdtStateAction message. Also converts values to other types if specified.
                 * @param message CrdtStateAction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.CrdtStateAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CrdtStateAction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CrdtStreamedMessage. */
            interface ICrdtStreamedMessage {

                /** CrdtStreamedMessage commandId */
                commandId?: (number|Long|null);

                /** CrdtStreamedMessage clientAction */
                clientAction?: (akkaserverless.component.IClientAction|null);

                /** CrdtStreamedMessage sideEffects */
                sideEffects?: (akkaserverless.component.ISideEffect[]|null);

                /** CrdtStreamedMessage endStream */
                endStream?: (boolean|null);
            }

            /** Represents a CrdtStreamedMessage. */
            class CrdtStreamedMessage implements ICrdtStreamedMessage {

                /**
                 * Constructs a new CrdtStreamedMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.ICrdtStreamedMessage);

                /** CrdtStreamedMessage commandId. */
                public commandId: (number|Long);

                /** CrdtStreamedMessage clientAction. */
                public clientAction?: (akkaserverless.component.IClientAction|null);

                /** CrdtStreamedMessage sideEffects. */
                public sideEffects: akkaserverless.component.ISideEffect[];

                /** CrdtStreamedMessage endStream. */
                public endStream: boolean;

                /**
                 * Creates a new CrdtStreamedMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CrdtStreamedMessage instance
                 */
                public static create(properties?: akkaserverless.component.crdt.ICrdtStreamedMessage): akkaserverless.component.crdt.CrdtStreamedMessage;

                /**
                 * Encodes the specified CrdtStreamedMessage message. Does not implicitly {@link akkaserverless.component.crdt.CrdtStreamedMessage.verify|verify} messages.
                 * @param message CrdtStreamedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.ICrdtStreamedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CrdtStreamedMessage message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.CrdtStreamedMessage.verify|verify} messages.
                 * @param message CrdtStreamedMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.ICrdtStreamedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CrdtStreamedMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CrdtStreamedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.CrdtStreamedMessage;

                /**
                 * Decodes a CrdtStreamedMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CrdtStreamedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.CrdtStreamedMessage;

                /**
                 * Verifies a CrdtStreamedMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CrdtStreamedMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CrdtStreamedMessage
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.CrdtStreamedMessage;

                /**
                 * Creates a plain object from a CrdtStreamedMessage message. Also converts values to other types if specified.
                 * @param message CrdtStreamedMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.CrdtStreamedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CrdtStreamedMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CrdtStreamCancelledResponse. */
            interface ICrdtStreamCancelledResponse {

                /** CrdtStreamCancelledResponse commandId */
                commandId?: (number|Long|null);

                /** CrdtStreamCancelledResponse sideEffects */
                sideEffects?: (akkaserverless.component.ISideEffect[]|null);

                /** CrdtStreamCancelledResponse stateAction */
                stateAction?: (akkaserverless.component.crdt.ICrdtStateAction|null);
            }

            /** Represents a CrdtStreamCancelledResponse. */
            class CrdtStreamCancelledResponse implements ICrdtStreamCancelledResponse {

                /**
                 * Constructs a new CrdtStreamCancelledResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.crdt.ICrdtStreamCancelledResponse);

                /** CrdtStreamCancelledResponse commandId. */
                public commandId: (number|Long);

                /** CrdtStreamCancelledResponse sideEffects. */
                public sideEffects: akkaserverless.component.ISideEffect[];

                /** CrdtStreamCancelledResponse stateAction. */
                public stateAction?: (akkaserverless.component.crdt.ICrdtStateAction|null);

                /**
                 * Creates a new CrdtStreamCancelledResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CrdtStreamCancelledResponse instance
                 */
                public static create(properties?: akkaserverless.component.crdt.ICrdtStreamCancelledResponse): akkaserverless.component.crdt.CrdtStreamCancelledResponse;

                /**
                 * Encodes the specified CrdtStreamCancelledResponse message. Does not implicitly {@link akkaserverless.component.crdt.CrdtStreamCancelledResponse.verify|verify} messages.
                 * @param message CrdtStreamCancelledResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.crdt.ICrdtStreamCancelledResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CrdtStreamCancelledResponse message, length delimited. Does not implicitly {@link akkaserverless.component.crdt.CrdtStreamCancelledResponse.verify|verify} messages.
                 * @param message CrdtStreamCancelledResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.crdt.ICrdtStreamCancelledResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CrdtStreamCancelledResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CrdtStreamCancelledResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.crdt.CrdtStreamCancelledResponse;

                /**
                 * Decodes a CrdtStreamCancelledResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CrdtStreamCancelledResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.crdt.CrdtStreamCancelledResponse;

                /**
                 * Verifies a CrdtStreamCancelledResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CrdtStreamCancelledResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CrdtStreamCancelledResponse
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.crdt.CrdtStreamCancelledResponse;

                /**
                 * Creates a plain object from a CrdtStreamCancelledResponse message. Also converts values to other types if specified.
                 * @param message CrdtStreamCancelledResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.crdt.CrdtStreamCancelledResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CrdtStreamCancelledResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** CrdtWriteConsistency enum. */
            enum CrdtWriteConsistency {
                CRDT_WRITE_CONSISTENCY_LOCAL_UNSPECIFIED = 0,
                CRDT_WRITE_CONSISTENCY_MAJORITY = 1,
                CRDT_WRITE_CONSISTENCY_ALL = 2
            }

            /** CrdtClock enum. */
            enum CrdtClock {
                CRDT_CLOCK_DEFAULT_UNSPECIFIED = 0,
                CRDT_CLOCK_REVERSE = 1,
                CRDT_CLOCK_CUSTOM = 2,
                CRDT_CLOCK_CUSTOM_AUTO_INCREMENT = 3
            }
        }

        /** Namespace entity. */
        namespace entity {

            /** Properties of a Command. */
            interface ICommand {

                /** Command entityId */
                entityId?: (string|null);

                /** Command id */
                id?: (number|Long|null);

                /** Command name */
                name?: (string|null);

                /** Command payload */
                payload?: (google.protobuf.IAny|null);

                /** Command streamed */
                streamed?: (boolean|null);

                /** Command metadata */
                metadata?: (akkaserverless.component.IMetadata|null);
            }

            /** Represents a Command. */
            class Command implements ICommand {

                /**
                 * Constructs a new Command.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.entity.ICommand);

                /** Command entityId. */
                public entityId: string;

                /** Command id. */
                public id: (number|Long);

                /** Command name. */
                public name: string;

                /** Command payload. */
                public payload?: (google.protobuf.IAny|null);

                /** Command streamed. */
                public streamed: boolean;

                /** Command metadata. */
                public metadata?: (akkaserverless.component.IMetadata|null);

                /**
                 * Creates a new Command instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Command instance
                 */
                public static create(properties?: akkaserverless.component.entity.ICommand): akkaserverless.component.entity.Command;

                /**
                 * Encodes the specified Command message. Does not implicitly {@link akkaserverless.component.entity.Command.verify|verify} messages.
                 * @param message Command message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.entity.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Command message, length delimited. Does not implicitly {@link akkaserverless.component.entity.Command.verify|verify} messages.
                 * @param message Command message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.entity.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Command message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Command
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.entity.Command;

                /**
                 * Decodes a Command message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Command
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.entity.Command;

                /**
                 * Verifies a Command message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Command message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Command
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.entity.Command;

                /**
                 * Creates a plain object from a Command message. Also converts values to other types if specified.
                 * @param message Command
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.entity.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Command to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace eventsourcedentity. */
        namespace eventsourcedentity {

            /** Properties of an EventSourcedInit. */
            interface IEventSourcedInit {

                /** EventSourcedInit serviceName */
                serviceName?: (string|null);

                /** EventSourcedInit entityId */
                entityId?: (string|null);

                /** EventSourcedInit snapshot */
                snapshot?: (akkaserverless.component.eventsourcedentity.IEventSourcedSnapshot|null);
            }

            /** Represents an EventSourcedInit. */
            class EventSourcedInit implements IEventSourcedInit {

                /**
                 * Constructs a new EventSourcedInit.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedInit);

                /** EventSourcedInit serviceName. */
                public serviceName: string;

                /** EventSourcedInit entityId. */
                public entityId: string;

                /** EventSourcedInit snapshot. */
                public snapshot?: (akkaserverless.component.eventsourcedentity.IEventSourcedSnapshot|null);

                /**
                 * Creates a new EventSourcedInit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EventSourcedInit instance
                 */
                public static create(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedInit): akkaserverless.component.eventsourcedentity.EventSourcedInit;

                /**
                 * Encodes the specified EventSourcedInit message. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedInit.verify|verify} messages.
                 * @param message EventSourcedInit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.eventsourcedentity.IEventSourcedInit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EventSourcedInit message, length delimited. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedInit.verify|verify} messages.
                 * @param message EventSourcedInit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.eventsourcedentity.IEventSourcedInit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EventSourcedInit message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EventSourcedInit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.eventsourcedentity.EventSourcedInit;

                /**
                 * Decodes an EventSourcedInit message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EventSourcedInit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.eventsourcedentity.EventSourcedInit;

                /**
                 * Verifies an EventSourcedInit message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EventSourcedInit message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EventSourcedInit
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.eventsourcedentity.EventSourcedInit;

                /**
                 * Creates a plain object from an EventSourcedInit message. Also converts values to other types if specified.
                 * @param message EventSourcedInit
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.eventsourcedentity.EventSourcedInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EventSourcedInit to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EventSourcedSnapshot. */
            interface IEventSourcedSnapshot {

                /** EventSourcedSnapshot snapshotSequence */
                snapshotSequence?: (number|Long|null);

                /** EventSourcedSnapshot snapshot */
                snapshot?: (google.protobuf.IAny|null);
            }

            /** Represents an EventSourcedSnapshot. */
            class EventSourcedSnapshot implements IEventSourcedSnapshot {

                /**
                 * Constructs a new EventSourcedSnapshot.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedSnapshot);

                /** EventSourcedSnapshot snapshotSequence. */
                public snapshotSequence: (number|Long);

                /** EventSourcedSnapshot snapshot. */
                public snapshot?: (google.protobuf.IAny|null);

                /**
                 * Creates a new EventSourcedSnapshot instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EventSourcedSnapshot instance
                 */
                public static create(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedSnapshot): akkaserverless.component.eventsourcedentity.EventSourcedSnapshot;

                /**
                 * Encodes the specified EventSourcedSnapshot message. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedSnapshot.verify|verify} messages.
                 * @param message EventSourcedSnapshot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.eventsourcedentity.IEventSourcedSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EventSourcedSnapshot message, length delimited. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedSnapshot.verify|verify} messages.
                 * @param message EventSourcedSnapshot message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.eventsourcedentity.IEventSourcedSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EventSourcedSnapshot message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EventSourcedSnapshot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.eventsourcedentity.EventSourcedSnapshot;

                /**
                 * Decodes an EventSourcedSnapshot message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EventSourcedSnapshot
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.eventsourcedentity.EventSourcedSnapshot;

                /**
                 * Verifies an EventSourcedSnapshot message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EventSourcedSnapshot message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EventSourcedSnapshot
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.eventsourcedentity.EventSourcedSnapshot;

                /**
                 * Creates a plain object from an EventSourcedSnapshot message. Also converts values to other types if specified.
                 * @param message EventSourcedSnapshot
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.eventsourcedentity.EventSourcedSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EventSourcedSnapshot to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EventSourcedEvent. */
            interface IEventSourcedEvent {

                /** EventSourcedEvent sequence */
                sequence?: (number|Long|null);

                /** EventSourcedEvent payload */
                payload?: (google.protobuf.IAny|null);
            }

            /** Represents an EventSourcedEvent. */
            class EventSourcedEvent implements IEventSourcedEvent {

                /**
                 * Constructs a new EventSourcedEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedEvent);

                /** EventSourcedEvent sequence. */
                public sequence: (number|Long);

                /** EventSourcedEvent payload. */
                public payload?: (google.protobuf.IAny|null);

                /**
                 * Creates a new EventSourcedEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EventSourcedEvent instance
                 */
                public static create(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedEvent): akkaserverless.component.eventsourcedentity.EventSourcedEvent;

                /**
                 * Encodes the specified EventSourcedEvent message. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedEvent.verify|verify} messages.
                 * @param message EventSourcedEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.eventsourcedentity.IEventSourcedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EventSourcedEvent message, length delimited. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedEvent.verify|verify} messages.
                 * @param message EventSourcedEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.eventsourcedentity.IEventSourcedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EventSourcedEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EventSourcedEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.eventsourcedentity.EventSourcedEvent;

                /**
                 * Decodes an EventSourcedEvent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EventSourcedEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.eventsourcedentity.EventSourcedEvent;

                /**
                 * Verifies an EventSourcedEvent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EventSourcedEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EventSourcedEvent
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.eventsourcedentity.EventSourcedEvent;

                /**
                 * Creates a plain object from an EventSourcedEvent message. Also converts values to other types if specified.
                 * @param message EventSourcedEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.eventsourcedentity.EventSourcedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EventSourcedEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EventSourcedReply. */
            interface IEventSourcedReply {

                /** EventSourcedReply commandId */
                commandId?: (number|Long|null);

                /** EventSourcedReply clientAction */
                clientAction?: (akkaserverless.component.IClientAction|null);

                /** EventSourcedReply sideEffects */
                sideEffects?: (akkaserverless.component.ISideEffect[]|null);

                /** EventSourcedReply events */
                events?: (google.protobuf.IAny[]|null);

                /** EventSourcedReply snapshot */
                snapshot?: (google.protobuf.IAny|null);
            }

            /** Represents an EventSourcedReply. */
            class EventSourcedReply implements IEventSourcedReply {

                /**
                 * Constructs a new EventSourcedReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedReply);

                /** EventSourcedReply commandId. */
                public commandId: (number|Long);

                /** EventSourcedReply clientAction. */
                public clientAction?: (akkaserverless.component.IClientAction|null);

                /** EventSourcedReply sideEffects. */
                public sideEffects: akkaserverless.component.ISideEffect[];

                /** EventSourcedReply events. */
                public events: google.protobuf.IAny[];

                /** EventSourcedReply snapshot. */
                public snapshot?: (google.protobuf.IAny|null);

                /**
                 * Creates a new EventSourcedReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EventSourcedReply instance
                 */
                public static create(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedReply): akkaserverless.component.eventsourcedentity.EventSourcedReply;

                /**
                 * Encodes the specified EventSourcedReply message. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedReply.verify|verify} messages.
                 * @param message EventSourcedReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.eventsourcedentity.IEventSourcedReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EventSourcedReply message, length delimited. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedReply.verify|verify} messages.
                 * @param message EventSourcedReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.eventsourcedentity.IEventSourcedReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EventSourcedReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EventSourcedReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.eventsourcedentity.EventSourcedReply;

                /**
                 * Decodes an EventSourcedReply message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EventSourcedReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.eventsourcedentity.EventSourcedReply;

                /**
                 * Verifies an EventSourcedReply message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EventSourcedReply message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EventSourcedReply
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.eventsourcedentity.EventSourcedReply;

                /**
                 * Creates a plain object from an EventSourcedReply message. Also converts values to other types if specified.
                 * @param message EventSourcedReply
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.eventsourcedentity.EventSourcedReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EventSourcedReply to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EventSourcedStreamIn. */
            interface IEventSourcedStreamIn {

                /** EventSourcedStreamIn init */
                init?: (akkaserverless.component.eventsourcedentity.IEventSourcedInit|null);

                /** EventSourcedStreamIn event */
                event?: (akkaserverless.component.eventsourcedentity.IEventSourcedEvent|null);

                /** EventSourcedStreamIn command */
                command?: (akkaserverless.component.entity.ICommand|null);
            }

            /** Represents an EventSourcedStreamIn. */
            class EventSourcedStreamIn implements IEventSourcedStreamIn {

                /**
                 * Constructs a new EventSourcedStreamIn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedStreamIn);

                /** EventSourcedStreamIn init. */
                public init?: (akkaserverless.component.eventsourcedentity.IEventSourcedInit|null);

                /** EventSourcedStreamIn event. */
                public event?: (akkaserverless.component.eventsourcedentity.IEventSourcedEvent|null);

                /** EventSourcedStreamIn command. */
                public command?: (akkaserverless.component.entity.ICommand|null);

                /** EventSourcedStreamIn message. */
                public message?: ("init"|"event"|"command");

                /**
                 * Creates a new EventSourcedStreamIn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EventSourcedStreamIn instance
                 */
                public static create(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedStreamIn): akkaserverless.component.eventsourcedentity.EventSourcedStreamIn;

                /**
                 * Encodes the specified EventSourcedStreamIn message. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedStreamIn.verify|verify} messages.
                 * @param message EventSourcedStreamIn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.eventsourcedentity.IEventSourcedStreamIn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EventSourcedStreamIn message, length delimited. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedStreamIn.verify|verify} messages.
                 * @param message EventSourcedStreamIn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.eventsourcedentity.IEventSourcedStreamIn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EventSourcedStreamIn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EventSourcedStreamIn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.eventsourcedentity.EventSourcedStreamIn;

                /**
                 * Decodes an EventSourcedStreamIn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EventSourcedStreamIn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.eventsourcedentity.EventSourcedStreamIn;

                /**
                 * Verifies an EventSourcedStreamIn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EventSourcedStreamIn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EventSourcedStreamIn
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.eventsourcedentity.EventSourcedStreamIn;

                /**
                 * Creates a plain object from an EventSourcedStreamIn message. Also converts values to other types if specified.
                 * @param message EventSourcedStreamIn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.eventsourcedentity.EventSourcedStreamIn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EventSourcedStreamIn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EventSourcedStreamOut. */
            interface IEventSourcedStreamOut {

                /** EventSourcedStreamOut reply */
                reply?: (akkaserverless.component.eventsourcedentity.IEventSourcedReply|null);

                /** EventSourcedStreamOut failure */
                failure?: (akkaserverless.component.IFailure|null);
            }

            /** Represents an EventSourcedStreamOut. */
            class EventSourcedStreamOut implements IEventSourcedStreamOut {

                /**
                 * Constructs a new EventSourcedStreamOut.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedStreamOut);

                /** EventSourcedStreamOut reply. */
                public reply?: (akkaserverless.component.eventsourcedentity.IEventSourcedReply|null);

                /** EventSourcedStreamOut failure. */
                public failure?: (akkaserverless.component.IFailure|null);

                /** EventSourcedStreamOut message. */
                public message?: ("reply"|"failure");

                /**
                 * Creates a new EventSourcedStreamOut instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EventSourcedStreamOut instance
                 */
                public static create(properties?: akkaserverless.component.eventsourcedentity.IEventSourcedStreamOut): akkaserverless.component.eventsourcedentity.EventSourcedStreamOut;

                /**
                 * Encodes the specified EventSourcedStreamOut message. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedStreamOut.verify|verify} messages.
                 * @param message EventSourcedStreamOut message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.eventsourcedentity.IEventSourcedStreamOut, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EventSourcedStreamOut message, length delimited. Does not implicitly {@link akkaserverless.component.eventsourcedentity.EventSourcedStreamOut.verify|verify} messages.
                 * @param message EventSourcedStreamOut message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.eventsourcedentity.IEventSourcedStreamOut, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EventSourcedStreamOut message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EventSourcedStreamOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.eventsourcedentity.EventSourcedStreamOut;

                /**
                 * Decodes an EventSourcedStreamOut message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EventSourcedStreamOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.eventsourcedentity.EventSourcedStreamOut;

                /**
                 * Verifies an EventSourcedStreamOut message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EventSourcedStreamOut message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EventSourcedStreamOut
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.eventsourcedentity.EventSourcedStreamOut;

                /**
                 * Creates a plain object from an EventSourcedStreamOut message. Also converts values to other types if specified.
                 * @param message EventSourcedStreamOut
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.eventsourcedentity.EventSourcedStreamOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EventSourcedStreamOut to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Represents an EventSourcedEntities */
            class EventSourcedEntities extends $protobuf.rpc.Service {

                /**
                 * Constructs a new EventSourcedEntities service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new EventSourcedEntities service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EventSourcedEntities;

                /**
                 * Calls Handle.
                 * @param request EventSourcedStreamIn message or plain object
                 * @param callback Node-style callback called with the error, if any, and EventSourcedStreamOut
                 */
                public handle(request: akkaserverless.component.eventsourcedentity.IEventSourcedStreamIn, callback: akkaserverless.component.eventsourcedentity.EventSourcedEntities.HandleCallback): void;

                /**
                 * Calls Handle.
                 * @param request EventSourcedStreamIn message or plain object
                 * @returns Promise
                 */
                public handle(request: akkaserverless.component.eventsourcedentity.IEventSourcedStreamIn): Promise<akkaserverless.component.eventsourcedentity.EventSourcedStreamOut>;
            }

            namespace EventSourcedEntities {

                /**
                 * Callback as used by {@link akkaserverless.component.eventsourcedentity.EventSourcedEntities#handle}.
                 * @param error Error, if any
                 * @param [response] EventSourcedStreamOut
                 */
                type HandleCallback = (error: (Error|null), response?: akkaserverless.component.eventsourcedentity.EventSourcedStreamOut) => void;
            }
        }

        /** Namespace valueentity. */
        namespace valueentity {

            /** Represents a ValueEntities */
            class ValueEntities extends $protobuf.rpc.Service {

                /**
                 * Constructs a new ValueEntities service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new ValueEntities service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ValueEntities;

                /**
                 * Calls Handle.
                 * @param request ValueEntityStreamIn message or plain object
                 * @param callback Node-style callback called with the error, if any, and ValueEntityStreamOut
                 */
                public handle(request: akkaserverless.component.valueentity.IValueEntityStreamIn, callback: akkaserverless.component.valueentity.ValueEntities.HandleCallback): void;

                /**
                 * Calls Handle.
                 * @param request ValueEntityStreamIn message or plain object
                 * @returns Promise
                 */
                public handle(request: akkaserverless.component.valueentity.IValueEntityStreamIn): Promise<akkaserverless.component.valueentity.ValueEntityStreamOut>;
            }

            namespace ValueEntities {

                /**
                 * Callback as used by {@link akkaserverless.component.valueentity.ValueEntities#handle}.
                 * @param error Error, if any
                 * @param [response] ValueEntityStreamOut
                 */
                type HandleCallback = (error: (Error|null), response?: akkaserverless.component.valueentity.ValueEntityStreamOut) => void;
            }

            /** Properties of a ValueEntityStreamIn. */
            interface IValueEntityStreamIn {

                /** ValueEntityStreamIn init */
                init?: (akkaserverless.component.valueentity.IValueEntityInit|null);

                /** ValueEntityStreamIn command */
                command?: (akkaserverless.component.entity.ICommand|null);
            }

            /** Represents a ValueEntityStreamIn. */
            class ValueEntityStreamIn implements IValueEntityStreamIn {

                /**
                 * Constructs a new ValueEntityStreamIn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.valueentity.IValueEntityStreamIn);

                /** ValueEntityStreamIn init. */
                public init?: (akkaserverless.component.valueentity.IValueEntityInit|null);

                /** ValueEntityStreamIn command. */
                public command?: (akkaserverless.component.entity.ICommand|null);

                /** ValueEntityStreamIn message. */
                public message?: ("init"|"command");

                /**
                 * Creates a new ValueEntityStreamIn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValueEntityStreamIn instance
                 */
                public static create(properties?: akkaserverless.component.valueentity.IValueEntityStreamIn): akkaserverless.component.valueentity.ValueEntityStreamIn;

                /**
                 * Encodes the specified ValueEntityStreamIn message. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityStreamIn.verify|verify} messages.
                 * @param message ValueEntityStreamIn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.valueentity.IValueEntityStreamIn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ValueEntityStreamIn message, length delimited. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityStreamIn.verify|verify} messages.
                 * @param message ValueEntityStreamIn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.valueentity.IValueEntityStreamIn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ValueEntityStreamIn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ValueEntityStreamIn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.valueentity.ValueEntityStreamIn;

                /**
                 * Decodes a ValueEntityStreamIn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ValueEntityStreamIn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.valueentity.ValueEntityStreamIn;

                /**
                 * Verifies a ValueEntityStreamIn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ValueEntityStreamIn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ValueEntityStreamIn
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.valueentity.ValueEntityStreamIn;

                /**
                 * Creates a plain object from a ValueEntityStreamIn message. Also converts values to other types if specified.
                 * @param message ValueEntityStreamIn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.valueentity.ValueEntityStreamIn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ValueEntityStreamIn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ValueEntityInit. */
            interface IValueEntityInit {

                /** ValueEntityInit serviceName */
                serviceName?: (string|null);

                /** ValueEntityInit entityId */
                entityId?: (string|null);

                /** ValueEntityInit state */
                state?: (akkaserverless.component.valueentity.IValueEntityInitState|null);
            }

            /** Represents a ValueEntityInit. */
            class ValueEntityInit implements IValueEntityInit {

                /**
                 * Constructs a new ValueEntityInit.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.valueentity.IValueEntityInit);

                /** ValueEntityInit serviceName. */
                public serviceName: string;

                /** ValueEntityInit entityId. */
                public entityId: string;

                /** ValueEntityInit state. */
                public state?: (akkaserverless.component.valueentity.IValueEntityInitState|null);

                /**
                 * Creates a new ValueEntityInit instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValueEntityInit instance
                 */
                public static create(properties?: akkaserverless.component.valueentity.IValueEntityInit): akkaserverless.component.valueentity.ValueEntityInit;

                /**
                 * Encodes the specified ValueEntityInit message. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityInit.verify|verify} messages.
                 * @param message ValueEntityInit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.valueentity.IValueEntityInit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ValueEntityInit message, length delimited. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityInit.verify|verify} messages.
                 * @param message ValueEntityInit message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.valueentity.IValueEntityInit, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ValueEntityInit message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ValueEntityInit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.valueentity.ValueEntityInit;

                /**
                 * Decodes a ValueEntityInit message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ValueEntityInit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.valueentity.ValueEntityInit;

                /**
                 * Verifies a ValueEntityInit message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ValueEntityInit message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ValueEntityInit
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.valueentity.ValueEntityInit;

                /**
                 * Creates a plain object from a ValueEntityInit message. Also converts values to other types if specified.
                 * @param message ValueEntityInit
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.valueentity.ValueEntityInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ValueEntityInit to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ValueEntityInitState. */
            interface IValueEntityInitState {

                /** ValueEntityInitState value */
                value?: (google.protobuf.IAny|null);
            }

            /** Represents a ValueEntityInitState. */
            class ValueEntityInitState implements IValueEntityInitState {

                /**
                 * Constructs a new ValueEntityInitState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.valueentity.IValueEntityInitState);

                /** ValueEntityInitState value. */
                public value?: (google.protobuf.IAny|null);

                /**
                 * Creates a new ValueEntityInitState instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValueEntityInitState instance
                 */
                public static create(properties?: akkaserverless.component.valueentity.IValueEntityInitState): akkaserverless.component.valueentity.ValueEntityInitState;

                /**
                 * Encodes the specified ValueEntityInitState message. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityInitState.verify|verify} messages.
                 * @param message ValueEntityInitState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.valueentity.IValueEntityInitState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ValueEntityInitState message, length delimited. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityInitState.verify|verify} messages.
                 * @param message ValueEntityInitState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.valueentity.IValueEntityInitState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ValueEntityInitState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ValueEntityInitState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.valueentity.ValueEntityInitState;

                /**
                 * Decodes a ValueEntityInitState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ValueEntityInitState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.valueentity.ValueEntityInitState;

                /**
                 * Verifies a ValueEntityInitState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ValueEntityInitState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ValueEntityInitState
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.valueentity.ValueEntityInitState;

                /**
                 * Creates a plain object from a ValueEntityInitState message. Also converts values to other types if specified.
                 * @param message ValueEntityInitState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.valueentity.ValueEntityInitState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ValueEntityInitState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ValueEntityStreamOut. */
            interface IValueEntityStreamOut {

                /** ValueEntityStreamOut reply */
                reply?: (akkaserverless.component.valueentity.IValueEntityReply|null);

                /** ValueEntityStreamOut failure */
                failure?: (akkaserverless.component.IFailure|null);
            }

            /** Represents a ValueEntityStreamOut. */
            class ValueEntityStreamOut implements IValueEntityStreamOut {

                /**
                 * Constructs a new ValueEntityStreamOut.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.valueentity.IValueEntityStreamOut);

                /** ValueEntityStreamOut reply. */
                public reply?: (akkaserverless.component.valueentity.IValueEntityReply|null);

                /** ValueEntityStreamOut failure. */
                public failure?: (akkaserverless.component.IFailure|null);

                /** ValueEntityStreamOut message. */
                public message?: ("reply"|"failure");

                /**
                 * Creates a new ValueEntityStreamOut instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValueEntityStreamOut instance
                 */
                public static create(properties?: akkaserverless.component.valueentity.IValueEntityStreamOut): akkaserverless.component.valueentity.ValueEntityStreamOut;

                /**
                 * Encodes the specified ValueEntityStreamOut message. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityStreamOut.verify|verify} messages.
                 * @param message ValueEntityStreamOut message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.valueentity.IValueEntityStreamOut, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ValueEntityStreamOut message, length delimited. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityStreamOut.verify|verify} messages.
                 * @param message ValueEntityStreamOut message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.valueentity.IValueEntityStreamOut, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ValueEntityStreamOut message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ValueEntityStreamOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.valueentity.ValueEntityStreamOut;

                /**
                 * Decodes a ValueEntityStreamOut message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ValueEntityStreamOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.valueentity.ValueEntityStreamOut;

                /**
                 * Verifies a ValueEntityStreamOut message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ValueEntityStreamOut message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ValueEntityStreamOut
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.valueentity.ValueEntityStreamOut;

                /**
                 * Creates a plain object from a ValueEntityStreamOut message. Also converts values to other types if specified.
                 * @param message ValueEntityStreamOut
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.valueentity.ValueEntityStreamOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ValueEntityStreamOut to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ValueEntityReply. */
            interface IValueEntityReply {

                /** ValueEntityReply commandId */
                commandId?: (number|Long|null);

                /** ValueEntityReply clientAction */
                clientAction?: (akkaserverless.component.IClientAction|null);

                /** ValueEntityReply sideEffects */
                sideEffects?: (akkaserverless.component.ISideEffect[]|null);

                /** ValueEntityReply stateAction */
                stateAction?: (akkaserverless.component.valueentity.IValueEntityAction|null);
            }

            /** Represents a ValueEntityReply. */
            class ValueEntityReply implements IValueEntityReply {

                /**
                 * Constructs a new ValueEntityReply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.valueentity.IValueEntityReply);

                /** ValueEntityReply commandId. */
                public commandId: (number|Long);

                /** ValueEntityReply clientAction. */
                public clientAction?: (akkaserverless.component.IClientAction|null);

                /** ValueEntityReply sideEffects. */
                public sideEffects: akkaserverless.component.ISideEffect[];

                /** ValueEntityReply stateAction. */
                public stateAction?: (akkaserverless.component.valueentity.IValueEntityAction|null);

                /**
                 * Creates a new ValueEntityReply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValueEntityReply instance
                 */
                public static create(properties?: akkaserverless.component.valueentity.IValueEntityReply): akkaserverless.component.valueentity.ValueEntityReply;

                /**
                 * Encodes the specified ValueEntityReply message. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityReply.verify|verify} messages.
                 * @param message ValueEntityReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.valueentity.IValueEntityReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ValueEntityReply message, length delimited. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityReply.verify|verify} messages.
                 * @param message ValueEntityReply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.valueentity.IValueEntityReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ValueEntityReply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ValueEntityReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.valueentity.ValueEntityReply;

                /**
                 * Decodes a ValueEntityReply message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ValueEntityReply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.valueentity.ValueEntityReply;

                /**
                 * Verifies a ValueEntityReply message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ValueEntityReply message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ValueEntityReply
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.valueentity.ValueEntityReply;

                /**
                 * Creates a plain object from a ValueEntityReply message. Also converts values to other types if specified.
                 * @param message ValueEntityReply
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.valueentity.ValueEntityReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ValueEntityReply to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ValueEntityAction. */
            interface IValueEntityAction {

                /** ValueEntityAction update */
                update?: (akkaserverless.component.valueentity.IValueEntityUpdate|null);

                /** ValueEntityAction delete */
                "delete"?: (akkaserverless.component.valueentity.IValueEntityDelete|null);
            }

            /** Represents a ValueEntityAction. */
            class ValueEntityAction implements IValueEntityAction {

                /**
                 * Constructs a new ValueEntityAction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.valueentity.IValueEntityAction);

                /** ValueEntityAction update. */
                public update?: (akkaserverless.component.valueentity.IValueEntityUpdate|null);

                /** ValueEntityAction delete. */
                public delete?: (akkaserverless.component.valueentity.IValueEntityDelete|null);

                /** ValueEntityAction action. */
                public action?: ("update"|"delete");

                /**
                 * Creates a new ValueEntityAction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValueEntityAction instance
                 */
                public static create(properties?: akkaserverless.component.valueentity.IValueEntityAction): akkaserverless.component.valueentity.ValueEntityAction;

                /**
                 * Encodes the specified ValueEntityAction message. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityAction.verify|verify} messages.
                 * @param message ValueEntityAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.valueentity.IValueEntityAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ValueEntityAction message, length delimited. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityAction.verify|verify} messages.
                 * @param message ValueEntityAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.valueentity.IValueEntityAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ValueEntityAction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ValueEntityAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.valueentity.ValueEntityAction;

                /**
                 * Decodes a ValueEntityAction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ValueEntityAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.valueentity.ValueEntityAction;

                /**
                 * Verifies a ValueEntityAction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ValueEntityAction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ValueEntityAction
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.valueentity.ValueEntityAction;

                /**
                 * Creates a plain object from a ValueEntityAction message. Also converts values to other types if specified.
                 * @param message ValueEntityAction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.valueentity.ValueEntityAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ValueEntityAction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ValueEntityUpdate. */
            interface IValueEntityUpdate {

                /** ValueEntityUpdate value */
                value?: (google.protobuf.IAny|null);
            }

            /** Represents a ValueEntityUpdate. */
            class ValueEntityUpdate implements IValueEntityUpdate {

                /**
                 * Constructs a new ValueEntityUpdate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.valueentity.IValueEntityUpdate);

                /** ValueEntityUpdate value. */
                public value?: (google.protobuf.IAny|null);

                /**
                 * Creates a new ValueEntityUpdate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValueEntityUpdate instance
                 */
                public static create(properties?: akkaserverless.component.valueentity.IValueEntityUpdate): akkaserverless.component.valueentity.ValueEntityUpdate;

                /**
                 * Encodes the specified ValueEntityUpdate message. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityUpdate.verify|verify} messages.
                 * @param message ValueEntityUpdate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.valueentity.IValueEntityUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ValueEntityUpdate message, length delimited. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityUpdate.verify|verify} messages.
                 * @param message ValueEntityUpdate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.valueentity.IValueEntityUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ValueEntityUpdate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ValueEntityUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.valueentity.ValueEntityUpdate;

                /**
                 * Decodes a ValueEntityUpdate message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ValueEntityUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.valueentity.ValueEntityUpdate;

                /**
                 * Verifies a ValueEntityUpdate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ValueEntityUpdate message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ValueEntityUpdate
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.valueentity.ValueEntityUpdate;

                /**
                 * Creates a plain object from a ValueEntityUpdate message. Also converts values to other types if specified.
                 * @param message ValueEntityUpdate
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.valueentity.ValueEntityUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ValueEntityUpdate to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ValueEntityDelete. */
            interface IValueEntityDelete {
            }

            /** Represents a ValueEntityDelete. */
            class ValueEntityDelete implements IValueEntityDelete {

                /**
                 * Constructs a new ValueEntityDelete.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.valueentity.IValueEntityDelete);

                /**
                 * Creates a new ValueEntityDelete instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValueEntityDelete instance
                 */
                public static create(properties?: akkaserverless.component.valueentity.IValueEntityDelete): akkaserverless.component.valueentity.ValueEntityDelete;

                /**
                 * Encodes the specified ValueEntityDelete message. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityDelete.verify|verify} messages.
                 * @param message ValueEntityDelete message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.valueentity.IValueEntityDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ValueEntityDelete message, length delimited. Does not implicitly {@link akkaserverless.component.valueentity.ValueEntityDelete.verify|verify} messages.
                 * @param message ValueEntityDelete message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.valueentity.IValueEntityDelete, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ValueEntityDelete message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ValueEntityDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.valueentity.ValueEntityDelete;

                /**
                 * Decodes a ValueEntityDelete message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ValueEntityDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.valueentity.ValueEntityDelete;

                /**
                 * Verifies a ValueEntityDelete message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ValueEntityDelete message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ValueEntityDelete
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.valueentity.ValueEntityDelete;

                /**
                 * Creates a plain object from a ValueEntityDelete message. Also converts values to other types if specified.
                 * @param message ValueEntityDelete
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.valueentity.ValueEntityDelete, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ValueEntityDelete to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace view. */
        namespace view {

            /** Represents a Views */
            class Views extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Views service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Views service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Views;

                /**
                 * Calls Handle.
                 * @param request ViewStreamIn message or plain object
                 * @param callback Node-style callback called with the error, if any, and ViewStreamOut
                 */
                public handle(request: akkaserverless.component.view.IViewStreamIn, callback: akkaserverless.component.view.Views.HandleCallback): void;

                /**
                 * Calls Handle.
                 * @param request ViewStreamIn message or plain object
                 * @returns Promise
                 */
                public handle(request: akkaserverless.component.view.IViewStreamIn): Promise<akkaserverless.component.view.ViewStreamOut>;
            }

            namespace Views {

                /**
                 * Callback as used by {@link akkaserverless.component.view.Views#handle}.
                 * @param error Error, if any
                 * @param [response] ViewStreamOut
                 */
                type HandleCallback = (error: (Error|null), response?: akkaserverless.component.view.ViewStreamOut) => void;
            }

            /** Properties of a ViewStreamIn. */
            interface IViewStreamIn {

                /** ViewStreamIn receive */
                receive?: (akkaserverless.component.view.IReceiveEvent|null);
            }

            /** Represents a ViewStreamIn. */
            class ViewStreamIn implements IViewStreamIn {

                /**
                 * Constructs a new ViewStreamIn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.view.IViewStreamIn);

                /** ViewStreamIn receive. */
                public receive?: (akkaserverless.component.view.IReceiveEvent|null);

                /** ViewStreamIn message. */
                public message?: "receive";

                /**
                 * Creates a new ViewStreamIn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ViewStreamIn instance
                 */
                public static create(properties?: akkaserverless.component.view.IViewStreamIn): akkaserverless.component.view.ViewStreamIn;

                /**
                 * Encodes the specified ViewStreamIn message. Does not implicitly {@link akkaserverless.component.view.ViewStreamIn.verify|verify} messages.
                 * @param message ViewStreamIn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.view.IViewStreamIn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ViewStreamIn message, length delimited. Does not implicitly {@link akkaserverless.component.view.ViewStreamIn.verify|verify} messages.
                 * @param message ViewStreamIn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.view.IViewStreamIn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ViewStreamIn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ViewStreamIn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.view.ViewStreamIn;

                /**
                 * Decodes a ViewStreamIn message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ViewStreamIn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.view.ViewStreamIn;

                /**
                 * Verifies a ViewStreamIn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ViewStreamIn message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ViewStreamIn
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.view.ViewStreamIn;

                /**
                 * Creates a plain object from a ViewStreamIn message. Also converts values to other types if specified.
                 * @param message ViewStreamIn
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.view.ViewStreamIn, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ViewStreamIn to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReceiveEvent. */
            interface IReceiveEvent {

                /** ReceiveEvent serviceName */
                serviceName?: (string|null);

                /** ReceiveEvent commandName */
                commandName?: (string|null);

                /** ReceiveEvent payload */
                payload?: (google.protobuf.IAny|null);

                /** ReceiveEvent metadata */
                metadata?: (akkaserverless.component.IMetadata|null);

                /** ReceiveEvent initialTable */
                initialTable?: (string|null);

                /** ReceiveEvent key */
                key?: (akkaserverless.component.view.IKey|null);

                /** ReceiveEvent bySubjectLookupResult */
                bySubjectLookupResult?: (akkaserverless.component.view.IRow|null);
            }

            /** Represents a ReceiveEvent. */
            class ReceiveEvent implements IReceiveEvent {

                /**
                 * Constructs a new ReceiveEvent.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.view.IReceiveEvent);

                /** ReceiveEvent serviceName. */
                public serviceName: string;

                /** ReceiveEvent commandName. */
                public commandName: string;

                /** ReceiveEvent payload. */
                public payload?: (google.protobuf.IAny|null);

                /** ReceiveEvent metadata. */
                public metadata?: (akkaserverless.component.IMetadata|null);

                /** ReceiveEvent initialTable. */
                public initialTable: string;

                /** ReceiveEvent key. */
                public key?: (akkaserverless.component.view.IKey|null);

                /** ReceiveEvent bySubjectLookupResult. */
                public bySubjectLookupResult?: (akkaserverless.component.view.IRow|null);

                /**
                 * Creates a new ReceiveEvent instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReceiveEvent instance
                 */
                public static create(properties?: akkaserverless.component.view.IReceiveEvent): akkaserverless.component.view.ReceiveEvent;

                /**
                 * Encodes the specified ReceiveEvent message. Does not implicitly {@link akkaserverless.component.view.ReceiveEvent.verify|verify} messages.
                 * @param message ReceiveEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.view.IReceiveEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReceiveEvent message, length delimited. Does not implicitly {@link akkaserverless.component.view.ReceiveEvent.verify|verify} messages.
                 * @param message ReceiveEvent message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.view.IReceiveEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReceiveEvent message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReceiveEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.view.ReceiveEvent;

                /**
                 * Decodes a ReceiveEvent message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReceiveEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.view.ReceiveEvent;

                /**
                 * Verifies a ReceiveEvent message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReceiveEvent message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReceiveEvent
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.view.ReceiveEvent;

                /**
                 * Creates a plain object from a ReceiveEvent message. Also converts values to other types if specified.
                 * @param message ReceiveEvent
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.view.ReceiveEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReceiveEvent to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ViewStreamOut. */
            interface IViewStreamOut {

                /** ViewStreamOut upsert */
                upsert?: (akkaserverless.component.view.IUpsert|null);
            }

            /** Represents a ViewStreamOut. */
            class ViewStreamOut implements IViewStreamOut {

                /**
                 * Constructs a new ViewStreamOut.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.view.IViewStreamOut);

                /** ViewStreamOut upsert. */
                public upsert?: (akkaserverless.component.view.IUpsert|null);

                /** ViewStreamOut message. */
                public message?: "upsert";

                /**
                 * Creates a new ViewStreamOut instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ViewStreamOut instance
                 */
                public static create(properties?: akkaserverless.component.view.IViewStreamOut): akkaserverless.component.view.ViewStreamOut;

                /**
                 * Encodes the specified ViewStreamOut message. Does not implicitly {@link akkaserverless.component.view.ViewStreamOut.verify|verify} messages.
                 * @param message ViewStreamOut message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.view.IViewStreamOut, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ViewStreamOut message, length delimited. Does not implicitly {@link akkaserverless.component.view.ViewStreamOut.verify|verify} messages.
                 * @param message ViewStreamOut message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.view.IViewStreamOut, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ViewStreamOut message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ViewStreamOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.view.ViewStreamOut;

                /**
                 * Decodes a ViewStreamOut message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ViewStreamOut
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.view.ViewStreamOut;

                /**
                 * Verifies a ViewStreamOut message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ViewStreamOut message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ViewStreamOut
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.view.ViewStreamOut;

                /**
                 * Creates a plain object from a ViewStreamOut message. Also converts values to other types if specified.
                 * @param message ViewStreamOut
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.view.ViewStreamOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ViewStreamOut to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Upsert. */
            interface IUpsert {

                /** Upsert row */
                row?: (akkaserverless.component.view.IRow|null);
            }

            /** Represents an Upsert. */
            class Upsert implements IUpsert {

                /**
                 * Constructs a new Upsert.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.view.IUpsert);

                /** Upsert row. */
                public row?: (akkaserverless.component.view.IRow|null);

                /**
                 * Creates a new Upsert instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Upsert instance
                 */
                public static create(properties?: akkaserverless.component.view.IUpsert): akkaserverless.component.view.Upsert;

                /**
                 * Encodes the specified Upsert message. Does not implicitly {@link akkaserverless.component.view.Upsert.verify|verify} messages.
                 * @param message Upsert message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.view.IUpsert, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Upsert message, length delimited. Does not implicitly {@link akkaserverless.component.view.Upsert.verify|verify} messages.
                 * @param message Upsert message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.view.IUpsert, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Upsert message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Upsert
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.view.Upsert;

                /**
                 * Decodes an Upsert message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Upsert
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.view.Upsert;

                /**
                 * Verifies an Upsert message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Upsert message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Upsert
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.view.Upsert;

                /**
                 * Creates a plain object from an Upsert message. Also converts values to other types if specified.
                 * @param message Upsert
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.view.Upsert, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Upsert to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Key. */
            interface IKey {

                /** Key parts */
                parts?: (akkaserverless.component.view.IKeyPart[]|null);
            }

            /** Represents a Key. */
            class Key implements IKey {

                /**
                 * Constructs a new Key.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.view.IKey);

                /** Key parts. */
                public parts: akkaserverless.component.view.IKeyPart[];

                /**
                 * Creates a new Key instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Key instance
                 */
                public static create(properties?: akkaserverless.component.view.IKey): akkaserverless.component.view.Key;

                /**
                 * Encodes the specified Key message. Does not implicitly {@link akkaserverless.component.view.Key.verify|verify} messages.
                 * @param message Key message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.view.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Key message, length delimited. Does not implicitly {@link akkaserverless.component.view.Key.verify|verify} messages.
                 * @param message Key message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.view.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Key message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Key
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.view.Key;

                /**
                 * Decodes a Key message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Key
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.view.Key;

                /**
                 * Verifies a Key message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Key message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Key
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.view.Key;

                /**
                 * Creates a plain object from a Key message. Also converts values to other types if specified.
                 * @param message Key
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.view.Key, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Key to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a KeyPart. */
            interface IKeyPart {

                /** KeyPart stringPart */
                stringPart?: (string|null);

                /** KeyPart bytesPart */
                bytesPart?: (Uint8Array|null);

                /** KeyPart integerPart */
                integerPart?: (number|Long|null);

                /** KeyPart floatPart */
                floatPart?: (number|null);
            }

            /** Represents a KeyPart. */
            class KeyPart implements IKeyPart {

                /**
                 * Constructs a new KeyPart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.view.IKeyPart);

                /** KeyPart stringPart. */
                public stringPart: string;

                /** KeyPart bytesPart. */
                public bytesPart: Uint8Array;

                /** KeyPart integerPart. */
                public integerPart: (number|Long);

                /** KeyPart floatPart. */
                public floatPart: number;

                /** KeyPart part. */
                public part?: ("stringPart"|"bytesPart"|"integerPart"|"floatPart");

                /**
                 * Creates a new KeyPart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KeyPart instance
                 */
                public static create(properties?: akkaserverless.component.view.IKeyPart): akkaserverless.component.view.KeyPart;

                /**
                 * Encodes the specified KeyPart message. Does not implicitly {@link akkaserverless.component.view.KeyPart.verify|verify} messages.
                 * @param message KeyPart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.view.IKeyPart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KeyPart message, length delimited. Does not implicitly {@link akkaserverless.component.view.KeyPart.verify|verify} messages.
                 * @param message KeyPart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.view.IKeyPart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KeyPart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KeyPart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.view.KeyPart;

                /**
                 * Decodes a KeyPart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KeyPart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.view.KeyPart;

                /**
                 * Verifies a KeyPart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KeyPart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KeyPart
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.view.KeyPart;

                /**
                 * Creates a plain object from a KeyPart message. Also converts values to other types if specified.
                 * @param message KeyPart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.view.KeyPart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KeyPart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Row. */
            interface IRow {

                /** Row table */
                table?: (string|null);

                /** Row key */
                key?: (akkaserverless.component.view.IKey|null);

                /** Row value */
                value?: (google.protobuf.IAny|null);
            }

            /** Represents a Row. */
            class Row implements IRow {

                /**
                 * Constructs a new Row.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: akkaserverless.component.view.IRow);

                /** Row table. */
                public table: string;

                /** Row key. */
                public key?: (akkaserverless.component.view.IKey|null);

                /** Row value. */
                public value?: (google.protobuf.IAny|null);

                /**
                 * Creates a new Row instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Row instance
                 */
                public static create(properties?: akkaserverless.component.view.IRow): akkaserverless.component.view.Row;

                /**
                 * Encodes the specified Row message. Does not implicitly {@link akkaserverless.component.view.Row.verify|verify} messages.
                 * @param message Row message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: akkaserverless.component.view.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Row message, length delimited. Does not implicitly {@link akkaserverless.component.view.Row.verify|verify} messages.
                 * @param message Row message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: akkaserverless.component.view.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Row message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Row
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): akkaserverless.component.view.Row;

                /**
                 * Decodes a Row message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Row
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): akkaserverless.component.view.Row;

                /**
                 * Verifies a Row message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Row message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Row
                 */
                public static fromObject(object: { [k: string]: any }): akkaserverless.component.view.Row;

                /**
                 * Creates a plain object from a Row message. Also converts values to other types if specified.
                 * @param message Row
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: akkaserverless.component.view.Row, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Row to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .akkaserverless.file */
            ".akkaserverless.file"?: (akkaserverless.IFileOptions|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .akkaserverless.field */
            ".akkaserverless.field"?: (akkaserverless.IFieldOptions|null);

            /** FieldOptions .akkaserverless.legacyEntityKey */
            ".akkaserverless.legacyEntityKey"?: (boolean|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .akkaserverless.service */
            ".akkaserverless.service"?: (akkaserverless.IServiceOptions|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .akkaserverless.method */
            ".akkaserverless.method"?: (akkaserverless.IMethodOptions|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
