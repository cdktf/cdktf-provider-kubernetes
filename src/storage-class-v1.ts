// https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageClassV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the storage class allow volume expand
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#allow_volume_expansion StorageClassV1#allow_volume_expansion}
  */
  readonly allowVolumeExpansion?: boolean | cdktf.IResolvable;
  /**
  * Persistent Volumes that are dynamically created by a storage class will have the mount options specified
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#mount_options StorageClassV1#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * The parameters for the provisioner that should create volumes of this storage class
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#parameters StorageClassV1#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Indicates the type of the reclaim policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#reclaim_policy StorageClassV1#reclaim_policy}
  */
  readonly reclaimPolicy?: string;
  /**
  * Indicates the type of the provisioner
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#storage_provisioner StorageClassV1#storage_provisioner}
  */
  readonly storageProvisioner: string;
  /**
  * Indicates when volume binding and dynamic provisioning should occur
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#volume_binding_mode StorageClassV1#volume_binding_mode}
  */
  readonly volumeBindingMode?: string;
  /**
  * allowed_topologies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#allowed_topologies StorageClassV1#allowed_topologies}
  */
  readonly allowedTopologies?: StorageClassV1AllowedTopologies;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#metadata StorageClassV1#metadata}
  */
  readonly metadata: StorageClassV1Metadata;
}
export interface StorageClassV1AllowedTopologiesMatchLabelExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#key StorageClassV1#key}
  */
  readonly key?: string;
  /**
  * An array of string values. One value must match the label to be selected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#values StorageClassV1#values}
  */
  readonly values?: string[];
}

export function storageClassV1AllowedTopologiesMatchLabelExpressionsToTerraform(struct?: StorageClassV1AllowedTopologiesMatchLabelExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface StorageClassV1AllowedTopologies {
  /**
  * match_label_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#match_label_expressions StorageClassV1#match_label_expressions}
  */
  readonly matchLabelExpressions?: StorageClassV1AllowedTopologiesMatchLabelExpressions[] | cdktf.IResolvable;
}

export function storageClassV1AllowedTopologiesToTerraform(struct?: StorageClassV1AllowedTopologiesOutputReference | StorageClassV1AllowedTopologies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_label_expressions: cdktf.listMapper(storageClassV1AllowedTopologiesMatchLabelExpressionsToTerraform)(struct!.matchLabelExpressions),
  }
}

export class StorageClassV1AllowedTopologiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageClassV1AllowedTopologies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabelExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelExpressions = this._matchLabelExpressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageClassV1AllowedTopologies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabelExpressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabelExpressions = value.matchLabelExpressions;
    }
  }

  // match_label_expressions - computed: false, optional: true, required: false
  private _matchLabelExpressions?: StorageClassV1AllowedTopologiesMatchLabelExpressions[] | cdktf.IResolvable; 
  public get matchLabelExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_label_expressions');
  }
  public set matchLabelExpressions(value: StorageClassV1AllowedTopologiesMatchLabelExpressions[] | cdktf.IResolvable) {
    this._matchLabelExpressions = value;
  }
  public resetMatchLabelExpressions() {
    this._matchLabelExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelExpressionsInput() {
    return this._matchLabelExpressions;
  }
}
export interface StorageClassV1Metadata {
  /**
  * An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#annotations StorageClassV1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#generate_name StorageClassV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#labels StorageClassV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1#name StorageClassV1#name}
  */
  readonly name?: string;
}

export function storageClassV1MetadataToTerraform(struct?: StorageClassV1MetadataOutputReference | StorageClassV1Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class StorageClassV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageClassV1Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageClassV1Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1 kubernetes_storage_class_v1}
*/
export class StorageClassV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_storage_class_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class_v1 kubernetes_storage_class_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageClassV1Config
  */
  public constructor(scope: Construct, id: string, config: StorageClassV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_storage_class_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.11.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowVolumeExpansion = config.allowVolumeExpansion;
    this._mountOptions = config.mountOptions;
    this._parameters = config.parameters;
    this._reclaimPolicy = config.reclaimPolicy;
    this._storageProvisioner = config.storageProvisioner;
    this._volumeBindingMode = config.volumeBindingMode;
    this._allowedTopologies.internalValue = config.allowedTopologies;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_volume_expansion - computed: false, optional: true, required: false
  private _allowVolumeExpansion?: boolean | cdktf.IResolvable; 
  public get allowVolumeExpansion() {
    return this.getBooleanAttribute('allow_volume_expansion');
  }
  public set allowVolumeExpansion(value: boolean | cdktf.IResolvable) {
    this._allowVolumeExpansion = value;
  }
  public resetAllowVolumeExpansion() {
    this._allowVolumeExpansion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVolumeExpansionInput() {
    return this._allowVolumeExpansion;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string[]; 
  public get mountOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('mount_options'));
  }
  public set mountOptions(value: string[]) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // reclaim_policy - computed: false, optional: true, required: false
  private _reclaimPolicy?: string; 
  public get reclaimPolicy() {
    return this.getStringAttribute('reclaim_policy');
  }
  public set reclaimPolicy(value: string) {
    this._reclaimPolicy = value;
  }
  public resetReclaimPolicy() {
    this._reclaimPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimPolicyInput() {
    return this._reclaimPolicy;
  }

  // storage_provisioner - computed: false, optional: false, required: true
  private _storageProvisioner?: string; 
  public get storageProvisioner() {
    return this.getStringAttribute('storage_provisioner');
  }
  public set storageProvisioner(value: string) {
    this._storageProvisioner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProvisionerInput() {
    return this._storageProvisioner;
  }

  // volume_binding_mode - computed: false, optional: true, required: false
  private _volumeBindingMode?: string; 
  public get volumeBindingMode() {
    return this.getStringAttribute('volume_binding_mode');
  }
  public set volumeBindingMode(value: string) {
    this._volumeBindingMode = value;
  }
  public resetVolumeBindingMode() {
    this._volumeBindingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeBindingModeInput() {
    return this._volumeBindingMode;
  }

  // allowed_topologies - computed: false, optional: true, required: false
  private _allowedTopologies = new StorageClassV1AllowedTopologiesOutputReference(this, "allowed_topologies");
  public get allowedTopologies() {
    return this._allowedTopologies;
  }
  public putAllowedTopologies(value: StorageClassV1AllowedTopologies) {
    this._allowedTopologies.internalValue = value;
  }
  public resetAllowedTopologies() {
    this._allowedTopologies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTopologiesInput() {
    return this._allowedTopologies.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new StorageClassV1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: StorageClassV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_volume_expansion: cdktf.booleanToTerraform(this._allowVolumeExpansion),
      mount_options: cdktf.listMapper(cdktf.stringToTerraform)(this._mountOptions),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      reclaim_policy: cdktf.stringToTerraform(this._reclaimPolicy),
      storage_provisioner: cdktf.stringToTerraform(this._storageProvisioner),
      volume_binding_mode: cdktf.stringToTerraform(this._volumeBindingMode),
      allowed_topologies: storageClassV1AllowedTopologiesToTerraform(this._allowedTopologies.internalValue),
      metadata: storageClassV1MetadataToTerraform(this._metadata.internalValue),
    };
  }
}
