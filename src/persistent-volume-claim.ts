// https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PersistentVolumeClaimConfig extends TerraformMetaArguments {
  /** Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space) */
  readonly waitUntilBound?: boolean;
  /** metadata block */
  readonly metadata: PersistentVolumeClaimMetadata[];
  /** spec block */
  readonly spec: PersistentVolumeClaimSpec[];
  /** timeouts block */
  readonly timeouts?: PersistentVolumeClaimTimeouts;
}
export interface PersistentVolumeClaimMetadata {
  /** An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the persistent volume claim, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the persistent volume claim must be unique. */
  readonly namespace?: string;
}
export interface PersistentVolumeClaimSpecResources {
  /** Map describing the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/ */
  readonly limits?: { [key: string]: string };
  /** Map describing the minimum amount of compute resources required. If this is omitted for a container, it defaults to `limits` if that is explicitly specified, otherwise to an implementation-defined value. More info: http://kubernetes.io/docs/user-guide/compute-resources/ */
  readonly requests?: { [key: string]: string };
}
export interface PersistentVolumeClaimSpecSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface PersistentVolumeClaimSpecSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: PersistentVolumeClaimSpecSelectorMatchExpressions[];
}
export interface PersistentVolumeClaimSpec {
  /** A set of the desired access modes the volume should have. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes-1 */
  readonly accessModes: string[];
  /** Name of the storage class requested by the claim */
  readonly storageClassName?: string;
  /** The binding reference to the PersistentVolume backing this claim. */
  readonly volumeName?: string;
  /** resources block */
  readonly resources: PersistentVolumeClaimSpecResources[];
  /** selector block */
  readonly selector?: PersistentVolumeClaimSpecSelector[];
}
export interface PersistentVolumeClaimTimeouts {
  readonly create?: string;
}

// Resource

export class PersistentVolumeClaim extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PersistentVolumeClaimConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_persistent_volume_claim',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._waitUntilBound = config.waitUntilBound;
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // wait_until_bound - computed: false, optional: true, required: false
  private _waitUntilBound?: boolean;
  public get waitUntilBound() {
    return this._waitUntilBound;
  }
  public set waitUntilBound(value: boolean | undefined) {
    this._waitUntilBound = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: PersistentVolumeClaimMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: PersistentVolumeClaimMetadata[]) {
    this._metadata = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: PersistentVolumeClaimSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: PersistentVolumeClaimSpec[]) {
    this._spec = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PersistentVolumeClaimTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PersistentVolumeClaimTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      wait_until_bound: this._waitUntilBound,
      metadata: this._metadata,
      spec: this._spec,
      timeouts: this._timeouts,
    };
  }
}
