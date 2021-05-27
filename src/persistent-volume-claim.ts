// https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PersistentVolumeClaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#wait_until_bound PersistentVolumeClaim#wait_until_bound}
  */
  readonly waitUntilBound?: boolean;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#metadata PersistentVolumeClaim#metadata}
  */
  readonly metadata: PersistentVolumeClaimMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#spec PersistentVolumeClaim#spec}
  */
  readonly spec: PersistentVolumeClaimSpec[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#timeouts PersistentVolumeClaim#timeouts}
  */
  readonly timeouts?: PersistentVolumeClaimTimeouts;
}
export interface PersistentVolumeClaimMetadata {
  /**
  * An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#annotations PersistentVolumeClaim#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#generate_name PersistentVolumeClaim#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#labels PersistentVolumeClaim#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the persistent volume claim, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#name PersistentVolumeClaim#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the persistent volume claim must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#namespace PersistentVolumeClaim#namespace}
  */
  readonly namespace?: string;
}

function persistentVolumeClaimMetadataToTerraform(struct?: PersistentVolumeClaimMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface PersistentVolumeClaimSpecResources {
  /**
  * Map describing the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#limits PersistentVolumeClaim#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Map describing the minimum amount of compute resources required. If this is omitted for a container, it defaults to `limits` if that is explicitly specified, otherwise to an implementation-defined value. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#requests PersistentVolumeClaim#requests}
  */
  readonly requests?: { [key: string]: string };
}

function persistentVolumeClaimSpecResourcesToTerraform(struct?: PersistentVolumeClaimSpecResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requests),
  }
}

export interface PersistentVolumeClaimSpecSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#key PersistentVolumeClaim#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#operator PersistentVolumeClaim#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#values PersistentVolumeClaim#values}
  */
  readonly values?: string[];
}

function persistentVolumeClaimSpecSelectorMatchExpressionsToTerraform(struct?: PersistentVolumeClaimSpecSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface PersistentVolumeClaimSpecSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#match_labels PersistentVolumeClaim#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#match_expressions PersistentVolumeClaim#match_expressions}
  */
  readonly matchExpressions?: PersistentVolumeClaimSpecSelectorMatchExpressions[];
}

function persistentVolumeClaimSpecSelectorToTerraform(struct?: PersistentVolumeClaimSpecSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(persistentVolumeClaimSpecSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface PersistentVolumeClaimSpec {
  /**
  * A set of the desired access modes the volume should have. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes-1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#access_modes PersistentVolumeClaim#access_modes}
  */
  readonly accessModes: string[];
  /**
  * Name of the storage class requested by the claim
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#storage_class_name PersistentVolumeClaim#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * The binding reference to the PersistentVolume backing this claim.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#volume_name PersistentVolumeClaim#volume_name}
  */
  readonly volumeName?: string;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#resources PersistentVolumeClaim#resources}
  */
  readonly resources: PersistentVolumeClaimSpecResources[];
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#selector PersistentVolumeClaim#selector}
  */
  readonly selector?: PersistentVolumeClaimSpecSelector[];
}

function persistentVolumeClaimSpecToTerraform(struct?: PersistentVolumeClaimSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessModes),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    resources: cdktf.listMapper(persistentVolumeClaimSpecResourcesToTerraform)(struct!.resources),
    selector: cdktf.listMapper(persistentVolumeClaimSpecSelectorToTerraform)(struct!.selector),
  }
}

export interface PersistentVolumeClaimTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html#create PersistentVolumeClaim#create}
  */
  readonly create?: string;
}

function persistentVolumeClaimTimeoutsToTerraform(struct?: PersistentVolumeClaimTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html kubernetes_persistent_volume_claim}
*/
export class PersistentVolumeClaim extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/persistent_volume_claim.html kubernetes_persistent_volume_claim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PersistentVolumeClaimConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // wait_until_bound - computed: false, optional: true, required: false
  private _waitUntilBound?: boolean;
  public get waitUntilBound() {
    return this.getBooleanAttribute('wait_until_bound');
  }
  public set waitUntilBound(value: boolean ) {
    this._waitUntilBound = value;
  }
  public resetWaitUntilBound() {
    this._waitUntilBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilBoundInput() {
    return this._waitUntilBound
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: PersistentVolumeClaimMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: PersistentVolumeClaimMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: PersistentVolumeClaimSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: PersistentVolumeClaimSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PersistentVolumeClaimTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PersistentVolumeClaimTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      wait_until_bound: cdktf.booleanToTerraform(this._waitUntilBound),
      metadata: cdktf.listMapper(persistentVolumeClaimMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(persistentVolumeClaimSpecToTerraform)(this._spec),
      timeouts: persistentVolumeClaimTimeoutsToTerraform(this._timeouts),
    };
  }
}
