
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model DriverApplication
 * 
 */
export type DriverApplication = $Result.DefaultSelection<Prisma.$DriverApplicationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  COMPANY: 'COMPANY',
  DRIVER: 'DRIVER',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ShipmentStatus: {
  PENDING: 'PENDING',
  PENDING_SUPERADMIN_REVIEW: 'PENDING_SUPERADMIN_REVIEW',
  PENDING_FOR_PAY: 'PENDING_FOR_PAY',
  AVAILABLE_FOR_ASSIGNMENT: 'AVAILABLE_FOR_ASSIGNMENT',
  ASSIGNED: 'ASSIGNED',
  IN_TRANSIT: 'IN_TRANSIT',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
  REJECTED: 'REJECTED'
};

export type ShipmentStatus = (typeof ShipmentStatus)[keyof typeof ShipmentStatus]


export const ApprovalStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ShipmentStatus = $Enums.ShipmentStatus

export const ShipmentStatus: typeof $Enums.ShipmentStatus

export type ApprovalStatus = $Enums.ApprovalStatus

export const ApprovalStatus: typeof $Enums.ApprovalStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driverApplication`: Exposes CRUD operations for the **DriverApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DriverApplications
    * const driverApplications = await prisma.driverApplication.findMany()
    * ```
    */
  get driverApplication(): Prisma.DriverApplicationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Shipment: 'Shipment',
    Agent: 'Agent',
    Company: 'Company',
    DriverApplication: 'DriverApplication'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "shipment" | "agent" | "company" | "driverApplication"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      DriverApplication: {
        payload: Prisma.$DriverApplicationPayload<ExtArgs>
        fields: Prisma.DriverApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverApplicationPayload>
          }
          findFirst: {
            args: Prisma.DriverApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverApplicationPayload>
          }
          findMany: {
            args: Prisma.DriverApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverApplicationPayload>[]
          }
          create: {
            args: Prisma.DriverApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverApplicationPayload>
          }
          createMany: {
            args: Prisma.DriverApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverApplicationPayload>[]
          }
          delete: {
            args: Prisma.DriverApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverApplicationPayload>
          }
          update: {
            args: Prisma.DriverApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverApplicationPayload>
          }
          deleteMany: {
            args: Prisma.DriverApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverApplicationPayload>[]
          }
          upsert: {
            args: Prisma.DriverApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverApplicationPayload>
          }
          aggregate: {
            args: Prisma.DriverApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriverApplication>
          }
          groupBy: {
            args: Prisma.DriverApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<DriverApplicationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    shipment?: ShipmentOmit
    agent?: AgentOmit
    company?: CompanyOmit
    driverApplication?: DriverApplicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    managedCompanies: number
    createdCompanies: number
    assignedCompanies: number
    customerShipments: number
    driverShipments: number
    createdShipments: number
    assignedShipments: number
    priceReviewedShipments: number
    driverApplications: number
    reviewedApplications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managedCompanies?: boolean | UserCountOutputTypeCountManagedCompaniesArgs
    createdCompanies?: boolean | UserCountOutputTypeCountCreatedCompaniesArgs
    assignedCompanies?: boolean | UserCountOutputTypeCountAssignedCompaniesArgs
    customerShipments?: boolean | UserCountOutputTypeCountCustomerShipmentsArgs
    driverShipments?: boolean | UserCountOutputTypeCountDriverShipmentsArgs
    createdShipments?: boolean | UserCountOutputTypeCountCreatedShipmentsArgs
    assignedShipments?: boolean | UserCountOutputTypeCountAssignedShipmentsArgs
    priceReviewedShipments?: boolean | UserCountOutputTypeCountPriceReviewedShipmentsArgs
    driverApplications?: boolean | UserCountOutputTypeCountDriverApplicationsArgs
    reviewedApplications?: boolean | UserCountOutputTypeCountReviewedApplicationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagedCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDriverShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPriceReviewedShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDriverApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewedApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverApplicationWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    shipments: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    shipments?: boolean | CompanyCountOutputTypeCountShipmentsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    nit: string | null
    address: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    companyId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    nit: string | null
    address: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    companyId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    nit: number
    address: number
    phone: number
    password: number
    role: number
    isActive: number
    createdAt: number
    companyId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    nit?: true
    address?: true
    phone?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    companyId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    nit?: true
    address?: true
    phone?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    companyId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    nit?: true
    address?: true
    phone?: true
    password?: true
    role?: true
    isActive?: true
    createdAt?: true
    companyId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    nit: string | null
    address: string | null
    phone: string | null
    password: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    companyId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    nit?: boolean
    address?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    companyId?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
    managedCompanies?: boolean | User$managedCompaniesArgs<ExtArgs>
    createdCompanies?: boolean | User$createdCompaniesArgs<ExtArgs>
    assignedCompanies?: boolean | User$assignedCompaniesArgs<ExtArgs>
    customerShipments?: boolean | User$customerShipmentsArgs<ExtArgs>
    driverShipments?: boolean | User$driverShipmentsArgs<ExtArgs>
    createdShipments?: boolean | User$createdShipmentsArgs<ExtArgs>
    assignedShipments?: boolean | User$assignedShipmentsArgs<ExtArgs>
    priceReviewedShipments?: boolean | User$priceReviewedShipmentsArgs<ExtArgs>
    driverApplications?: boolean | User$driverApplicationsArgs<ExtArgs>
    reviewedApplications?: boolean | User$reviewedApplicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    nit?: boolean
    address?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    companyId?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    nit?: boolean
    address?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    companyId?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    nit?: boolean
    address?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    companyId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "nit" | "address" | "phone" | "password" | "role" | "isActive" | "createdAt" | "companyId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
    managedCompanies?: boolean | User$managedCompaniesArgs<ExtArgs>
    createdCompanies?: boolean | User$createdCompaniesArgs<ExtArgs>
    assignedCompanies?: boolean | User$assignedCompaniesArgs<ExtArgs>
    customerShipments?: boolean | User$customerShipmentsArgs<ExtArgs>
    driverShipments?: boolean | User$driverShipmentsArgs<ExtArgs>
    createdShipments?: boolean | User$createdShipmentsArgs<ExtArgs>
    assignedShipments?: boolean | User$assignedShipmentsArgs<ExtArgs>
    priceReviewedShipments?: boolean | User$priceReviewedShipmentsArgs<ExtArgs>
    driverApplications?: boolean | User$driverApplicationsArgs<ExtArgs>
    reviewedApplications?: boolean | User$reviewedApplicationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      managedCompanies: Prisma.$CompanyPayload<ExtArgs>[]
      createdCompanies: Prisma.$CompanyPayload<ExtArgs>[]
      assignedCompanies: Prisma.$CompanyPayload<ExtArgs>[]
      customerShipments: Prisma.$ShipmentPayload<ExtArgs>[]
      driverShipments: Prisma.$ShipmentPayload<ExtArgs>[]
      createdShipments: Prisma.$ShipmentPayload<ExtArgs>[]
      assignedShipments: Prisma.$ShipmentPayload<ExtArgs>[]
      priceReviewedShipments: Prisma.$ShipmentPayload<ExtArgs>[]
      driverApplications: Prisma.$DriverApplicationPayload<ExtArgs>[]
      reviewedApplications: Prisma.$DriverApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      nit: string | null
      address: string | null
      phone: string | null
      password: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      companyId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    managedCompanies<T extends User$managedCompaniesArgs<ExtArgs> = {}>(args?: Subset<T, User$managedCompaniesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdCompanies<T extends User$createdCompaniesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCompaniesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedCompanies<T extends User$assignedCompaniesArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedCompaniesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customerShipments<T extends User$customerShipmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$customerShipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    driverShipments<T extends User$driverShipmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$driverShipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdShipments<T extends User$createdShipmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdShipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedShipments<T extends User$assignedShipmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedShipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceReviewedShipments<T extends User$priceReviewedShipmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$priceReviewedShipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    driverApplications<T extends User$driverApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$driverApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewedApplications<T extends User$reviewedApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewedApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly nit: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly companyId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User.managedCompanies
   */
  export type User$managedCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * User.createdCompanies
   */
  export type User$createdCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * User.assignedCompanies
   */
  export type User$assignedCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * User.customerShipments
   */
  export type User$customerShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.driverShipments
   */
  export type User$driverShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.createdShipments
   */
  export type User$createdShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.assignedShipments
   */
  export type User$assignedShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.priceReviewedShipments
   */
  export type User$priceReviewedShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.driverApplications
   */
  export type User$driverApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
    where?: DriverApplicationWhereInput
    orderBy?: DriverApplicationOrderByWithRelationInput | DriverApplicationOrderByWithRelationInput[]
    cursor?: DriverApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverApplicationScalarFieldEnum | DriverApplicationScalarFieldEnum[]
  }

  /**
   * User.reviewedApplications
   */
  export type User$reviewedApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
    where?: DriverApplicationWhereInput
    orderBy?: DriverApplicationOrderByWithRelationInput | DriverApplicationOrderByWithRelationInput[]
    cursor?: DriverApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverApplicationScalarFieldEnum | DriverApplicationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentAvgAggregateOutputType = {
    id: number | null
    weight: number | null
    senderId: number | null
    driverId: number | null
    companyId: number | null
    createdById: number | null
    assignedById: number | null
    proposedPrice: Decimal | null
    approvedPrice: Decimal | null
    priceReviewedById: number | null
  }

  export type ShipmentSumAggregateOutputType = {
    id: number | null
    weight: number | null
    senderId: number | null
    driverId: number | null
    companyId: number | null
    createdById: number | null
    assignedById: number | null
    proposedPrice: Decimal | null
    approvedPrice: Decimal | null
    priceReviewedById: number | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: number | null
    cargoType: string | null
    weight: number | null
    dimensions: string | null
    origin: string | null
    destination: string | null
    timeline: string | null
    status: $Enums.ShipmentStatus | null
    senderId: number | null
    driverId: number | null
    companyId: number | null
    createdById: number | null
    assignedById: number | null
    proposedPrice: Decimal | null
    approvedPrice: Decimal | null
    priceReviewedById: number | null
    priceReviewedAt: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: number | null
    cargoType: string | null
    weight: number | null
    dimensions: string | null
    origin: string | null
    destination: string | null
    timeline: string | null
    status: $Enums.ShipmentStatus | null
    senderId: number | null
    driverId: number | null
    companyId: number | null
    createdById: number | null
    assignedById: number | null
    proposedPrice: Decimal | null
    approvedPrice: Decimal | null
    priceReviewedById: number | null
    priceReviewedAt: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    cargoType: number
    weight: number
    dimensions: number
    origin: number
    destination: number
    timeline: number
    status: number
    senderId: number
    driverId: number
    companyId: number
    createdById: number
    assignedById: number
    proposedPrice: number
    approvedPrice: number
    priceReviewedById: number
    priceReviewedAt: number
    paymentStatus: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShipmentAvgAggregateInputType = {
    id?: true
    weight?: true
    senderId?: true
    driverId?: true
    companyId?: true
    createdById?: true
    assignedById?: true
    proposedPrice?: true
    approvedPrice?: true
    priceReviewedById?: true
  }

  export type ShipmentSumAggregateInputType = {
    id?: true
    weight?: true
    senderId?: true
    driverId?: true
    companyId?: true
    createdById?: true
    assignedById?: true
    proposedPrice?: true
    approvedPrice?: true
    priceReviewedById?: true
  }

  export type ShipmentMinAggregateInputType = {
    id?: true
    cargoType?: true
    weight?: true
    dimensions?: true
    origin?: true
    destination?: true
    timeline?: true
    status?: true
    senderId?: true
    driverId?: true
    companyId?: true
    createdById?: true
    assignedById?: true
    proposedPrice?: true
    approvedPrice?: true
    priceReviewedById?: true
    priceReviewedAt?: true
    paymentStatus?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    cargoType?: true
    weight?: true
    dimensions?: true
    origin?: true
    destination?: true
    timeline?: true
    status?: true
    senderId?: true
    driverId?: true
    companyId?: true
    createdById?: true
    assignedById?: true
    proposedPrice?: true
    approvedPrice?: true
    priceReviewedById?: true
    priceReviewedAt?: true
    paymentStatus?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    cargoType?: true
    weight?: true
    dimensions?: true
    origin?: true
    destination?: true
    timeline?: true
    status?: true
    senderId?: true
    driverId?: true
    companyId?: true
    createdById?: true
    assignedById?: true
    proposedPrice?: true
    approvedPrice?: true
    priceReviewedById?: true
    priceReviewedAt?: true
    paymentStatus?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _avg?: ShipmentAvgAggregateInputType
    _sum?: ShipmentSumAggregateInputType
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: number
    cargoType: string
    weight: number
    dimensions: string | null
    origin: string
    destination: string
    timeline: string
    status: $Enums.ShipmentStatus
    senderId: number
    driverId: number | null
    companyId: number | null
    createdById: number | null
    assignedById: number | null
    proposedPrice: Decimal | null
    approvedPrice: Decimal | null
    priceReviewedById: number | null
    priceReviewedAt: Date | null
    paymentStatus: $Enums.PaymentStatus
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargoType?: boolean
    weight?: boolean
    dimensions?: boolean
    origin?: boolean
    destination?: boolean
    timeline?: boolean
    status?: boolean
    senderId?: boolean
    driverId?: boolean
    companyId?: boolean
    createdById?: boolean
    assignedById?: boolean
    proposedPrice?: boolean
    approvedPrice?: boolean
    priceReviewedById?: boolean
    priceReviewedAt?: boolean
    paymentStatus?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | Shipment$driverArgs<ExtArgs>
    company?: boolean | Shipment$companyArgs<ExtArgs>
    createdBy?: boolean | Shipment$createdByArgs<ExtArgs>
    assignedBy?: boolean | Shipment$assignedByArgs<ExtArgs>
    priceReviewedBy?: boolean | Shipment$priceReviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargoType?: boolean
    weight?: boolean
    dimensions?: boolean
    origin?: boolean
    destination?: boolean
    timeline?: boolean
    status?: boolean
    senderId?: boolean
    driverId?: boolean
    companyId?: boolean
    createdById?: boolean
    assignedById?: boolean
    proposedPrice?: boolean
    approvedPrice?: boolean
    priceReviewedById?: boolean
    priceReviewedAt?: boolean
    paymentStatus?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | Shipment$driverArgs<ExtArgs>
    company?: boolean | Shipment$companyArgs<ExtArgs>
    createdBy?: boolean | Shipment$createdByArgs<ExtArgs>
    assignedBy?: boolean | Shipment$assignedByArgs<ExtArgs>
    priceReviewedBy?: boolean | Shipment$priceReviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargoType?: boolean
    weight?: boolean
    dimensions?: boolean
    origin?: boolean
    destination?: boolean
    timeline?: boolean
    status?: boolean
    senderId?: boolean
    driverId?: boolean
    companyId?: boolean
    createdById?: boolean
    assignedById?: boolean
    proposedPrice?: boolean
    approvedPrice?: boolean
    priceReviewedById?: boolean
    priceReviewedAt?: boolean
    paymentStatus?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | Shipment$driverArgs<ExtArgs>
    company?: boolean | Shipment$companyArgs<ExtArgs>
    createdBy?: boolean | Shipment$createdByArgs<ExtArgs>
    assignedBy?: boolean | Shipment$assignedByArgs<ExtArgs>
    priceReviewedBy?: boolean | Shipment$priceReviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectScalar = {
    id?: boolean
    cargoType?: boolean
    weight?: boolean
    dimensions?: boolean
    origin?: boolean
    destination?: boolean
    timeline?: boolean
    status?: boolean
    senderId?: boolean
    driverId?: boolean
    companyId?: boolean
    createdById?: boolean
    assignedById?: boolean
    proposedPrice?: boolean
    approvedPrice?: boolean
    priceReviewedById?: boolean
    priceReviewedAt?: boolean
    paymentStatus?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cargoType" | "weight" | "dimensions" | "origin" | "destination" | "timeline" | "status" | "senderId" | "driverId" | "companyId" | "createdById" | "assignedById" | "proposedPrice" | "approvedPrice" | "priceReviewedById" | "priceReviewedAt" | "paymentStatus" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["shipment"]>
  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | Shipment$driverArgs<ExtArgs>
    company?: boolean | Shipment$companyArgs<ExtArgs>
    createdBy?: boolean | Shipment$createdByArgs<ExtArgs>
    assignedBy?: boolean | Shipment$assignedByArgs<ExtArgs>
    priceReviewedBy?: boolean | Shipment$priceReviewedByArgs<ExtArgs>
  }
  export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | Shipment$driverArgs<ExtArgs>
    company?: boolean | Shipment$companyArgs<ExtArgs>
    createdBy?: boolean | Shipment$createdByArgs<ExtArgs>
    assignedBy?: boolean | Shipment$assignedByArgs<ExtArgs>
    priceReviewedBy?: boolean | Shipment$priceReviewedByArgs<ExtArgs>
  }
  export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | Shipment$driverArgs<ExtArgs>
    company?: boolean | Shipment$companyArgs<ExtArgs>
    createdBy?: boolean | Shipment$createdByArgs<ExtArgs>
    assignedBy?: boolean | Shipment$assignedByArgs<ExtArgs>
    priceReviewedBy?: boolean | Shipment$priceReviewedByArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      driver: Prisma.$UserPayload<ExtArgs> | null
      company: Prisma.$CompanyPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      assignedBy: Prisma.$UserPayload<ExtArgs> | null
      priceReviewedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cargoType: string
      weight: number
      dimensions: string | null
      origin: string
      destination: string
      timeline: string
      status: $Enums.ShipmentStatus
      senderId: number
      driverId: number | null
      companyId: number | null
      createdById: number | null
      assignedById: number | null
      proposedPrice: Prisma.Decimal | null
      approvedPrice: Prisma.Decimal | null
      priceReviewedById: number | null
      priceReviewedAt: Date | null
      paymentStatus: $Enums.PaymentStatus
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {ShipmentCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments and returns the data updated in the database.
     * @param {ShipmentUpdateManyAndReturnArgs} args - Arguments to update many Shipments.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends Shipment$driverArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$driverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    company<T extends Shipment$companyArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Shipment$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedBy<T extends Shipment$assignedByArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$assignedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    priceReviewedBy<T extends Shipment$priceReviewedByArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$priceReviewedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipment model
   */
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'Int'>
    readonly cargoType: FieldRef<"Shipment", 'String'>
    readonly weight: FieldRef<"Shipment", 'Float'>
    readonly dimensions: FieldRef<"Shipment", 'String'>
    readonly origin: FieldRef<"Shipment", 'String'>
    readonly destination: FieldRef<"Shipment", 'String'>
    readonly timeline: FieldRef<"Shipment", 'String'>
    readonly status: FieldRef<"Shipment", 'ShipmentStatus'>
    readonly senderId: FieldRef<"Shipment", 'Int'>
    readonly driverId: FieldRef<"Shipment", 'Int'>
    readonly companyId: FieldRef<"Shipment", 'Int'>
    readonly createdById: FieldRef<"Shipment", 'Int'>
    readonly assignedById: FieldRef<"Shipment", 'Int'>
    readonly proposedPrice: FieldRef<"Shipment", 'Decimal'>
    readonly approvedPrice: FieldRef<"Shipment", 'Decimal'>
    readonly priceReviewedById: FieldRef<"Shipment", 'Int'>
    readonly priceReviewedAt: FieldRef<"Shipment", 'DateTime'>
    readonly paymentStatus: FieldRef<"Shipment", 'PaymentStatus'>
    readonly paidAt: FieldRef<"Shipment", 'DateTime'>
    readonly createdAt: FieldRef<"Shipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Shipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipment createManyAndReturn
   */
  export type ShipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment updateManyAndReturn
   */
  export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to delete.
     */
    limit?: number
  }

  /**
   * Shipment.driver
   */
  export type Shipment$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Shipment.company
   */
  export type Shipment$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Shipment.createdBy
   */
  export type Shipment$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Shipment.assignedBy
   */
  export type Shipment$assignedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Shipment.priceReviewedBy
   */
  export type Shipment$priceReviewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AgentSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AgentMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: string | null
    isPublic: boolean | null
    userId: number | null
    createdAt: Date | null
  }

  export type AgentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: string | null
    isPublic: boolean | null
    userId: number | null
    createdAt: Date | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    config: number
    isPublic: number
    userId: number
    createdAt: number
    _all: number
  }


  export type AgentAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AgentSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AgentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    isPublic?: true
    userId?: true
    createdAt?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    isPublic?: true
    userId?: true
    createdAt?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    config?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _avg?: AgentAvgAggregateInputType
    _sum?: AgentSumAggregateInputType
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: number
    name: string
    description: string | null
    type: string | null
    config: JsonValue | null
    isPublic: boolean
    userId: number
    createdAt: Date
    _count: AgentCountAggregateOutputType | null
    _avg: AgentAvgAggregateOutputType | null
    _sum: AgentSumAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    config?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    config?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    config?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    config?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "config" | "isPublic" | "userId" | "createdAt", ExtArgs["result"]["agent"]>

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      type: string | null
      config: Prisma.JsonValue | null
      isPublic: boolean
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'Int'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly description: FieldRef<"Agent", 'String'>
    readonly type: FieldRef<"Agent", 'String'>
    readonly config: FieldRef<"Agent", 'Json'>
    readonly isPublic: FieldRef<"Agent", 'Boolean'>
    readonly userId: FieldRef<"Agent", 'Int'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent updateManyAndReturn
   */
  export type AgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    managerId: number | null
    createdById: number | null
    assignedById: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
    managerId: number | null
    createdById: number | null
    assignedById: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    nit: string | null
    address: string | null
    isActive: boolean | null
    managerId: number | null
    createdById: number | null
    assignedById: number | null
    createdAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nit: string | null
    address: string | null
    isActive: boolean | null
    managerId: number | null
    createdById: number | null
    assignedById: number | null
    createdAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    nit: number
    address: number
    isActive: number
    managerId: number
    createdById: number
    assignedById: number
    createdAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    managerId?: true
    createdById?: true
    assignedById?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    managerId?: true
    createdById?: true
    assignedById?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    nit?: true
    address?: true
    isActive?: true
    managerId?: true
    createdById?: true
    assignedById?: true
    createdAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    nit?: true
    address?: true
    isActive?: true
    managerId?: true
    createdById?: true
    assignedById?: true
    createdAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    nit?: true
    address?: true
    isActive?: true
    managerId?: true
    createdById?: true
    assignedById?: true
    createdAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    nit: string
    address: string | null
    isActive: boolean
    managerId: number | null
    createdById: number | null
    assignedById: number | null
    createdAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nit?: boolean
    address?: boolean
    isActive?: boolean
    managerId?: boolean
    createdById?: boolean
    assignedById?: boolean
    createdAt?: boolean
    manager?: boolean | Company$managerArgs<ExtArgs>
    createdBy?: boolean | Company$createdByArgs<ExtArgs>
    assignedBy?: boolean | Company$assignedByArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    shipments?: boolean | Company$shipmentsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nit?: boolean
    address?: boolean
    isActive?: boolean
    managerId?: boolean
    createdById?: boolean
    assignedById?: boolean
    createdAt?: boolean
    manager?: boolean | Company$managerArgs<ExtArgs>
    createdBy?: boolean | Company$createdByArgs<ExtArgs>
    assignedBy?: boolean | Company$assignedByArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nit?: boolean
    address?: boolean
    isActive?: boolean
    managerId?: boolean
    createdById?: boolean
    assignedById?: boolean
    createdAt?: boolean
    manager?: boolean | Company$managerArgs<ExtArgs>
    createdBy?: boolean | Company$createdByArgs<ExtArgs>
    assignedBy?: boolean | Company$assignedByArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    nit?: boolean
    address?: boolean
    isActive?: boolean
    managerId?: boolean
    createdById?: boolean
    assignedById?: boolean
    createdAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nit" | "address" | "isActive" | "managerId" | "createdById" | "assignedById" | "createdAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | Company$managerArgs<ExtArgs>
    createdBy?: boolean | Company$createdByArgs<ExtArgs>
    assignedBy?: boolean | Company$assignedByArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    shipments?: boolean | Company$shipmentsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | Company$managerArgs<ExtArgs>
    createdBy?: boolean | Company$createdByArgs<ExtArgs>
    assignedBy?: boolean | Company$assignedByArgs<ExtArgs>
  }
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | Company$managerArgs<ExtArgs>
    createdBy?: boolean | Company$createdByArgs<ExtArgs>
    assignedBy?: boolean | Company$assignedByArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      manager: Prisma.$UserPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      assignedBy: Prisma.$UserPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nit: string
      address: string | null
      isActive: boolean
      managerId: number | null
      createdById: number | null
      assignedById: number | null
      createdAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends Company$managerArgs<ExtArgs> = {}>(args?: Subset<T, Company$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Company$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Company$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedBy<T extends Company$assignedByArgs<ExtArgs> = {}>(args?: Subset<T, Company$assignedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipments<T extends Company$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Company$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly nit: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly isActive: FieldRef<"Company", 'Boolean'>
    readonly managerId: FieldRef<"Company", 'Int'>
    readonly createdById: FieldRef<"Company", 'Int'>
    readonly assignedById: FieldRef<"Company", 'Int'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.manager
   */
  export type Company$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Company.createdBy
   */
  export type Company$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Company.assignedBy
   */
  export type Company$assignedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.shipments
   */
  export type Company$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model DriverApplication
   */

  export type AggregateDriverApplication = {
    _count: DriverApplicationCountAggregateOutputType | null
    _avg: DriverApplicationAvgAggregateOutputType | null
    _sum: DriverApplicationSumAggregateOutputType | null
    _min: DriverApplicationMinAggregateOutputType | null
    _max: DriverApplicationMaxAggregateOutputType | null
  }

  export type DriverApplicationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    reviewedById: number | null
  }

  export type DriverApplicationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    reviewedById: number | null
  }

  export type DriverApplicationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    status: $Enums.ApprovalStatus | null
    reviewedById: number | null
    notes: string | null
    createdAt: Date | null
    reviewedAt: Date | null
  }

  export type DriverApplicationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    status: $Enums.ApprovalStatus | null
    reviewedById: number | null
    notes: string | null
    createdAt: Date | null
    reviewedAt: Date | null
  }

  export type DriverApplicationCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    reviewedById: number
    notes: number
    createdAt: number
    reviewedAt: number
    _all: number
  }


  export type DriverApplicationAvgAggregateInputType = {
    id?: true
    userId?: true
    reviewedById?: true
  }

  export type DriverApplicationSumAggregateInputType = {
    id?: true
    userId?: true
    reviewedById?: true
  }

  export type DriverApplicationMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    reviewedById?: true
    notes?: true
    createdAt?: true
    reviewedAt?: true
  }

  export type DriverApplicationMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    reviewedById?: true
    notes?: true
    createdAt?: true
    reviewedAt?: true
  }

  export type DriverApplicationCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    reviewedById?: true
    notes?: true
    createdAt?: true
    reviewedAt?: true
    _all?: true
  }

  export type DriverApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverApplication to aggregate.
     */
    where?: DriverApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverApplications to fetch.
     */
    orderBy?: DriverApplicationOrderByWithRelationInput | DriverApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DriverApplications
    **/
    _count?: true | DriverApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverApplicationMaxAggregateInputType
  }

  export type GetDriverApplicationAggregateType<T extends DriverApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateDriverApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriverApplication[P]>
      : GetScalarType<T[P], AggregateDriverApplication[P]>
  }




  export type DriverApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverApplicationWhereInput
    orderBy?: DriverApplicationOrderByWithAggregationInput | DriverApplicationOrderByWithAggregationInput[]
    by: DriverApplicationScalarFieldEnum[] | DriverApplicationScalarFieldEnum
    having?: DriverApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverApplicationCountAggregateInputType | true
    _avg?: DriverApplicationAvgAggregateInputType
    _sum?: DriverApplicationSumAggregateInputType
    _min?: DriverApplicationMinAggregateInputType
    _max?: DriverApplicationMaxAggregateInputType
  }

  export type DriverApplicationGroupByOutputType = {
    id: number
    userId: number
    status: $Enums.ApprovalStatus
    reviewedById: number | null
    notes: string | null
    createdAt: Date
    reviewedAt: Date | null
    _count: DriverApplicationCountAggregateOutputType | null
    _avg: DriverApplicationAvgAggregateOutputType | null
    _sum: DriverApplicationSumAggregateOutputType | null
    _min: DriverApplicationMinAggregateOutputType | null
    _max: DriverApplicationMaxAggregateOutputType | null
  }

  type GetDriverApplicationGroupByPayload<T extends DriverApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], DriverApplicationGroupByOutputType[P]>
        }
      >
    >


  export type DriverApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    reviewedById?: boolean
    notes?: boolean
    createdAt?: boolean
    reviewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | DriverApplication$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["driverApplication"]>

  export type DriverApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    reviewedById?: boolean
    notes?: boolean
    createdAt?: boolean
    reviewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | DriverApplication$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["driverApplication"]>

  export type DriverApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    reviewedById?: boolean
    notes?: boolean
    createdAt?: boolean
    reviewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | DriverApplication$reviewedByArgs<ExtArgs>
  }, ExtArgs["result"]["driverApplication"]>

  export type DriverApplicationSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    reviewedById?: boolean
    notes?: boolean
    createdAt?: boolean
    reviewedAt?: boolean
  }

  export type DriverApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "reviewedById" | "notes" | "createdAt" | "reviewedAt", ExtArgs["result"]["driverApplication"]>
  export type DriverApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | DriverApplication$reviewedByArgs<ExtArgs>
  }
  export type DriverApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | DriverApplication$reviewedByArgs<ExtArgs>
  }
  export type DriverApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    reviewedBy?: boolean | DriverApplication$reviewedByArgs<ExtArgs>
  }

  export type $DriverApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DriverApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      reviewedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      status: $Enums.ApprovalStatus
      reviewedById: number | null
      notes: string | null
      createdAt: Date
      reviewedAt: Date | null
    }, ExtArgs["result"]["driverApplication"]>
    composites: {}
  }

  type DriverApplicationGetPayload<S extends boolean | null | undefined | DriverApplicationDefaultArgs> = $Result.GetResult<Prisma.$DriverApplicationPayload, S>

  type DriverApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverApplicationCountAggregateInputType | true
    }

  export interface DriverApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DriverApplication'], meta: { name: 'DriverApplication' } }
    /**
     * Find zero or one DriverApplication that matches the filter.
     * @param {DriverApplicationFindUniqueArgs} args - Arguments to find a DriverApplication
     * @example
     * // Get one DriverApplication
     * const driverApplication = await prisma.driverApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverApplicationFindUniqueArgs>(args: SelectSubset<T, DriverApplicationFindUniqueArgs<ExtArgs>>): Prisma__DriverApplicationClient<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DriverApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverApplicationFindUniqueOrThrowArgs} args - Arguments to find a DriverApplication
     * @example
     * // Get one DriverApplication
     * const driverApplication = await prisma.driverApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverApplicationClient<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverApplicationFindFirstArgs} args - Arguments to find a DriverApplication
     * @example
     * // Get one DriverApplication
     * const driverApplication = await prisma.driverApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverApplicationFindFirstArgs>(args?: SelectSubset<T, DriverApplicationFindFirstArgs<ExtArgs>>): Prisma__DriverApplicationClient<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverApplicationFindFirstOrThrowArgs} args - Arguments to find a DriverApplication
     * @example
     * // Get one DriverApplication
     * const driverApplication = await prisma.driverApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverApplicationClient<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DriverApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DriverApplications
     * const driverApplications = await prisma.driverApplication.findMany()
     * 
     * // Get first 10 DriverApplications
     * const driverApplications = await prisma.driverApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverApplicationWithIdOnly = await prisma.driverApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverApplicationFindManyArgs>(args?: SelectSubset<T, DriverApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DriverApplication.
     * @param {DriverApplicationCreateArgs} args - Arguments to create a DriverApplication.
     * @example
     * // Create one DriverApplication
     * const DriverApplication = await prisma.driverApplication.create({
     *   data: {
     *     // ... data to create a DriverApplication
     *   }
     * })
     * 
     */
    create<T extends DriverApplicationCreateArgs>(args: SelectSubset<T, DriverApplicationCreateArgs<ExtArgs>>): Prisma__DriverApplicationClient<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DriverApplications.
     * @param {DriverApplicationCreateManyArgs} args - Arguments to create many DriverApplications.
     * @example
     * // Create many DriverApplications
     * const driverApplication = await prisma.driverApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverApplicationCreateManyArgs>(args?: SelectSubset<T, DriverApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DriverApplications and returns the data saved in the database.
     * @param {DriverApplicationCreateManyAndReturnArgs} args - Arguments to create many DriverApplications.
     * @example
     * // Create many DriverApplications
     * const driverApplication = await prisma.driverApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DriverApplications and only return the `id`
     * const driverApplicationWithIdOnly = await prisma.driverApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DriverApplication.
     * @param {DriverApplicationDeleteArgs} args - Arguments to delete one DriverApplication.
     * @example
     * // Delete one DriverApplication
     * const DriverApplication = await prisma.driverApplication.delete({
     *   where: {
     *     // ... filter to delete one DriverApplication
     *   }
     * })
     * 
     */
    delete<T extends DriverApplicationDeleteArgs>(args: SelectSubset<T, DriverApplicationDeleteArgs<ExtArgs>>): Prisma__DriverApplicationClient<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DriverApplication.
     * @param {DriverApplicationUpdateArgs} args - Arguments to update one DriverApplication.
     * @example
     * // Update one DriverApplication
     * const driverApplication = await prisma.driverApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverApplicationUpdateArgs>(args: SelectSubset<T, DriverApplicationUpdateArgs<ExtArgs>>): Prisma__DriverApplicationClient<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DriverApplications.
     * @param {DriverApplicationDeleteManyArgs} args - Arguments to filter DriverApplications to delete.
     * @example
     * // Delete a few DriverApplications
     * const { count } = await prisma.driverApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverApplicationDeleteManyArgs>(args?: SelectSubset<T, DriverApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DriverApplications
     * const driverApplication = await prisma.driverApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverApplicationUpdateManyArgs>(args: SelectSubset<T, DriverApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverApplications and returns the data updated in the database.
     * @param {DriverApplicationUpdateManyAndReturnArgs} args - Arguments to update many DriverApplications.
     * @example
     * // Update many DriverApplications
     * const driverApplication = await prisma.driverApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DriverApplications and only return the `id`
     * const driverApplicationWithIdOnly = await prisma.driverApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DriverApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DriverApplication.
     * @param {DriverApplicationUpsertArgs} args - Arguments to update or create a DriverApplication.
     * @example
     * // Update or create a DriverApplication
     * const driverApplication = await prisma.driverApplication.upsert({
     *   create: {
     *     // ... data to create a DriverApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DriverApplication we want to update
     *   }
     * })
     */
    upsert<T extends DriverApplicationUpsertArgs>(args: SelectSubset<T, DriverApplicationUpsertArgs<ExtArgs>>): Prisma__DriverApplicationClient<$Result.GetResult<Prisma.$DriverApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DriverApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverApplicationCountArgs} args - Arguments to filter DriverApplications to count.
     * @example
     * // Count the number of DriverApplications
     * const count = await prisma.driverApplication.count({
     *   where: {
     *     // ... the filter for the DriverApplications we want to count
     *   }
     * })
    **/
    count<T extends DriverApplicationCountArgs>(
      args?: Subset<T, DriverApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DriverApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverApplicationAggregateArgs>(args: Subset<T, DriverApplicationAggregateArgs>): Prisma.PrismaPromise<GetDriverApplicationAggregateType<T>>

    /**
     * Group by DriverApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriverApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverApplicationGroupByArgs['orderBy'] }
        : { orderBy?: DriverApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DriverApplication model
   */
  readonly fields: DriverApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DriverApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewedBy<T extends DriverApplication$reviewedByArgs<ExtArgs> = {}>(args?: Subset<T, DriverApplication$reviewedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DriverApplication model
   */
  interface DriverApplicationFieldRefs {
    readonly id: FieldRef<"DriverApplication", 'Int'>
    readonly userId: FieldRef<"DriverApplication", 'Int'>
    readonly status: FieldRef<"DriverApplication", 'ApprovalStatus'>
    readonly reviewedById: FieldRef<"DriverApplication", 'Int'>
    readonly notes: FieldRef<"DriverApplication", 'String'>
    readonly createdAt: FieldRef<"DriverApplication", 'DateTime'>
    readonly reviewedAt: FieldRef<"DriverApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DriverApplication findUnique
   */
  export type DriverApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
    /**
     * Filter, which DriverApplication to fetch.
     */
    where: DriverApplicationWhereUniqueInput
  }

  /**
   * DriverApplication findUniqueOrThrow
   */
  export type DriverApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
    /**
     * Filter, which DriverApplication to fetch.
     */
    where: DriverApplicationWhereUniqueInput
  }

  /**
   * DriverApplication findFirst
   */
  export type DriverApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
    /**
     * Filter, which DriverApplication to fetch.
     */
    where?: DriverApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverApplications to fetch.
     */
    orderBy?: DriverApplicationOrderByWithRelationInput | DriverApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverApplications.
     */
    cursor?: DriverApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverApplications.
     */
    distinct?: DriverApplicationScalarFieldEnum | DriverApplicationScalarFieldEnum[]
  }

  /**
   * DriverApplication findFirstOrThrow
   */
  export type DriverApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
    /**
     * Filter, which DriverApplication to fetch.
     */
    where?: DriverApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverApplications to fetch.
     */
    orderBy?: DriverApplicationOrderByWithRelationInput | DriverApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverApplications.
     */
    cursor?: DriverApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverApplications.
     */
    distinct?: DriverApplicationScalarFieldEnum | DriverApplicationScalarFieldEnum[]
  }

  /**
   * DriverApplication findMany
   */
  export type DriverApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
    /**
     * Filter, which DriverApplications to fetch.
     */
    where?: DriverApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverApplications to fetch.
     */
    orderBy?: DriverApplicationOrderByWithRelationInput | DriverApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DriverApplications.
     */
    cursor?: DriverApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverApplications.
     */
    distinct?: DriverApplicationScalarFieldEnum | DriverApplicationScalarFieldEnum[]
  }

  /**
   * DriverApplication create
   */
  export type DriverApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a DriverApplication.
     */
    data: XOR<DriverApplicationCreateInput, DriverApplicationUncheckedCreateInput>
  }

  /**
   * DriverApplication createMany
   */
  export type DriverApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DriverApplications.
     */
    data: DriverApplicationCreateManyInput | DriverApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DriverApplication createManyAndReturn
   */
  export type DriverApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many DriverApplications.
     */
    data: DriverApplicationCreateManyInput | DriverApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverApplication update
   */
  export type DriverApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a DriverApplication.
     */
    data: XOR<DriverApplicationUpdateInput, DriverApplicationUncheckedUpdateInput>
    /**
     * Choose, which DriverApplication to update.
     */
    where: DriverApplicationWhereUniqueInput
  }

  /**
   * DriverApplication updateMany
   */
  export type DriverApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DriverApplications.
     */
    data: XOR<DriverApplicationUpdateManyMutationInput, DriverApplicationUncheckedUpdateManyInput>
    /**
     * Filter which DriverApplications to update
     */
    where?: DriverApplicationWhereInput
    /**
     * Limit how many DriverApplications to update.
     */
    limit?: number
  }

  /**
   * DriverApplication updateManyAndReturn
   */
  export type DriverApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * The data used to update DriverApplications.
     */
    data: XOR<DriverApplicationUpdateManyMutationInput, DriverApplicationUncheckedUpdateManyInput>
    /**
     * Filter which DriverApplications to update
     */
    where?: DriverApplicationWhereInput
    /**
     * Limit how many DriverApplications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverApplication upsert
   */
  export type DriverApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the DriverApplication to update in case it exists.
     */
    where: DriverApplicationWhereUniqueInput
    /**
     * In case the DriverApplication found by the `where` argument doesn't exist, create a new DriverApplication with this data.
     */
    create: XOR<DriverApplicationCreateInput, DriverApplicationUncheckedCreateInput>
    /**
     * In case the DriverApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverApplicationUpdateInput, DriverApplicationUncheckedUpdateInput>
  }

  /**
   * DriverApplication delete
   */
  export type DriverApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
    /**
     * Filter which DriverApplication to delete.
     */
    where: DriverApplicationWhereUniqueInput
  }

  /**
   * DriverApplication deleteMany
   */
  export type DriverApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverApplications to delete
     */
    where?: DriverApplicationWhereInput
    /**
     * Limit how many DriverApplications to delete.
     */
    limit?: number
  }

  /**
   * DriverApplication.reviewedBy
   */
  export type DriverApplication$reviewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * DriverApplication without action
   */
  export type DriverApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverApplication
     */
    select?: DriverApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverApplication
     */
    omit?: DriverApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverApplicationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    nit: 'nit',
    address: 'address',
    phone: 'phone',
    password: 'password',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    companyId: 'companyId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    cargoType: 'cargoType',
    weight: 'weight',
    dimensions: 'dimensions',
    origin: 'origin',
    destination: 'destination',
    timeline: 'timeline',
    status: 'status',
    senderId: 'senderId',
    driverId: 'driverId',
    companyId: 'companyId',
    createdById: 'createdById',
    assignedById: 'assignedById',
    proposedPrice: 'proposedPrice',
    approvedPrice: 'approvedPrice',
    priceReviewedById: 'priceReviewedById',
    priceReviewedAt: 'priceReviewedAt',
    paymentStatus: 'paymentStatus',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    config: 'config',
    isPublic: 'isPublic',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nit: 'nit',
    address: 'address',
    isActive: 'isActive',
    managerId: 'managerId',
    createdById: 'createdById',
    assignedById: 'assignedById',
    createdAt: 'createdAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const DriverApplicationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    reviewedById: 'reviewedById',
    notes: 'notes',
    createdAt: 'createdAt',
    reviewedAt: 'reviewedAt'
  };

  export type DriverApplicationScalarFieldEnum = (typeof DriverApplicationScalarFieldEnum)[keyof typeof DriverApplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ShipmentStatus'
   */
  export type EnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus'>
    


  /**
   * Reference to a field of type 'ShipmentStatus[]'
   */
  export type ListEnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ApprovalStatus'
   */
  export type EnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus'>
    


  /**
   * Reference to a field of type 'ApprovalStatus[]'
   */
  export type ListEnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    nit?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    companyId?: IntNullableFilter<"User"> | number | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    managedCompanies?: CompanyListRelationFilter
    createdCompanies?: CompanyListRelationFilter
    assignedCompanies?: CompanyListRelationFilter
    customerShipments?: ShipmentListRelationFilter
    driverShipments?: ShipmentListRelationFilter
    createdShipments?: ShipmentListRelationFilter
    assignedShipments?: ShipmentListRelationFilter
    priceReviewedShipments?: ShipmentListRelationFilter
    driverApplications?: DriverApplicationListRelationFilter
    reviewedApplications?: DriverApplicationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    nit?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    companyId?: SortOrderInput | SortOrder
    company?: CompanyOrderByWithRelationInput
    managedCompanies?: CompanyOrderByRelationAggregateInput
    createdCompanies?: CompanyOrderByRelationAggregateInput
    assignedCompanies?: CompanyOrderByRelationAggregateInput
    customerShipments?: ShipmentOrderByRelationAggregateInput
    driverShipments?: ShipmentOrderByRelationAggregateInput
    createdShipments?: ShipmentOrderByRelationAggregateInput
    assignedShipments?: ShipmentOrderByRelationAggregateInput
    priceReviewedShipments?: ShipmentOrderByRelationAggregateInput
    driverApplications?: DriverApplicationOrderByRelationAggregateInput
    reviewedApplications?: DriverApplicationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    nit?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    companyId?: IntNullableFilter<"User"> | number | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    managedCompanies?: CompanyListRelationFilter
    createdCompanies?: CompanyListRelationFilter
    assignedCompanies?: CompanyListRelationFilter
    customerShipments?: ShipmentListRelationFilter
    driverShipments?: ShipmentListRelationFilter
    createdShipments?: ShipmentListRelationFilter
    assignedShipments?: ShipmentListRelationFilter
    priceReviewedShipments?: ShipmentListRelationFilter
    driverApplications?: DriverApplicationListRelationFilter
    reviewedApplications?: DriverApplicationListRelationFilter
  }, "id" | "email" | "nit">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    nit?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    companyId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    nit?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    companyId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: IntFilter<"Shipment"> | number
    cargoType?: StringFilter<"Shipment"> | string
    weight?: FloatFilter<"Shipment"> | number
    dimensions?: StringNullableFilter<"Shipment"> | string | null
    origin?: StringFilter<"Shipment"> | string
    destination?: StringFilter<"Shipment"> | string
    timeline?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    senderId?: IntFilter<"Shipment"> | number
    driverId?: IntNullableFilter<"Shipment"> | number | null
    companyId?: IntNullableFilter<"Shipment"> | number | null
    createdById?: IntNullableFilter<"Shipment"> | number | null
    assignedById?: IntNullableFilter<"Shipment"> | number | null
    proposedPrice?: DecimalNullableFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: DecimalNullableFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: IntNullableFilter<"Shipment"> | number | null
    priceReviewedAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Shipment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    driver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    priceReviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    cargoType?: SortOrder
    weight?: SortOrder
    dimensions?: SortOrderInput | SortOrder
    origin?: SortOrder
    destination?: SortOrder
    timeline?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    assignedById?: SortOrderInput | SortOrder
    proposedPrice?: SortOrderInput | SortOrder
    approvedPrice?: SortOrderInput | SortOrder
    priceReviewedById?: SortOrderInput | SortOrder
    priceReviewedAt?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    driver?: UserOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    assignedBy?: UserOrderByWithRelationInput
    priceReviewedBy?: UserOrderByWithRelationInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    cargoType?: StringFilter<"Shipment"> | string
    weight?: FloatFilter<"Shipment"> | number
    dimensions?: StringNullableFilter<"Shipment"> | string | null
    origin?: StringFilter<"Shipment"> | string
    destination?: StringFilter<"Shipment"> | string
    timeline?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    senderId?: IntFilter<"Shipment"> | number
    driverId?: IntNullableFilter<"Shipment"> | number | null
    companyId?: IntNullableFilter<"Shipment"> | number | null
    createdById?: IntNullableFilter<"Shipment"> | number | null
    assignedById?: IntNullableFilter<"Shipment"> | number | null
    proposedPrice?: DecimalNullableFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: DecimalNullableFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: IntNullableFilter<"Shipment"> | number | null
    priceReviewedAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Shipment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    driver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    priceReviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    cargoType?: SortOrder
    weight?: SortOrder
    dimensions?: SortOrderInput | SortOrder
    origin?: SortOrder
    destination?: SortOrder
    timeline?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    assignedById?: SortOrderInput | SortOrder
    proposedPrice?: SortOrderInput | SortOrder
    approvedPrice?: SortOrderInput | SortOrder
    priceReviewedById?: SortOrderInput | SortOrder
    priceReviewedAt?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _avg?: ShipmentAvgOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
    _sum?: ShipmentSumOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shipment"> | number
    cargoType?: StringWithAggregatesFilter<"Shipment"> | string
    weight?: FloatWithAggregatesFilter<"Shipment"> | number
    dimensions?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
    origin?: StringWithAggregatesFilter<"Shipment"> | string
    destination?: StringWithAggregatesFilter<"Shipment"> | string
    timeline?: StringWithAggregatesFilter<"Shipment"> | string
    status?: EnumShipmentStatusWithAggregatesFilter<"Shipment"> | $Enums.ShipmentStatus
    senderId?: IntWithAggregatesFilter<"Shipment"> | number
    driverId?: IntNullableWithAggregatesFilter<"Shipment"> | number | null
    companyId?: IntNullableWithAggregatesFilter<"Shipment"> | number | null
    createdById?: IntNullableWithAggregatesFilter<"Shipment"> | number | null
    assignedById?: IntNullableWithAggregatesFilter<"Shipment"> | number | null
    proposedPrice?: DecimalNullableWithAggregatesFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: DecimalNullableWithAggregatesFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: IntNullableWithAggregatesFilter<"Shipment"> | number | null
    priceReviewedAt?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Shipment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: IntFilter<"Agent"> | number
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    type?: StringNullableFilter<"Agent"> | string | null
    config?: JsonNullableFilter<"Agent">
    isPublic?: BoolFilter<"Agent"> | boolean
    userId?: IntFilter<"Agent"> | number
    createdAt?: DateTimeFilter<"Agent"> | Date | string
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    type?: StringNullableFilter<"Agent"> | string | null
    config?: JsonNullableFilter<"Agent">
    isPublic?: BoolFilter<"Agent"> | boolean
    userId?: IntFilter<"Agent"> | number
    createdAt?: DateTimeFilter<"Agent"> | Date | string
  }, "id">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _avg?: AgentAvgOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
    _sum?: AgentSumOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agent"> | number
    name?: StringWithAggregatesFilter<"Agent"> | string
    description?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    type?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    config?: JsonNullableWithAggregatesFilter<"Agent">
    isPublic?: BoolWithAggregatesFilter<"Agent"> | boolean
    userId?: IntWithAggregatesFilter<"Agent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    nit?: StringFilter<"Company"> | string
    address?: StringNullableFilter<"Company"> | string | null
    isActive?: BoolFilter<"Company"> | boolean
    managerId?: IntNullableFilter<"Company"> | number | null
    createdById?: IntNullableFilter<"Company"> | number | null
    assignedById?: IntNullableFilter<"Company"> | number | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    users?: UserListRelationFilter
    shipments?: ShipmentListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    assignedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    manager?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    assignedBy?: UserOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    shipments?: ShipmentOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nit?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    address?: StringNullableFilter<"Company"> | string | null
    isActive?: BoolFilter<"Company"> | boolean
    managerId?: IntNullableFilter<"Company"> | number | null
    createdById?: IntNullableFilter<"Company"> | number | null
    assignedById?: IntNullableFilter<"Company"> | number | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    users?: UserListRelationFilter
    shipments?: ShipmentListRelationFilter
  }, "id" | "nit">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    assignedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    nit?: StringWithAggregatesFilter<"Company"> | string
    address?: StringNullableWithAggregatesFilter<"Company"> | string | null
    isActive?: BoolWithAggregatesFilter<"Company"> | boolean
    managerId?: IntNullableWithAggregatesFilter<"Company"> | number | null
    createdById?: IntNullableWithAggregatesFilter<"Company"> | number | null
    assignedById?: IntNullableWithAggregatesFilter<"Company"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type DriverApplicationWhereInput = {
    AND?: DriverApplicationWhereInput | DriverApplicationWhereInput[]
    OR?: DriverApplicationWhereInput[]
    NOT?: DriverApplicationWhereInput | DriverApplicationWhereInput[]
    id?: IntFilter<"DriverApplication"> | number
    userId?: IntFilter<"DriverApplication"> | number
    status?: EnumApprovalStatusFilter<"DriverApplication"> | $Enums.ApprovalStatus
    reviewedById?: IntNullableFilter<"DriverApplication"> | number | null
    notes?: StringNullableFilter<"DriverApplication"> | string | null
    createdAt?: DateTimeFilter<"DriverApplication"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"DriverApplication"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DriverApplicationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    reviewedBy?: UserOrderByWithRelationInput
  }

  export type DriverApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: DriverApplicationWhereInput | DriverApplicationWhereInput[]
    OR?: DriverApplicationWhereInput[]
    NOT?: DriverApplicationWhereInput | DriverApplicationWhereInput[]
    status?: EnumApprovalStatusFilter<"DriverApplication"> | $Enums.ApprovalStatus
    reviewedById?: IntNullableFilter<"DriverApplication"> | number | null
    notes?: StringNullableFilter<"DriverApplication"> | string | null
    createdAt?: DateTimeFilter<"DriverApplication"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"DriverApplication"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId">

  export type DriverApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    _count?: DriverApplicationCountOrderByAggregateInput
    _avg?: DriverApplicationAvgOrderByAggregateInput
    _max?: DriverApplicationMaxOrderByAggregateInput
    _min?: DriverApplicationMinOrderByAggregateInput
    _sum?: DriverApplicationSumOrderByAggregateInput
  }

  export type DriverApplicationScalarWhereWithAggregatesInput = {
    AND?: DriverApplicationScalarWhereWithAggregatesInput | DriverApplicationScalarWhereWithAggregatesInput[]
    OR?: DriverApplicationScalarWhereWithAggregatesInput[]
    NOT?: DriverApplicationScalarWhereWithAggregatesInput | DriverApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DriverApplication"> | number
    userId?: IntWithAggregatesFilter<"DriverApplication"> | number
    status?: EnumApprovalStatusWithAggregatesFilter<"DriverApplication"> | $Enums.ApprovalStatus
    reviewedById?: IntNullableWithAggregatesFilter<"DriverApplication"> | number | null
    notes?: StringNullableWithAggregatesFilter<"DriverApplication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DriverApplication"> | Date | string
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"DriverApplication"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    managedCompanies?: CompanyCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
    managedCompanies?: CompanyUncheckedCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyUncheckedCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentUncheckedCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentUncheckedCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    managedCompanies?: CompanyUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managedCompanies?: CompanyUncheckedUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUncheckedUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUncheckedUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShipmentCreateInput = {
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCustomerShipmentsInput
    driver?: UserCreateNestedOneWithoutDriverShipmentsInput
    company?: CompanyCreateNestedOneWithoutShipmentsInput
    createdBy?: UserCreateNestedOneWithoutCreatedShipmentsInput
    assignedBy?: UserCreateNestedOneWithoutAssignedShipmentsInput
    priceReviewedBy?: UserCreateNestedOneWithoutPriceReviewedShipmentsInput
  }

  export type ShipmentUncheckedCreateInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    driverId?: number | null
    companyId?: number | null
    createdById?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentUpdateInput = {
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCustomerShipmentsNestedInput
    driver?: UserUpdateOneWithoutDriverShipmentsNestedInput
    company?: CompanyUpdateOneWithoutShipmentsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedShipmentsNestedInput
    assignedBy?: UserUpdateOneWithoutAssignedShipmentsNestedInput
    priceReviewedBy?: UserUpdateOneWithoutPriceReviewedShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCreateManyInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    driverId?: number | null
    companyId?: number | null
    createdById?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentUpdateManyMutationInput = {
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateInput = {
    name: string
    description?: string | null
    type?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean
    userId: number
    createdAt?: Date | string
  }

  export type AgentUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    type?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean
    userId: number
    createdAt?: Date | string
  }

  export type AgentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    type?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean
    userId: number
    createdAt?: Date | string
  }

  export type AgentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutManagedCompaniesInput
    createdBy?: UserCreateNestedOneWithoutCreatedCompaniesInput
    assignedBy?: UserCreateNestedOneWithoutAssignedCompaniesInput
    users?: UserCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    managerId?: number | null
    createdById?: number | null
    assignedById?: number | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutManagedCompaniesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedCompaniesNestedInput
    assignedBy?: UserUpdateOneWithoutAssignedCompaniesNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    managerId?: number | null
    createdById?: number | null
    assignedById?: number | null
    createdAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverApplicationCreateInput = {
    status?: $Enums.ApprovalStatus
    notes?: string | null
    createdAt?: Date | string
    reviewedAt?: Date | string | null
    user: UserCreateNestedOneWithoutDriverApplicationsInput
    reviewedBy?: UserCreateNestedOneWithoutReviewedApplicationsInput
  }

  export type DriverApplicationUncheckedCreateInput = {
    id?: number
    userId: number
    status?: $Enums.ApprovalStatus
    reviewedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    reviewedAt?: Date | string | null
  }

  export type DriverApplicationUpdateInput = {
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutDriverApplicationsNestedInput
    reviewedBy?: UserUpdateOneWithoutReviewedApplicationsNestedInput
  }

  export type DriverApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    reviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DriverApplicationCreateManyInput = {
    id?: number
    userId: number
    status?: $Enums.ApprovalStatus
    reviewedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    reviewedAt?: Date | string | null
  }

  export type DriverApplicationUpdateManyMutationInput = {
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DriverApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    reviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type ShipmentListRelationFilter = {
    every?: ShipmentWhereInput
    some?: ShipmentWhereInput
    none?: ShipmentWhereInput
  }

  export type DriverApplicationListRelationFilter = {
    every?: DriverApplicationWhereInput
    some?: DriverApplicationWhereInput
    none?: DriverApplicationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    companyId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    companyId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    companyId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    cargoType?: SortOrder
    weight?: SortOrder
    dimensions?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    timeline?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    driverId?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrder
    assignedById?: SortOrder
    proposedPrice?: SortOrder
    approvedPrice?: SortOrder
    priceReviewedById?: SortOrder
    priceReviewedAt?: SortOrder
    paymentStatus?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    senderId?: SortOrder
    driverId?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrder
    assignedById?: SortOrder
    proposedPrice?: SortOrder
    approvedPrice?: SortOrder
    priceReviewedById?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    cargoType?: SortOrder
    weight?: SortOrder
    dimensions?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    timeline?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    driverId?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrder
    assignedById?: SortOrder
    proposedPrice?: SortOrder
    approvedPrice?: SortOrder
    priceReviewedById?: SortOrder
    priceReviewedAt?: SortOrder
    paymentStatus?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    cargoType?: SortOrder
    weight?: SortOrder
    dimensions?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    timeline?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    driverId?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrder
    assignedById?: SortOrder
    proposedPrice?: SortOrder
    approvedPrice?: SortOrder
    priceReviewedById?: SortOrder
    priceReviewedAt?: SortOrder
    paymentStatus?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    senderId?: SortOrder
    driverId?: SortOrder
    companyId?: SortOrder
    createdById?: SortOrder
    assignedById?: SortOrder
    proposedPrice?: SortOrder
    approvedPrice?: SortOrder
    priceReviewedById?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    config?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    managerId?: SortOrder
    createdById?: SortOrder
    assignedById?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    createdById?: SortOrder
    assignedById?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    managerId?: SortOrder
    createdById?: SortOrder
    assignedById?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nit?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    managerId?: SortOrder
    createdById?: SortOrder
    assignedById?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    createdById?: SortOrder
    assignedById?: SortOrder
  }

  export type EnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type DriverApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    reviewedAt?: SortOrder
  }

  export type DriverApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewedById?: SortOrder
  }

  export type DriverApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    reviewedAt?: SortOrder
  }

  export type DriverApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    reviewedById?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    reviewedAt?: SortOrder
  }

  export type DriverApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewedById?: SortOrder
  }

  export type EnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyCreateNestedManyWithoutManagerInput = {
    create?: XOR<CompanyCreateWithoutManagerInput, CompanyUncheckedCreateWithoutManagerInput> | CompanyCreateWithoutManagerInput[] | CompanyUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutManagerInput | CompanyCreateOrConnectWithoutManagerInput[]
    createMany?: CompanyCreateManyManagerInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CompanyCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CompanyCreateWithoutCreatedByInput, CompanyUncheckedCreateWithoutCreatedByInput> | CompanyCreateWithoutCreatedByInput[] | CompanyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutCreatedByInput | CompanyCreateOrConnectWithoutCreatedByInput[]
    createMany?: CompanyCreateManyCreatedByInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CompanyCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<CompanyCreateWithoutAssignedByInput, CompanyUncheckedCreateWithoutAssignedByInput> | CompanyCreateWithoutAssignedByInput[] | CompanyUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutAssignedByInput | CompanyCreateOrConnectWithoutAssignedByInput[]
    createMany?: CompanyCreateManyAssignedByInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutSenderInput = {
    create?: XOR<ShipmentCreateWithoutSenderInput, ShipmentUncheckedCreateWithoutSenderInput> | ShipmentCreateWithoutSenderInput[] | ShipmentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutSenderInput | ShipmentCreateOrConnectWithoutSenderInput[]
    createMany?: ShipmentCreateManySenderInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutDriverInput = {
    create?: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput> | ShipmentCreateWithoutDriverInput[] | ShipmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDriverInput | ShipmentCreateOrConnectWithoutDriverInput[]
    createMany?: ShipmentCreateManyDriverInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ShipmentCreateWithoutCreatedByInput, ShipmentUncheckedCreateWithoutCreatedByInput> | ShipmentCreateWithoutCreatedByInput[] | ShipmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCreatedByInput | ShipmentCreateOrConnectWithoutCreatedByInput[]
    createMany?: ShipmentCreateManyCreatedByInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<ShipmentCreateWithoutAssignedByInput, ShipmentUncheckedCreateWithoutAssignedByInput> | ShipmentCreateWithoutAssignedByInput[] | ShipmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutAssignedByInput | ShipmentCreateOrConnectWithoutAssignedByInput[]
    createMany?: ShipmentCreateManyAssignedByInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutPriceReviewedByInput = {
    create?: XOR<ShipmentCreateWithoutPriceReviewedByInput, ShipmentUncheckedCreateWithoutPriceReviewedByInput> | ShipmentCreateWithoutPriceReviewedByInput[] | ShipmentUncheckedCreateWithoutPriceReviewedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutPriceReviewedByInput | ShipmentCreateOrConnectWithoutPriceReviewedByInput[]
    createMany?: ShipmentCreateManyPriceReviewedByInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type DriverApplicationCreateNestedManyWithoutUserInput = {
    create?: XOR<DriverApplicationCreateWithoutUserInput, DriverApplicationUncheckedCreateWithoutUserInput> | DriverApplicationCreateWithoutUserInput[] | DriverApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverApplicationCreateOrConnectWithoutUserInput | DriverApplicationCreateOrConnectWithoutUserInput[]
    createMany?: DriverApplicationCreateManyUserInputEnvelope
    connect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
  }

  export type DriverApplicationCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<DriverApplicationCreateWithoutReviewedByInput, DriverApplicationUncheckedCreateWithoutReviewedByInput> | DriverApplicationCreateWithoutReviewedByInput[] | DriverApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: DriverApplicationCreateOrConnectWithoutReviewedByInput | DriverApplicationCreateOrConnectWithoutReviewedByInput[]
    createMany?: DriverApplicationCreateManyReviewedByInputEnvelope
    connect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<CompanyCreateWithoutManagerInput, CompanyUncheckedCreateWithoutManagerInput> | CompanyCreateWithoutManagerInput[] | CompanyUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutManagerInput | CompanyCreateOrConnectWithoutManagerInput[]
    createMany?: CompanyCreateManyManagerInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CompanyCreateWithoutCreatedByInput, CompanyUncheckedCreateWithoutCreatedByInput> | CompanyCreateWithoutCreatedByInput[] | CompanyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutCreatedByInput | CompanyCreateOrConnectWithoutCreatedByInput[]
    createMany?: CompanyCreateManyCreatedByInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<CompanyCreateWithoutAssignedByInput, CompanyUncheckedCreateWithoutAssignedByInput> | CompanyCreateWithoutAssignedByInput[] | CompanyUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutAssignedByInput | CompanyCreateOrConnectWithoutAssignedByInput[]
    createMany?: CompanyCreateManyAssignedByInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ShipmentCreateWithoutSenderInput, ShipmentUncheckedCreateWithoutSenderInput> | ShipmentCreateWithoutSenderInput[] | ShipmentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutSenderInput | ShipmentCreateOrConnectWithoutSenderInput[]
    createMany?: ShipmentCreateManySenderInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput> | ShipmentCreateWithoutDriverInput[] | ShipmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDriverInput | ShipmentCreateOrConnectWithoutDriverInput[]
    createMany?: ShipmentCreateManyDriverInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ShipmentCreateWithoutCreatedByInput, ShipmentUncheckedCreateWithoutCreatedByInput> | ShipmentCreateWithoutCreatedByInput[] | ShipmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCreatedByInput | ShipmentCreateOrConnectWithoutCreatedByInput[]
    createMany?: ShipmentCreateManyCreatedByInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<ShipmentCreateWithoutAssignedByInput, ShipmentUncheckedCreateWithoutAssignedByInput> | ShipmentCreateWithoutAssignedByInput[] | ShipmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutAssignedByInput | ShipmentCreateOrConnectWithoutAssignedByInput[]
    createMany?: ShipmentCreateManyAssignedByInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput = {
    create?: XOR<ShipmentCreateWithoutPriceReviewedByInput, ShipmentUncheckedCreateWithoutPriceReviewedByInput> | ShipmentCreateWithoutPriceReviewedByInput[] | ShipmentUncheckedCreateWithoutPriceReviewedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutPriceReviewedByInput | ShipmentCreateOrConnectWithoutPriceReviewedByInput[]
    createMany?: ShipmentCreateManyPriceReviewedByInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type DriverApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DriverApplicationCreateWithoutUserInput, DriverApplicationUncheckedCreateWithoutUserInput> | DriverApplicationCreateWithoutUserInput[] | DriverApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverApplicationCreateOrConnectWithoutUserInput | DriverApplicationCreateOrConnectWithoutUserInput[]
    createMany?: DriverApplicationCreateManyUserInputEnvelope
    connect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
  }

  export type DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: XOR<DriverApplicationCreateWithoutReviewedByInput, DriverApplicationUncheckedCreateWithoutReviewedByInput> | DriverApplicationCreateWithoutReviewedByInput[] | DriverApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: DriverApplicationCreateOrConnectWithoutReviewedByInput | DriverApplicationCreateOrConnectWithoutReviewedByInput[]
    createMany?: DriverApplicationCreateManyReviewedByInputEnvelope
    connect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompanyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateManyWithoutManagerNestedInput = {
    create?: XOR<CompanyCreateWithoutManagerInput, CompanyUncheckedCreateWithoutManagerInput> | CompanyCreateWithoutManagerInput[] | CompanyUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutManagerInput | CompanyCreateOrConnectWithoutManagerInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutManagerInput | CompanyUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: CompanyCreateManyManagerInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutManagerInput | CompanyUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutManagerInput | CompanyUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CompanyCreateWithoutCreatedByInput, CompanyUncheckedCreateWithoutCreatedByInput> | CompanyCreateWithoutCreatedByInput[] | CompanyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutCreatedByInput | CompanyCreateOrConnectWithoutCreatedByInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutCreatedByInput | CompanyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CompanyCreateManyCreatedByInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutCreatedByInput | CompanyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutCreatedByInput | CompanyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<CompanyCreateWithoutAssignedByInput, CompanyUncheckedCreateWithoutAssignedByInput> | CompanyCreateWithoutAssignedByInput[] | CompanyUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutAssignedByInput | CompanyCreateOrConnectWithoutAssignedByInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutAssignedByInput | CompanyUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: CompanyCreateManyAssignedByInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutAssignedByInput | CompanyUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutAssignedByInput | CompanyUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ShipmentCreateWithoutSenderInput, ShipmentUncheckedCreateWithoutSenderInput> | ShipmentCreateWithoutSenderInput[] | ShipmentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutSenderInput | ShipmentCreateOrConnectWithoutSenderInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutSenderInput | ShipmentUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ShipmentCreateManySenderInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutSenderInput | ShipmentUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutSenderInput | ShipmentUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutDriverNestedInput = {
    create?: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput> | ShipmentCreateWithoutDriverInput[] | ShipmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDriverInput | ShipmentCreateOrConnectWithoutDriverInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutDriverInput | ShipmentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: ShipmentCreateManyDriverInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutDriverInput | ShipmentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutDriverInput | ShipmentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ShipmentCreateWithoutCreatedByInput, ShipmentUncheckedCreateWithoutCreatedByInput> | ShipmentCreateWithoutCreatedByInput[] | ShipmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCreatedByInput | ShipmentCreateOrConnectWithoutCreatedByInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCreatedByInput | ShipmentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ShipmentCreateManyCreatedByInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCreatedByInput | ShipmentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCreatedByInput | ShipmentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<ShipmentCreateWithoutAssignedByInput, ShipmentUncheckedCreateWithoutAssignedByInput> | ShipmentCreateWithoutAssignedByInput[] | ShipmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutAssignedByInput | ShipmentCreateOrConnectWithoutAssignedByInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutAssignedByInput | ShipmentUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: ShipmentCreateManyAssignedByInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutAssignedByInput | ShipmentUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutAssignedByInput | ShipmentUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutPriceReviewedByNestedInput = {
    create?: XOR<ShipmentCreateWithoutPriceReviewedByInput, ShipmentUncheckedCreateWithoutPriceReviewedByInput> | ShipmentCreateWithoutPriceReviewedByInput[] | ShipmentUncheckedCreateWithoutPriceReviewedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutPriceReviewedByInput | ShipmentCreateOrConnectWithoutPriceReviewedByInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutPriceReviewedByInput | ShipmentUpsertWithWhereUniqueWithoutPriceReviewedByInput[]
    createMany?: ShipmentCreateManyPriceReviewedByInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutPriceReviewedByInput | ShipmentUpdateWithWhereUniqueWithoutPriceReviewedByInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutPriceReviewedByInput | ShipmentUpdateManyWithWhereWithoutPriceReviewedByInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type DriverApplicationUpdateManyWithoutUserNestedInput = {
    create?: XOR<DriverApplicationCreateWithoutUserInput, DriverApplicationUncheckedCreateWithoutUserInput> | DriverApplicationCreateWithoutUserInput[] | DriverApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverApplicationCreateOrConnectWithoutUserInput | DriverApplicationCreateOrConnectWithoutUserInput[]
    upsert?: DriverApplicationUpsertWithWhereUniqueWithoutUserInput | DriverApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DriverApplicationCreateManyUserInputEnvelope
    set?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    disconnect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    delete?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    connect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    update?: DriverApplicationUpdateWithWhereUniqueWithoutUserInput | DriverApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DriverApplicationUpdateManyWithWhereWithoutUserInput | DriverApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DriverApplicationScalarWhereInput | DriverApplicationScalarWhereInput[]
  }

  export type DriverApplicationUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<DriverApplicationCreateWithoutReviewedByInput, DriverApplicationUncheckedCreateWithoutReviewedByInput> | DriverApplicationCreateWithoutReviewedByInput[] | DriverApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: DriverApplicationCreateOrConnectWithoutReviewedByInput | DriverApplicationCreateOrConnectWithoutReviewedByInput[]
    upsert?: DriverApplicationUpsertWithWhereUniqueWithoutReviewedByInput | DriverApplicationUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: DriverApplicationCreateManyReviewedByInputEnvelope
    set?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    disconnect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    delete?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    connect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    update?: DriverApplicationUpdateWithWhereUniqueWithoutReviewedByInput | DriverApplicationUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: DriverApplicationUpdateManyWithWhereWithoutReviewedByInput | DriverApplicationUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: DriverApplicationScalarWhereInput | DriverApplicationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<CompanyCreateWithoutManagerInput, CompanyUncheckedCreateWithoutManagerInput> | CompanyCreateWithoutManagerInput[] | CompanyUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutManagerInput | CompanyCreateOrConnectWithoutManagerInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutManagerInput | CompanyUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: CompanyCreateManyManagerInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutManagerInput | CompanyUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutManagerInput | CompanyUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CompanyCreateWithoutCreatedByInput, CompanyUncheckedCreateWithoutCreatedByInput> | CompanyCreateWithoutCreatedByInput[] | CompanyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutCreatedByInput | CompanyCreateOrConnectWithoutCreatedByInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutCreatedByInput | CompanyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CompanyCreateManyCreatedByInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutCreatedByInput | CompanyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutCreatedByInput | CompanyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<CompanyCreateWithoutAssignedByInput, CompanyUncheckedCreateWithoutAssignedByInput> | CompanyCreateWithoutAssignedByInput[] | CompanyUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutAssignedByInput | CompanyCreateOrConnectWithoutAssignedByInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutAssignedByInput | CompanyUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: CompanyCreateManyAssignedByInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutAssignedByInput | CompanyUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutAssignedByInput | CompanyUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ShipmentCreateWithoutSenderInput, ShipmentUncheckedCreateWithoutSenderInput> | ShipmentCreateWithoutSenderInput[] | ShipmentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutSenderInput | ShipmentCreateOrConnectWithoutSenderInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutSenderInput | ShipmentUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ShipmentCreateManySenderInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutSenderInput | ShipmentUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutSenderInput | ShipmentUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput> | ShipmentCreateWithoutDriverInput[] | ShipmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDriverInput | ShipmentCreateOrConnectWithoutDriverInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutDriverInput | ShipmentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: ShipmentCreateManyDriverInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutDriverInput | ShipmentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutDriverInput | ShipmentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ShipmentCreateWithoutCreatedByInput, ShipmentUncheckedCreateWithoutCreatedByInput> | ShipmentCreateWithoutCreatedByInput[] | ShipmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCreatedByInput | ShipmentCreateOrConnectWithoutCreatedByInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCreatedByInput | ShipmentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ShipmentCreateManyCreatedByInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCreatedByInput | ShipmentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCreatedByInput | ShipmentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<ShipmentCreateWithoutAssignedByInput, ShipmentUncheckedCreateWithoutAssignedByInput> | ShipmentCreateWithoutAssignedByInput[] | ShipmentUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutAssignedByInput | ShipmentCreateOrConnectWithoutAssignedByInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutAssignedByInput | ShipmentUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: ShipmentCreateManyAssignedByInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutAssignedByInput | ShipmentUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutAssignedByInput | ShipmentUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput = {
    create?: XOR<ShipmentCreateWithoutPriceReviewedByInput, ShipmentUncheckedCreateWithoutPriceReviewedByInput> | ShipmentCreateWithoutPriceReviewedByInput[] | ShipmentUncheckedCreateWithoutPriceReviewedByInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutPriceReviewedByInput | ShipmentCreateOrConnectWithoutPriceReviewedByInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutPriceReviewedByInput | ShipmentUpsertWithWhereUniqueWithoutPriceReviewedByInput[]
    createMany?: ShipmentCreateManyPriceReviewedByInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutPriceReviewedByInput | ShipmentUpdateWithWhereUniqueWithoutPriceReviewedByInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutPriceReviewedByInput | ShipmentUpdateManyWithWhereWithoutPriceReviewedByInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type DriverApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DriverApplicationCreateWithoutUserInput, DriverApplicationUncheckedCreateWithoutUserInput> | DriverApplicationCreateWithoutUserInput[] | DriverApplicationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverApplicationCreateOrConnectWithoutUserInput | DriverApplicationCreateOrConnectWithoutUserInput[]
    upsert?: DriverApplicationUpsertWithWhereUniqueWithoutUserInput | DriverApplicationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DriverApplicationCreateManyUserInputEnvelope
    set?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    disconnect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    delete?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    connect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    update?: DriverApplicationUpdateWithWhereUniqueWithoutUserInput | DriverApplicationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DriverApplicationUpdateManyWithWhereWithoutUserInput | DriverApplicationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DriverApplicationScalarWhereInput | DriverApplicationScalarWhereInput[]
  }

  export type DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: XOR<DriverApplicationCreateWithoutReviewedByInput, DriverApplicationUncheckedCreateWithoutReviewedByInput> | DriverApplicationCreateWithoutReviewedByInput[] | DriverApplicationUncheckedCreateWithoutReviewedByInput[]
    connectOrCreate?: DriverApplicationCreateOrConnectWithoutReviewedByInput | DriverApplicationCreateOrConnectWithoutReviewedByInput[]
    upsert?: DriverApplicationUpsertWithWhereUniqueWithoutReviewedByInput | DriverApplicationUpsertWithWhereUniqueWithoutReviewedByInput[]
    createMany?: DriverApplicationCreateManyReviewedByInputEnvelope
    set?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    disconnect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    delete?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    connect?: DriverApplicationWhereUniqueInput | DriverApplicationWhereUniqueInput[]
    update?: DriverApplicationUpdateWithWhereUniqueWithoutReviewedByInput | DriverApplicationUpdateWithWhereUniqueWithoutReviewedByInput[]
    updateMany?: DriverApplicationUpdateManyWithWhereWithoutReviewedByInput | DriverApplicationUpdateManyWithWhereWithoutReviewedByInput[]
    deleteMany?: DriverApplicationScalarWhereInput | DriverApplicationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCustomerShipmentsInput = {
    create?: XOR<UserCreateWithoutCustomerShipmentsInput, UserUncheckedCreateWithoutCustomerShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerShipmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDriverShipmentsInput = {
    create?: XOR<UserCreateWithoutDriverShipmentsInput, UserUncheckedCreateWithoutDriverShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriverShipmentsInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<CompanyCreateWithoutShipmentsInput, CompanyUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutShipmentsInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedShipmentsInput = {
    create?: XOR<UserCreateWithoutCreatedShipmentsInput, UserUncheckedCreateWithoutCreatedShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedShipmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedShipmentsInput = {
    create?: XOR<UserCreateWithoutAssignedShipmentsInput, UserUncheckedCreateWithoutAssignedShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedShipmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPriceReviewedShipmentsInput = {
    create?: XOR<UserCreateWithoutPriceReviewedShipmentsInput, UserUncheckedCreateWithoutPriceReviewedShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceReviewedShipmentsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumShipmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShipmentStatus
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutCustomerShipmentsNestedInput = {
    create?: XOR<UserCreateWithoutCustomerShipmentsInput, UserUncheckedCreateWithoutCustomerShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerShipmentsInput
    upsert?: UserUpsertWithoutCustomerShipmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomerShipmentsInput, UserUpdateWithoutCustomerShipmentsInput>, UserUncheckedUpdateWithoutCustomerShipmentsInput>
  }

  export type UserUpdateOneWithoutDriverShipmentsNestedInput = {
    create?: XOR<UserCreateWithoutDriverShipmentsInput, UserUncheckedCreateWithoutDriverShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriverShipmentsInput
    upsert?: UserUpsertWithoutDriverShipmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDriverShipmentsInput, UserUpdateWithoutDriverShipmentsInput>, UserUncheckedUpdateWithoutDriverShipmentsInput>
  }

  export type CompanyUpdateOneWithoutShipmentsNestedInput = {
    create?: XOR<CompanyCreateWithoutShipmentsInput, CompanyUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutShipmentsInput
    upsert?: CompanyUpsertWithoutShipmentsInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutShipmentsInput, CompanyUpdateWithoutShipmentsInput>, CompanyUncheckedUpdateWithoutShipmentsInput>
  }

  export type UserUpdateOneWithoutCreatedShipmentsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedShipmentsInput, UserUncheckedCreateWithoutCreatedShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedShipmentsInput
    upsert?: UserUpsertWithoutCreatedShipmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedShipmentsInput, UserUpdateWithoutCreatedShipmentsInput>, UserUncheckedUpdateWithoutCreatedShipmentsInput>
  }

  export type UserUpdateOneWithoutAssignedShipmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedShipmentsInput, UserUncheckedCreateWithoutAssignedShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedShipmentsInput
    upsert?: UserUpsertWithoutAssignedShipmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedShipmentsInput, UserUpdateWithoutAssignedShipmentsInput>, UserUncheckedUpdateWithoutAssignedShipmentsInput>
  }

  export type UserUpdateOneWithoutPriceReviewedShipmentsNestedInput = {
    create?: XOR<UserCreateWithoutPriceReviewedShipmentsInput, UserUncheckedCreateWithoutPriceReviewedShipmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceReviewedShipmentsInput
    upsert?: UserUpsertWithoutPriceReviewedShipmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPriceReviewedShipmentsInput, UserUpdateWithoutPriceReviewedShipmentsInput>, UserUncheckedUpdateWithoutPriceReviewedShipmentsInput>
  }

  export type UserCreateNestedOneWithoutManagedCompaniesInput = {
    create?: XOR<UserCreateWithoutManagedCompaniesInput, UserUncheckedCreateWithoutManagedCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedCompaniesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedCompaniesInput = {
    create?: XOR<UserCreateWithoutCreatedCompaniesInput, UserUncheckedCreateWithoutCreatedCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCompaniesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedCompaniesInput = {
    create?: XOR<UserCreateWithoutAssignedCompaniesInput, UserUncheckedCreateWithoutAssignedCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedCompaniesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput> | ShipmentCreateWithoutCompanyInput[] | ShipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCompanyInput | ShipmentCreateOrConnectWithoutCompanyInput[]
    createMany?: ShipmentCreateManyCompanyInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput> | ShipmentCreateWithoutCompanyInput[] | ShipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCompanyInput | ShipmentCreateOrConnectWithoutCompanyInput[]
    createMany?: ShipmentCreateManyCompanyInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutManagedCompaniesNestedInput = {
    create?: XOR<UserCreateWithoutManagedCompaniesInput, UserUncheckedCreateWithoutManagedCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedCompaniesInput
    upsert?: UserUpsertWithoutManagedCompaniesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagedCompaniesInput, UserUpdateWithoutManagedCompaniesInput>, UserUncheckedUpdateWithoutManagedCompaniesInput>
  }

  export type UserUpdateOneWithoutCreatedCompaniesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCompaniesInput, UserUncheckedCreateWithoutCreatedCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCompaniesInput
    upsert?: UserUpsertWithoutCreatedCompaniesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCompaniesInput, UserUpdateWithoutCreatedCompaniesInput>, UserUncheckedUpdateWithoutCreatedCompaniesInput>
  }

  export type UserUpdateOneWithoutAssignedCompaniesNestedInput = {
    create?: XOR<UserCreateWithoutAssignedCompaniesInput, UserUncheckedCreateWithoutAssignedCompaniesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedCompaniesInput
    upsert?: UserUpsertWithoutAssignedCompaniesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedCompaniesInput, UserUpdateWithoutAssignedCompaniesInput>, UserUncheckedUpdateWithoutAssignedCompaniesInput>
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput> | ShipmentCreateWithoutCompanyInput[] | ShipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCompanyInput | ShipmentCreateOrConnectWithoutCompanyInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCompanyInput | ShipmentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ShipmentCreateManyCompanyInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCompanyInput | ShipmentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCompanyInput | ShipmentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput> | ShipmentCreateWithoutCompanyInput[] | ShipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCompanyInput | ShipmentCreateOrConnectWithoutCompanyInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCompanyInput | ShipmentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ShipmentCreateManyCompanyInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCompanyInput | ShipmentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCompanyInput | ShipmentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDriverApplicationsInput = {
    create?: XOR<UserCreateWithoutDriverApplicationsInput, UserUncheckedCreateWithoutDriverApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriverApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewedApplicationsInput = {
    create?: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumApprovalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalStatus
  }

  export type UserUpdateOneRequiredWithoutDriverApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutDriverApplicationsInput, UserUncheckedCreateWithoutDriverApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriverApplicationsInput
    upsert?: UserUpsertWithoutDriverApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDriverApplicationsInput, UserUpdateWithoutDriverApplicationsInput>, UserUncheckedUpdateWithoutDriverApplicationsInput>
  }

  export type UserUpdateOneWithoutReviewedApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewedApplicationsInput
    upsert?: UserUpsertWithoutReviewedApplicationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewedApplicationsInput, UserUpdateWithoutReviewedApplicationsInput>, UserUncheckedUpdateWithoutReviewedApplicationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumApprovalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusFilter<$PrismaModel> | $Enums.ApprovalStatus
  }

  export type NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalStatus | EnumApprovalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalStatus[] | ListEnumApprovalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalStatusFilter<$PrismaModel>
    _max?: NestedEnumApprovalStatusFilter<$PrismaModel>
  }

  export type CompanyCreateWithoutUsersInput = {
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutManagedCompaniesInput
    createdBy?: UserCreateNestedOneWithoutCreatedCompaniesInput
    assignedBy?: UserCreateNestedOneWithoutAssignedCompaniesInput
    shipments?: ShipmentCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    managerId?: number | null
    createdById?: number | null
    assignedById?: number | null
    createdAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type CompanyCreateWithoutManagerInput = {
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedCompaniesInput
    assignedBy?: UserCreateNestedOneWithoutAssignedCompaniesInput
    users?: UserCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutManagerInput = {
    id?: number
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    createdById?: number | null
    assignedById?: number | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutManagerInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutManagerInput, CompanyUncheckedCreateWithoutManagerInput>
  }

  export type CompanyCreateManyManagerInputEnvelope = {
    data: CompanyCreateManyManagerInput | CompanyCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutCreatedByInput = {
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutManagedCompaniesInput
    assignedBy?: UserCreateNestedOneWithoutAssignedCompaniesInput
    users?: UserCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCreatedByInput = {
    id?: number
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    managerId?: number | null
    assignedById?: number | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCreatedByInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCreatedByInput, CompanyUncheckedCreateWithoutCreatedByInput>
  }

  export type CompanyCreateManyCreatedByInputEnvelope = {
    data: CompanyCreateManyCreatedByInput | CompanyCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutAssignedByInput = {
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutManagedCompaniesInput
    createdBy?: UserCreateNestedOneWithoutCreatedCompaniesInput
    users?: UserCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutAssignedByInput = {
    id?: number
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    managerId?: number | null
    createdById?: number | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutAssignedByInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutAssignedByInput, CompanyUncheckedCreateWithoutAssignedByInput>
  }

  export type CompanyCreateManyAssignedByInputEnvelope = {
    data: CompanyCreateManyAssignedByInput | CompanyCreateManyAssignedByInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutSenderInput = {
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: UserCreateNestedOneWithoutDriverShipmentsInput
    company?: CompanyCreateNestedOneWithoutShipmentsInput
    createdBy?: UserCreateNestedOneWithoutCreatedShipmentsInput
    assignedBy?: UserCreateNestedOneWithoutAssignedShipmentsInput
    priceReviewedBy?: UserCreateNestedOneWithoutPriceReviewedShipmentsInput
  }

  export type ShipmentUncheckedCreateWithoutSenderInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    driverId?: number | null
    companyId?: number | null
    createdById?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateOrConnectWithoutSenderInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutSenderInput, ShipmentUncheckedCreateWithoutSenderInput>
  }

  export type ShipmentCreateManySenderInputEnvelope = {
    data: ShipmentCreateManySenderInput | ShipmentCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutDriverInput = {
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCustomerShipmentsInput
    company?: CompanyCreateNestedOneWithoutShipmentsInput
    createdBy?: UserCreateNestedOneWithoutCreatedShipmentsInput
    assignedBy?: UserCreateNestedOneWithoutAssignedShipmentsInput
    priceReviewedBy?: UserCreateNestedOneWithoutPriceReviewedShipmentsInput
  }

  export type ShipmentUncheckedCreateWithoutDriverInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    companyId?: number | null
    createdById?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateOrConnectWithoutDriverInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput>
  }

  export type ShipmentCreateManyDriverInputEnvelope = {
    data: ShipmentCreateManyDriverInput | ShipmentCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutCreatedByInput = {
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCustomerShipmentsInput
    driver?: UserCreateNestedOneWithoutDriverShipmentsInput
    company?: CompanyCreateNestedOneWithoutShipmentsInput
    assignedBy?: UserCreateNestedOneWithoutAssignedShipmentsInput
    priceReviewedBy?: UserCreateNestedOneWithoutPriceReviewedShipmentsInput
  }

  export type ShipmentUncheckedCreateWithoutCreatedByInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    driverId?: number | null
    companyId?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateOrConnectWithoutCreatedByInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutCreatedByInput, ShipmentUncheckedCreateWithoutCreatedByInput>
  }

  export type ShipmentCreateManyCreatedByInputEnvelope = {
    data: ShipmentCreateManyCreatedByInput | ShipmentCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutAssignedByInput = {
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCustomerShipmentsInput
    driver?: UserCreateNestedOneWithoutDriverShipmentsInput
    company?: CompanyCreateNestedOneWithoutShipmentsInput
    createdBy?: UserCreateNestedOneWithoutCreatedShipmentsInput
    priceReviewedBy?: UserCreateNestedOneWithoutPriceReviewedShipmentsInput
  }

  export type ShipmentUncheckedCreateWithoutAssignedByInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    driverId?: number | null
    companyId?: number | null
    createdById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateOrConnectWithoutAssignedByInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutAssignedByInput, ShipmentUncheckedCreateWithoutAssignedByInput>
  }

  export type ShipmentCreateManyAssignedByInputEnvelope = {
    data: ShipmentCreateManyAssignedByInput | ShipmentCreateManyAssignedByInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutPriceReviewedByInput = {
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCustomerShipmentsInput
    driver?: UserCreateNestedOneWithoutDriverShipmentsInput
    company?: CompanyCreateNestedOneWithoutShipmentsInput
    createdBy?: UserCreateNestedOneWithoutCreatedShipmentsInput
    assignedBy?: UserCreateNestedOneWithoutAssignedShipmentsInput
  }

  export type ShipmentUncheckedCreateWithoutPriceReviewedByInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    driverId?: number | null
    companyId?: number | null
    createdById?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateOrConnectWithoutPriceReviewedByInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutPriceReviewedByInput, ShipmentUncheckedCreateWithoutPriceReviewedByInput>
  }

  export type ShipmentCreateManyPriceReviewedByInputEnvelope = {
    data: ShipmentCreateManyPriceReviewedByInput | ShipmentCreateManyPriceReviewedByInput[]
    skipDuplicates?: boolean
  }

  export type DriverApplicationCreateWithoutUserInput = {
    status?: $Enums.ApprovalStatus
    notes?: string | null
    createdAt?: Date | string
    reviewedAt?: Date | string | null
    reviewedBy?: UserCreateNestedOneWithoutReviewedApplicationsInput
  }

  export type DriverApplicationUncheckedCreateWithoutUserInput = {
    id?: number
    status?: $Enums.ApprovalStatus
    reviewedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    reviewedAt?: Date | string | null
  }

  export type DriverApplicationCreateOrConnectWithoutUserInput = {
    where: DriverApplicationWhereUniqueInput
    create: XOR<DriverApplicationCreateWithoutUserInput, DriverApplicationUncheckedCreateWithoutUserInput>
  }

  export type DriverApplicationCreateManyUserInputEnvelope = {
    data: DriverApplicationCreateManyUserInput | DriverApplicationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DriverApplicationCreateWithoutReviewedByInput = {
    status?: $Enums.ApprovalStatus
    notes?: string | null
    createdAt?: Date | string
    reviewedAt?: Date | string | null
    user: UserCreateNestedOneWithoutDriverApplicationsInput
  }

  export type DriverApplicationUncheckedCreateWithoutReviewedByInput = {
    id?: number
    userId: number
    status?: $Enums.ApprovalStatus
    notes?: string | null
    createdAt?: Date | string
    reviewedAt?: Date | string | null
  }

  export type DriverApplicationCreateOrConnectWithoutReviewedByInput = {
    where: DriverApplicationWhereUniqueInput
    create: XOR<DriverApplicationCreateWithoutReviewedByInput, DriverApplicationUncheckedCreateWithoutReviewedByInput>
  }

  export type DriverApplicationCreateManyReviewedByInputEnvelope = {
    data: DriverApplicationCreateManyReviewedByInput | DriverApplicationCreateManyReviewedByInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutManagedCompaniesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedCompaniesNestedInput
    assignedBy?: UserUpdateOneWithoutAssignedCompaniesNestedInput
    shipments?: ShipmentUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUpsertWithWhereUniqueWithoutManagerInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutManagerInput, CompanyUncheckedUpdateWithoutManagerInput>
    create: XOR<CompanyCreateWithoutManagerInput, CompanyUncheckedCreateWithoutManagerInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutManagerInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutManagerInput, CompanyUncheckedUpdateWithoutManagerInput>
  }

  export type CompanyUpdateManyWithWhereWithoutManagerInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutManagerInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    nit?: StringFilter<"Company"> | string
    address?: StringNullableFilter<"Company"> | string | null
    isActive?: BoolFilter<"Company"> | boolean
    managerId?: IntNullableFilter<"Company"> | number | null
    createdById?: IntNullableFilter<"Company"> | number | null
    assignedById?: IntNullableFilter<"Company"> | number | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
  }

  export type CompanyUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutCreatedByInput, CompanyUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CompanyCreateWithoutCreatedByInput, CompanyUncheckedCreateWithoutCreatedByInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutCreatedByInput, CompanyUncheckedUpdateWithoutCreatedByInput>
  }

  export type CompanyUpdateManyWithWhereWithoutCreatedByInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CompanyUpsertWithWhereUniqueWithoutAssignedByInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutAssignedByInput, CompanyUncheckedUpdateWithoutAssignedByInput>
    create: XOR<CompanyCreateWithoutAssignedByInput, CompanyUncheckedCreateWithoutAssignedByInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutAssignedByInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutAssignedByInput, CompanyUncheckedUpdateWithoutAssignedByInput>
  }

  export type CompanyUpdateManyWithWhereWithoutAssignedByInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutAssignedByInput>
  }

  export type ShipmentUpsertWithWhereUniqueWithoutSenderInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutSenderInput, ShipmentUncheckedUpdateWithoutSenderInput>
    create: XOR<ShipmentCreateWithoutSenderInput, ShipmentUncheckedCreateWithoutSenderInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutSenderInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutSenderInput, ShipmentUncheckedUpdateWithoutSenderInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutSenderInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutSenderInput>
  }

  export type ShipmentScalarWhereInput = {
    AND?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    OR?: ShipmentScalarWhereInput[]
    NOT?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    id?: IntFilter<"Shipment"> | number
    cargoType?: StringFilter<"Shipment"> | string
    weight?: FloatFilter<"Shipment"> | number
    dimensions?: StringNullableFilter<"Shipment"> | string | null
    origin?: StringFilter<"Shipment"> | string
    destination?: StringFilter<"Shipment"> | string
    timeline?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    senderId?: IntFilter<"Shipment"> | number
    driverId?: IntNullableFilter<"Shipment"> | number | null
    companyId?: IntNullableFilter<"Shipment"> | number | null
    createdById?: IntNullableFilter<"Shipment"> | number | null
    assignedById?: IntNullableFilter<"Shipment"> | number | null
    proposedPrice?: DecimalNullableFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: DecimalNullableFilter<"Shipment"> | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: IntNullableFilter<"Shipment"> | number | null
    priceReviewedAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Shipment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
  }

  export type ShipmentUpsertWithWhereUniqueWithoutDriverInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutDriverInput, ShipmentUncheckedUpdateWithoutDriverInput>
    create: XOR<ShipmentCreateWithoutDriverInput, ShipmentUncheckedCreateWithoutDriverInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutDriverInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutDriverInput, ShipmentUncheckedUpdateWithoutDriverInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutDriverInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutDriverInput>
  }

  export type ShipmentUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutCreatedByInput, ShipmentUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ShipmentCreateWithoutCreatedByInput, ShipmentUncheckedCreateWithoutCreatedByInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutCreatedByInput, ShipmentUncheckedUpdateWithoutCreatedByInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutCreatedByInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ShipmentUpsertWithWhereUniqueWithoutAssignedByInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutAssignedByInput, ShipmentUncheckedUpdateWithoutAssignedByInput>
    create: XOR<ShipmentCreateWithoutAssignedByInput, ShipmentUncheckedCreateWithoutAssignedByInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutAssignedByInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutAssignedByInput, ShipmentUncheckedUpdateWithoutAssignedByInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutAssignedByInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutAssignedByInput>
  }

  export type ShipmentUpsertWithWhereUniqueWithoutPriceReviewedByInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutPriceReviewedByInput, ShipmentUncheckedUpdateWithoutPriceReviewedByInput>
    create: XOR<ShipmentCreateWithoutPriceReviewedByInput, ShipmentUncheckedCreateWithoutPriceReviewedByInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutPriceReviewedByInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutPriceReviewedByInput, ShipmentUncheckedUpdateWithoutPriceReviewedByInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutPriceReviewedByInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutPriceReviewedByInput>
  }

  export type DriverApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: DriverApplicationWhereUniqueInput
    update: XOR<DriverApplicationUpdateWithoutUserInput, DriverApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<DriverApplicationCreateWithoutUserInput, DriverApplicationUncheckedCreateWithoutUserInput>
  }

  export type DriverApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: DriverApplicationWhereUniqueInput
    data: XOR<DriverApplicationUpdateWithoutUserInput, DriverApplicationUncheckedUpdateWithoutUserInput>
  }

  export type DriverApplicationUpdateManyWithWhereWithoutUserInput = {
    where: DriverApplicationScalarWhereInput
    data: XOR<DriverApplicationUpdateManyMutationInput, DriverApplicationUncheckedUpdateManyWithoutUserInput>
  }

  export type DriverApplicationScalarWhereInput = {
    AND?: DriverApplicationScalarWhereInput | DriverApplicationScalarWhereInput[]
    OR?: DriverApplicationScalarWhereInput[]
    NOT?: DriverApplicationScalarWhereInput | DriverApplicationScalarWhereInput[]
    id?: IntFilter<"DriverApplication"> | number
    userId?: IntFilter<"DriverApplication"> | number
    status?: EnumApprovalStatusFilter<"DriverApplication"> | $Enums.ApprovalStatus
    reviewedById?: IntNullableFilter<"DriverApplication"> | number | null
    notes?: StringNullableFilter<"DriverApplication"> | string | null
    createdAt?: DateTimeFilter<"DriverApplication"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"DriverApplication"> | Date | string | null
  }

  export type DriverApplicationUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: DriverApplicationWhereUniqueInput
    update: XOR<DriverApplicationUpdateWithoutReviewedByInput, DriverApplicationUncheckedUpdateWithoutReviewedByInput>
    create: XOR<DriverApplicationCreateWithoutReviewedByInput, DriverApplicationUncheckedCreateWithoutReviewedByInput>
  }

  export type DriverApplicationUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: DriverApplicationWhereUniqueInput
    data: XOR<DriverApplicationUpdateWithoutReviewedByInput, DriverApplicationUncheckedUpdateWithoutReviewedByInput>
  }

  export type DriverApplicationUpdateManyWithWhereWithoutReviewedByInput = {
    where: DriverApplicationScalarWhereInput
    data: XOR<DriverApplicationUpdateManyMutationInput, DriverApplicationUncheckedUpdateManyWithoutReviewedByInput>
  }

  export type UserCreateWithoutCustomerShipmentsInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    managedCompanies?: CompanyCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyCreateNestedManyWithoutAssignedByInput
    driverShipments?: ShipmentCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutCustomerShipmentsInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
    managedCompanies?: CompanyUncheckedCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyUncheckedCreateNestedManyWithoutAssignedByInput
    driverShipments?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentUncheckedCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentUncheckedCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutCustomerShipmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerShipmentsInput, UserUncheckedCreateWithoutCustomerShipmentsInput>
  }

  export type UserCreateWithoutDriverShipmentsInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    managedCompanies?: CompanyCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentCreateNestedManyWithoutSenderInput
    createdShipments?: ShipmentCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutDriverShipmentsInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
    managedCompanies?: CompanyUncheckedCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyUncheckedCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderInput
    createdShipments?: ShipmentUncheckedCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentUncheckedCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutDriverShipmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDriverShipmentsInput, UserUncheckedCreateWithoutDriverShipmentsInput>
  }

  export type CompanyCreateWithoutShipmentsInput = {
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutManagedCompaniesInput
    createdBy?: UserCreateNestedOneWithoutCreatedCompaniesInput
    assignedBy?: UserCreateNestedOneWithoutAssignedCompaniesInput
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutShipmentsInput = {
    id?: number
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    managerId?: number | null
    createdById?: number | null
    assignedById?: number | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutShipmentsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutShipmentsInput, CompanyUncheckedCreateWithoutShipmentsInput>
  }

  export type UserCreateWithoutCreatedShipmentsInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    managedCompanies?: CompanyCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentCreateNestedManyWithoutDriverInput
    assignedShipments?: ShipmentCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutCreatedShipmentsInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
    managedCompanies?: CompanyUncheckedCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyUncheckedCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    assignedShipments?: ShipmentUncheckedCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutCreatedShipmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedShipmentsInput, UserUncheckedCreateWithoutCreatedShipmentsInput>
  }

  export type UserCreateWithoutAssignedShipmentsInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    managedCompanies?: CompanyCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentCreateNestedManyWithoutCreatedByInput
    priceReviewedShipments?: ShipmentCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutAssignedShipmentsInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
    managedCompanies?: CompanyUncheckedCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyUncheckedCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentUncheckedCreateNestedManyWithoutCreatedByInput
    priceReviewedShipments?: ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutAssignedShipmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedShipmentsInput, UserUncheckedCreateWithoutAssignedShipmentsInput>
  }

  export type UserCreateWithoutPriceReviewedShipmentsInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    managedCompanies?: CompanyCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentCreateNestedManyWithoutAssignedByInput
    driverApplications?: DriverApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutPriceReviewedShipmentsInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
    managedCompanies?: CompanyUncheckedCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyUncheckedCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentUncheckedCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentUncheckedCreateNestedManyWithoutAssignedByInput
    driverApplications?: DriverApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutPriceReviewedShipmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPriceReviewedShipmentsInput, UserUncheckedCreateWithoutPriceReviewedShipmentsInput>
  }

  export type UserUpsertWithoutCustomerShipmentsInput = {
    update: XOR<UserUpdateWithoutCustomerShipmentsInput, UserUncheckedUpdateWithoutCustomerShipmentsInput>
    create: XOR<UserCreateWithoutCustomerShipmentsInput, UserUncheckedCreateWithoutCustomerShipmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomerShipmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomerShipmentsInput, UserUncheckedUpdateWithoutCustomerShipmentsInput>
  }

  export type UserUpdateWithoutCustomerShipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    managedCompanies?: CompanyUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUpdateManyWithoutAssignedByNestedInput
    driverShipments?: ShipmentUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerShipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managedCompanies?: CompanyUncheckedUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUncheckedUpdateManyWithoutAssignedByNestedInput
    driverShipments?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUpsertWithoutDriverShipmentsInput = {
    update: XOR<UserUpdateWithoutDriverShipmentsInput, UserUncheckedUpdateWithoutDriverShipmentsInput>
    create: XOR<UserCreateWithoutDriverShipmentsInput, UserUncheckedCreateWithoutDriverShipmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDriverShipmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDriverShipmentsInput, UserUncheckedUpdateWithoutDriverShipmentsInput>
  }

  export type UserUpdateWithoutDriverShipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    managedCompanies?: CompanyUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUpdateManyWithoutSenderNestedInput
    createdShipments?: ShipmentUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDriverShipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managedCompanies?: CompanyUncheckedUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUncheckedUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUncheckedUpdateManyWithoutSenderNestedInput
    createdShipments?: ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type CompanyUpsertWithoutShipmentsInput = {
    update: XOR<CompanyUpdateWithoutShipmentsInput, CompanyUncheckedUpdateWithoutShipmentsInput>
    create: XOR<CompanyCreateWithoutShipmentsInput, CompanyUncheckedCreateWithoutShipmentsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutShipmentsInput, CompanyUncheckedUpdateWithoutShipmentsInput>
  }

  export type CompanyUpdateWithoutShipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutManagedCompaniesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedCompaniesNestedInput
    assignedBy?: UserUpdateOneWithoutAssignedCompaniesNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutShipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutCreatedShipmentsInput = {
    update: XOR<UserUpdateWithoutCreatedShipmentsInput, UserUncheckedUpdateWithoutCreatedShipmentsInput>
    create: XOR<UserCreateWithoutCreatedShipmentsInput, UserUncheckedCreateWithoutCreatedShipmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedShipmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedShipmentsInput, UserUncheckedUpdateWithoutCreatedShipmentsInput>
  }

  export type UserUpdateWithoutCreatedShipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    managedCompanies?: CompanyUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUpdateManyWithoutDriverNestedInput
    assignedShipments?: ShipmentUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedShipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managedCompanies?: CompanyUncheckedUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUncheckedUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUncheckedUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    assignedShipments?: ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUpsertWithoutAssignedShipmentsInput = {
    update: XOR<UserUpdateWithoutAssignedShipmentsInput, UserUncheckedUpdateWithoutAssignedShipmentsInput>
    create: XOR<UserCreateWithoutAssignedShipmentsInput, UserUncheckedCreateWithoutAssignedShipmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedShipmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedShipmentsInput, UserUncheckedUpdateWithoutAssignedShipmentsInput>
  }

  export type UserUpdateWithoutAssignedShipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    managedCompanies?: CompanyUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUpdateManyWithoutCreatedByNestedInput
    priceReviewedShipments?: ShipmentUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedShipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managedCompanies?: CompanyUncheckedUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUncheckedUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUncheckedUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput
    priceReviewedShipments?: ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUpsertWithoutPriceReviewedShipmentsInput = {
    update: XOR<UserUpdateWithoutPriceReviewedShipmentsInput, UserUncheckedUpdateWithoutPriceReviewedShipmentsInput>
    create: XOR<UserCreateWithoutPriceReviewedShipmentsInput, UserUncheckedCreateWithoutPriceReviewedShipmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPriceReviewedShipmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPriceReviewedShipmentsInput, UserUncheckedUpdateWithoutPriceReviewedShipmentsInput>
  }

  export type UserUpdateWithoutPriceReviewedShipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    managedCompanies?: CompanyUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUpdateManyWithoutAssignedByNestedInput
    driverApplications?: DriverApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPriceReviewedShipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managedCompanies?: CompanyUncheckedUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUncheckedUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUncheckedUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput
    driverApplications?: DriverApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type UserCreateWithoutManagedCompaniesInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    createdCompanies?: CompanyCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutManagedCompaniesInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
    createdCompanies?: CompanyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyUncheckedCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentUncheckedCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentUncheckedCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutManagedCompaniesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagedCompaniesInput, UserUncheckedCreateWithoutManagedCompaniesInput>
  }

  export type UserCreateWithoutCreatedCompaniesInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    managedCompanies?: CompanyCreateNestedManyWithoutManagerInput
    assignedCompanies?: CompanyCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutCreatedCompaniesInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
    managedCompanies?: CompanyUncheckedCreateNestedManyWithoutManagerInput
    assignedCompanies?: CompanyUncheckedCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentUncheckedCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentUncheckedCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutCreatedCompaniesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCompaniesInput, UserUncheckedCreateWithoutCreatedCompaniesInput>
  }

  export type UserCreateWithoutAssignedCompaniesInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    managedCompanies?: CompanyCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyCreateNestedManyWithoutCreatedByInput
    customerShipments?: ShipmentCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutAssignedCompaniesInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
    managedCompanies?: CompanyUncheckedCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyUncheckedCreateNestedManyWithoutCreatedByInput
    customerShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentUncheckedCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentUncheckedCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutAssignedCompaniesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedCompaniesInput, UserUncheckedCreateWithoutAssignedCompaniesInput>
  }

  export type UserCreateWithoutCompanyInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    managedCompanies?: CompanyCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    managedCompanies?: CompanyUncheckedCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyUncheckedCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentUncheckedCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentUncheckedCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationUncheckedCreateNestedManyWithoutUserInput
    reviewedApplications?: DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutCompanyInput = {
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutCustomerShipmentsInput
    driver?: UserCreateNestedOneWithoutDriverShipmentsInput
    createdBy?: UserCreateNestedOneWithoutCreatedShipmentsInput
    assignedBy?: UserCreateNestedOneWithoutAssignedShipmentsInput
    priceReviewedBy?: UserCreateNestedOneWithoutPriceReviewedShipmentsInput
  }

  export type ShipmentUncheckedCreateWithoutCompanyInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    driverId?: number | null
    createdById?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateOrConnectWithoutCompanyInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput>
  }

  export type ShipmentCreateManyCompanyInputEnvelope = {
    data: ShipmentCreateManyCompanyInput | ShipmentCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutManagedCompaniesInput = {
    update: XOR<UserUpdateWithoutManagedCompaniesInput, UserUncheckedUpdateWithoutManagedCompaniesInput>
    create: XOR<UserCreateWithoutManagedCompaniesInput, UserUncheckedCreateWithoutManagedCompaniesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagedCompaniesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagedCompaniesInput, UserUncheckedUpdateWithoutManagedCompaniesInput>
  }

  export type UserUpdateWithoutManagedCompaniesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    createdCompanies?: CompanyUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutManagedCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdCompanies?: CompanyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUncheckedUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUncheckedUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUpsertWithoutCreatedCompaniesInput = {
    update: XOR<UserUpdateWithoutCreatedCompaniesInput, UserUncheckedUpdateWithoutCreatedCompaniesInput>
    create: XOR<UserCreateWithoutCreatedCompaniesInput, UserUncheckedCreateWithoutCreatedCompaniesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCompaniesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCompaniesInput, UserUncheckedUpdateWithoutCreatedCompaniesInput>
  }

  export type UserUpdateWithoutCreatedCompaniesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    managedCompanies?: CompanyUpdateManyWithoutManagerNestedInput
    assignedCompanies?: CompanyUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managedCompanies?: CompanyUncheckedUpdateManyWithoutManagerNestedInput
    assignedCompanies?: CompanyUncheckedUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUncheckedUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUpsertWithoutAssignedCompaniesInput = {
    update: XOR<UserUpdateWithoutAssignedCompaniesInput, UserUncheckedUpdateWithoutAssignedCompaniesInput>
    create: XOR<UserCreateWithoutAssignedCompaniesInput, UserUncheckedCreateWithoutAssignedCompaniesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedCompaniesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedCompaniesInput, UserUncheckedUpdateWithoutAssignedCompaniesInput>
  }

  export type UserUpdateWithoutAssignedCompaniesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    managedCompanies?: CompanyUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUpdateManyWithoutCreatedByNestedInput
    customerShipments?: ShipmentUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managedCompanies?: CompanyUncheckedUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUncheckedUpdateManyWithoutCreatedByNestedInput
    customerShipments?: ShipmentUncheckedUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    nit?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    companyId?: IntNullableFilter<"User"> | number | null
  }

  export type ShipmentUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutCompanyInput, ShipmentUncheckedUpdateWithoutCompanyInput>
    create: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutCompanyInput, ShipmentUncheckedUpdateWithoutCompanyInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutCompanyInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserCreateWithoutDriverApplicationsInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    managedCompanies?: CompanyCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentCreateNestedManyWithoutPriceReviewedByInput
    reviewedApplications?: DriverApplicationCreateNestedManyWithoutReviewedByInput
  }

  export type UserUncheckedCreateWithoutDriverApplicationsInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
    managedCompanies?: CompanyUncheckedCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyUncheckedCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentUncheckedCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentUncheckedCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput
    reviewedApplications?: DriverApplicationUncheckedCreateNestedManyWithoutReviewedByInput
  }

  export type UserCreateOrConnectWithoutDriverApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDriverApplicationsInput, UserUncheckedCreateWithoutDriverApplicationsInput>
  }

  export type UserCreateWithoutReviewedApplicationsInput = {
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    managedCompanies?: CompanyCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewedApplicationsInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    companyId?: number | null
    managedCompanies?: CompanyUncheckedCreateNestedManyWithoutManagerInput
    createdCompanies?: CompanyUncheckedCreateNestedManyWithoutCreatedByInput
    assignedCompanies?: CompanyUncheckedCreateNestedManyWithoutAssignedByInput
    customerShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderInput
    driverShipments?: ShipmentUncheckedCreateNestedManyWithoutDriverInput
    createdShipments?: ShipmentUncheckedCreateNestedManyWithoutCreatedByInput
    assignedShipments?: ShipmentUncheckedCreateNestedManyWithoutAssignedByInput
    priceReviewedShipments?: ShipmentUncheckedCreateNestedManyWithoutPriceReviewedByInput
    driverApplications?: DriverApplicationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewedApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
  }

  export type UserUpsertWithoutDriverApplicationsInput = {
    update: XOR<UserUpdateWithoutDriverApplicationsInput, UserUncheckedUpdateWithoutDriverApplicationsInput>
    create: XOR<UserCreateWithoutDriverApplicationsInput, UserUncheckedCreateWithoutDriverApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDriverApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDriverApplicationsInput, UserUncheckedUpdateWithoutDriverApplicationsInput>
  }

  export type UserUpdateWithoutDriverApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    managedCompanies?: CompanyUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUpdateManyWithoutPriceReviewedByNestedInput
    reviewedApplications?: DriverApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDriverApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managedCompanies?: CompanyUncheckedUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUncheckedUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUncheckedUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput
    reviewedApplications?: DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUpsertWithoutReviewedApplicationsInput = {
    update: XOR<UserUpdateWithoutReviewedApplicationsInput, UserUncheckedUpdateWithoutReviewedApplicationsInput>
    create: XOR<UserCreateWithoutReviewedApplicationsInput, UserUncheckedCreateWithoutReviewedApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewedApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewedApplicationsInput, UserUncheckedUpdateWithoutReviewedApplicationsInput>
  }

  export type UserUpdateWithoutReviewedApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    managedCompanies?: CompanyUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewedApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    managedCompanies?: CompanyUncheckedUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUncheckedUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUncheckedUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanyCreateManyManagerInput = {
    id?: number
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    createdById?: number | null
    assignedById?: number | null
    createdAt?: Date | string
  }

  export type CompanyCreateManyCreatedByInput = {
    id?: number
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    managerId?: number | null
    assignedById?: number | null
    createdAt?: Date | string
  }

  export type CompanyCreateManyAssignedByInput = {
    id?: number
    name: string
    nit: string
    address?: string | null
    isActive?: boolean
    managerId?: number | null
    createdById?: number | null
    createdAt?: Date | string
  }

  export type ShipmentCreateManySenderInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    driverId?: number | null
    companyId?: number | null
    createdById?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateManyDriverInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    companyId?: number | null
    createdById?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateManyCreatedByInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    driverId?: number | null
    companyId?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateManyAssignedByInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    driverId?: number | null
    companyId?: number | null
    createdById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateManyPriceReviewedByInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    driverId?: number | null
    companyId?: number | null
    createdById?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverApplicationCreateManyUserInput = {
    id?: number
    status?: $Enums.ApprovalStatus
    reviewedById?: number | null
    notes?: string | null
    createdAt?: Date | string
    reviewedAt?: Date | string | null
  }

  export type DriverApplicationCreateManyReviewedByInput = {
    id?: number
    userId: number
    status?: $Enums.ApprovalStatus
    notes?: string | null
    createdAt?: Date | string
    reviewedAt?: Date | string | null
  }

  export type CompanyUpdateWithoutManagerInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedCompaniesNestedInput
    assignedBy?: UserUpdateOneWithoutAssignedCompaniesNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutManagedCompaniesNestedInput
    assignedBy?: UserUpdateOneWithoutAssignedCompaniesNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUpdateWithoutAssignedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutManagedCompaniesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedCompaniesNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutAssignedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutAssignedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nit?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUpdateWithoutSenderInput = {
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: UserUpdateOneWithoutDriverShipmentsNestedInput
    company?: CompanyUpdateOneWithoutShipmentsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedShipmentsNestedInput
    assignedBy?: UserUpdateOneWithoutAssignedShipmentsNestedInput
    priceReviewedBy?: UserUpdateOneWithoutPriceReviewedShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUpdateWithoutDriverInput = {
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCustomerShipmentsNestedInput
    company?: CompanyUpdateOneWithoutShipmentsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedShipmentsNestedInput
    assignedBy?: UserUpdateOneWithoutAssignedShipmentsNestedInput
    priceReviewedBy?: UserUpdateOneWithoutPriceReviewedShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUpdateWithoutCreatedByInput = {
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCustomerShipmentsNestedInput
    driver?: UserUpdateOneWithoutDriverShipmentsNestedInput
    company?: CompanyUpdateOneWithoutShipmentsNestedInput
    assignedBy?: UserUpdateOneWithoutAssignedShipmentsNestedInput
    priceReviewedBy?: UserUpdateOneWithoutPriceReviewedShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUpdateWithoutAssignedByInput = {
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCustomerShipmentsNestedInput
    driver?: UserUpdateOneWithoutDriverShipmentsNestedInput
    company?: CompanyUpdateOneWithoutShipmentsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedShipmentsNestedInput
    priceReviewedBy?: UserUpdateOneWithoutPriceReviewedShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutAssignedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyWithoutAssignedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUpdateWithoutPriceReviewedByInput = {
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCustomerShipmentsNestedInput
    driver?: UserUpdateOneWithoutDriverShipmentsNestedInput
    company?: CompanyUpdateOneWithoutShipmentsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedShipmentsNestedInput
    assignedBy?: UserUpdateOneWithoutAssignedShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutPriceReviewedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyWithoutPriceReviewedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverApplicationUpdateWithoutUserInput = {
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedBy?: UserUpdateOneWithoutReviewedApplicationsNestedInput
  }

  export type DriverApplicationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    reviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DriverApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    reviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DriverApplicationUpdateWithoutReviewedByInput = {
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutDriverApplicationsNestedInput
  }

  export type DriverApplicationUncheckedUpdateWithoutReviewedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DriverApplicationUncheckedUpdateManyWithoutReviewedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumApprovalStatusFieldUpdateOperationsInput | $Enums.ApprovalStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyCompanyInput = {
    id?: number
    name: string
    email: string
    nit?: string | null
    address?: string | null
    phone?: string | null
    password: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ShipmentCreateManyCompanyInput = {
    id?: number
    cargoType: string
    weight: number
    dimensions?: string | null
    origin: string
    destination: string
    timeline: string
    status?: $Enums.ShipmentStatus
    senderId: number
    driverId?: number | null
    createdById?: number | null
    assignedById?: number | null
    proposedPrice?: Decimal | DecimalJsLike | number | string | null
    approvedPrice?: Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: number | null
    priceReviewedAt?: Date | string | null
    paymentStatus?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedCompanies?: CompanyUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managedCompanies?: CompanyUncheckedUpdateManyWithoutManagerNestedInput
    createdCompanies?: CompanyUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedCompanies?: CompanyUncheckedUpdateManyWithoutAssignedByNestedInput
    customerShipments?: ShipmentUncheckedUpdateManyWithoutSenderNestedInput
    driverShipments?: ShipmentUncheckedUpdateManyWithoutDriverNestedInput
    createdShipments?: ShipmentUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedShipments?: ShipmentUncheckedUpdateManyWithoutAssignedByNestedInput
    priceReviewedShipments?: ShipmentUncheckedUpdateManyWithoutPriceReviewedByNestedInput
    driverApplications?: DriverApplicationUncheckedUpdateManyWithoutUserNestedInput
    reviewedApplications?: DriverApplicationUncheckedUpdateManyWithoutReviewedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUpdateWithoutCompanyInput = {
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutCustomerShipmentsNestedInput
    driver?: UserUpdateOneWithoutDriverShipmentsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedShipmentsNestedInput
    assignedBy?: UserUpdateOneWithoutAssignedShipmentsNestedInput
    priceReviewedBy?: UserUpdateOneWithoutPriceReviewedShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cargoType?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    senderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    proposedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    approvedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceReviewedById?: NullableIntFieldUpdateOperationsInput | number | null
    priceReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}