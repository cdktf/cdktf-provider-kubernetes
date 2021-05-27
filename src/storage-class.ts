// https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the storage class allow volume expand
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#allow_volume_expansion StorageClass#allow_volume_expansion}
  */
  readonly allowVolumeExpansion?: boolean;
  /**
  * Persistent Volumes that are dynamically created by a storage class will have the mount options specified
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#mount_options StorageClass#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * The parameters for the provisioner that should create volumes of this storage class
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#parameters StorageClass#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Indicates the type of the reclaim policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#reclaim_policy StorageClass#reclaim_policy}
  */
  readonly reclaimPolicy?: string;
  /**
  * Indicates the type of the provisioner
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#storage_provisioner StorageClass#storage_provisioner}
  */
  readonly storageProvisioner: string;
  /**
  * Indicates when volume binding and dynamic provisioning should occur
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#volume_binding_mode StorageClass#volume_binding_mode}
  */
  readonly volumeBindingMode?: string;
  /**
  * allowed_topologies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#allowed_topologies StorageClass#allowed_topologies}
  */
  readonly allowedTopologies?: StorageClassAllowedTopologies[];
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#metadata StorageClass#metadata}
  */
  readonly metadata: StorageClassMetadata[];
}
export interface StorageClassAllowedTopologiesMatchLabelExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#key StorageClass#key}
  */
  readonly key?: string;
  /**
  * An array of string values. One value must match the label to be selected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#values StorageClass#values}
  */
  readonly values?: string[];
}

function storageClassAllowedTopologiesMatchLabelExpressionsToTerraform(struct?: StorageClassAllowedTopologiesMatchLabelExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface StorageClassAllowedTopologies {
  /**
  * match_label_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#match_label_expressions StorageClass#match_label_expressions}
  */
  readonly matchLabelExpressions?: StorageClassAllowedTopologiesMatchLabelExpressions[];
}

function storageClassAllowedTopologiesToTerraform(struct?: StorageClassAllowedTopologies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_label_expressions: cdktf.listMapper(storageClassAllowedTopologiesMatchLabelExpressionsToTerraform)(struct!.matchLabelExpressions),
  }
}

export interface StorageClassMetadata {
  /**
  * An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#annotations StorageClass#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#generate_name StorageClass#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#labels StorageClass#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html#name StorageClass#name}
  */
  readonly name?: string;
}

function storageClassMetadataToTerraform(struct?: StorageClassMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html kubernetes_storage_class}
*/
export class StorageClass extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html kubernetes_storage_class} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageClassConfig
  */
  public constructor(scope: Construct, id: string, config: StorageClassConfig) {
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
    this._storageProvisioner = config.storageProvisioner;
    this._volumeBindingMode = config.volumeBindingMode;
    this._allowedTopologies = config.allowedTopologies;
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_volume_expansion - computed: false, optional: true, required: false
  private _allowVolumeExpansion?: boolean;
  public get allowVolumeExpansion() {
    return this.getBooleanAttribute('allow_volume_expansion');
  }
  public set allowVolumeExpansion(value: boolean ) {
    this._allowVolumeExpansion = value;
  }
  public resetAllowVolumeExpansion() {
    this._allowVolumeExpansion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVolumeExpansionInput() {
    return this._allowVolumeExpansion
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string[];
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }
  public set mountOptions(value: string[] ) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // reclaim_policy - computed: false, optional: true, required: false
  private _reclaimPolicy?: string;
  public get reclaimPolicy() {
    return this.getStringAttribute('reclaim_policy');
  }
  public set reclaimPolicy(value: string ) {
    this._reclaimPolicy = value;
  }
  public resetReclaimPolicy() {
    this._reclaimPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimPolicyInput() {
    return this._reclaimPolicy
  }

  // storage_provisioner - computed: false, optional: false, required: true
  private _storageProvisioner: string;
  public get storageProvisioner() {
    return this.getStringAttribute('storage_provisioner');
  }
  public set storageProvisioner(value: string) {
    this._storageProvisioner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProvisionerInput() {
    return this._storageProvisioner
  }

  // volume_binding_mode - computed: false, optional: true, required: false
  private _volumeBindingMode?: string;
  public get volumeBindingMode() {
    return this.getStringAttribute('volume_binding_mode');
  }
  public set volumeBindingMode(value: string ) {
    this._volumeBindingMode = value;
  }
  public resetVolumeBindingMode() {
    this._volumeBindingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeBindingModeInput() {
    return this._volumeBindingMode
  }

  // allowed_topologies - computed: false, optional: true, required: false
  private _allowedTopologies?: StorageClassAllowedTopologies[];
  public get allowedTopologies() {
    return this.interpolationForAttribute('allowed_topologies') as any;
  }
  public set allowedTopologies(value: StorageClassAllowedTopologies[] ) {
    this._allowedTopologies = value;
  }
  public resetAllowedTopologies() {
    this._allowedTopologies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTopologiesInput() {
    return this._allowedTopologies
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: StorageClassMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: StorageClassMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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
      storage_provisioner: cdktf.stringToTerraform(this._storageProvisioner),
      volume_binding_mode: cdktf.stringToTerraform(this._volumeBindingMode),
      allowed_topologies: cdktf.listMapper(storageClassAllowedTopologiesToTerraform)(this._allowedTopologies),
      metadata: cdktf.listMapper(storageClassMetadataToTerraform)(this._metadata),
    };
  }
}
