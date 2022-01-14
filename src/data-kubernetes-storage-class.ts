// https://www.terraform.io/docs/providers/kubernetes/d/storage_class
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesStorageClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the storage class allow volume expand
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#allow_volume_expansion DataKubernetesStorageClass#allow_volume_expansion}
  */
  readonly allowVolumeExpansion?: boolean | cdktf.IResolvable;
  /**
  * Persistent Volumes that are dynamically created by a storage class will have the mount options specified
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#mount_options DataKubernetesStorageClass#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * The parameters for the provisioner that should create volumes of this storage class
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#parameters DataKubernetesStorageClass#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Indicates the type of the reclaim policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#reclaim_policy DataKubernetesStorageClass#reclaim_policy}
  */
  readonly reclaimPolicy?: string;
  /**
  * Indicates when volume binding and dynamic provisioning should occur
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#volume_binding_mode DataKubernetesStorageClass#volume_binding_mode}
  */
  readonly volumeBindingMode?: string;
  /**
  * allowed_topologies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#allowed_topologies DataKubernetesStorageClass#allowed_topologies}
  */
  readonly allowedTopologies?: DataKubernetesStorageClassAllowedTopologies;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#metadata DataKubernetesStorageClass#metadata}
  */
  readonly metadata: DataKubernetesStorageClassMetadata;
}
export interface DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#key DataKubernetesStorageClass#key}
  */
  readonly key?: string;
  /**
  * An array of string values. One value must match the label to be selected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#values DataKubernetesStorageClass#values}
  */
  readonly values?: string[];
}

export function dataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsToTerraform(struct?: DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataKubernetesStorageClassAllowedTopologies {
  /**
  * match_label_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#match_label_expressions DataKubernetesStorageClass#match_label_expressions}
  */
  readonly matchLabelExpressions?: DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions[];
}

export function dataKubernetesStorageClassAllowedTopologiesToTerraform(struct?: DataKubernetesStorageClassAllowedTopologiesOutputReference | DataKubernetesStorageClassAllowedTopologies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_label_expressions: cdktf.listMapper(dataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsToTerraform)(struct!.matchLabelExpressions),
  }
}

export class DataKubernetesStorageClassAllowedTopologiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataKubernetesStorageClassAllowedTopologies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabelExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelExpressions = this._matchLabelExpressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesStorageClassAllowedTopologies | undefined) {
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
  private _matchLabelExpressions?: DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions[]; 
  public get matchLabelExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_label_expressions') as any;
  }
  public set matchLabelExpressions(value: DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions[]) {
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
export interface DataKubernetesStorageClassMetadata {
  /**
  * An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#annotations DataKubernetesStorageClass#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#labels DataKubernetesStorageClass#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class#name DataKubernetesStorageClass#name}
  */
  readonly name?: string;
}

export function dataKubernetesStorageClassMetadataToTerraform(struct?: DataKubernetesStorageClassMetadataOutputReference | DataKubernetesStorageClassMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataKubernetesStorageClassMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataKubernetesStorageClassMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
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

  public set internalValue(value: DataKubernetesStorageClassMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class kubernetes_storage_class}
*/
export class DataKubernetesStorageClass extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_storage_class";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/d/storage_class kubernetes_storage_class} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesStorageClassConfig
  */
  public constructor(scope: Construct, id: string, config: DataKubernetesStorageClassConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_storage_class',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
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
    this._volumeBindingMode = config.volumeBindingMode;
    this._allowedTopologies.internalValue = config.allowedTopologies;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_volume_expansion - computed: true, optional: true, required: false
  private _allowVolumeExpansion?: boolean | cdktf.IResolvable; 
  public get allowVolumeExpansion() {
    return this.getBooleanAttribute('allow_volume_expansion') as any;
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

  // mount_options - computed: true, optional: true, required: false
  private _mountOptions?: string[]; 
  public get mountOptions() {
    return this.getListAttribute('mount_options');
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

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // reclaim_policy - computed: true, optional: true, required: false
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

  // storage_provisioner - computed: true, optional: false, required: false
  public get storageProvisioner() {
    return this.getStringAttribute('storage_provisioner');
  }

  // volume_binding_mode - computed: true, optional: true, required: false
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
  private _allowedTopologies = new DataKubernetesStorageClassAllowedTopologiesOutputReference(this as any, "allowed_topologies", true);
  public get allowedTopologies() {
    return this._allowedTopologies;
  }
  public putAllowedTopologies(value: DataKubernetesStorageClassAllowedTopologies) {
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
  private _metadata = new DataKubernetesStorageClassMetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataKubernetesStorageClassMetadata) {
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
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      reclaim_policy: cdktf.stringToTerraform(this._reclaimPolicy),
      volume_binding_mode: cdktf.stringToTerraform(this._volumeBindingMode),
      allowed_topologies: dataKubernetesStorageClassAllowedTopologiesToTerraform(this._allowedTopologies.internalValue),
      metadata: dataKubernetesStorageClassMetadataToTerraform(this._metadata.internalValue),
    };
  }
}
