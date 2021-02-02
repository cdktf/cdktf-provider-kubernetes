// https://www.terraform.io/docs/providers/kubernetes/r/data_kubernetes_storage_class.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesStorageClassConfig extends cdktf.TerraformMetaArguments {
  /** Indicates whether the storage class allow volume expand */
  readonly allowVolumeExpansion?: boolean;
  /** Persistent Volumes that are dynamically created by a storage class will have the mount options specified */
  readonly mountOptions?: string[];
  /** The parameters for the provisioner that should create volumes of this storage class */
  readonly parameters?: { [key: string]: string };
  /** Indicates the type of the reclaim policy */
  readonly reclaimPolicy?: string;
  /** Indicates when volume binding and dynamic provisioning should occur */
  readonly volumeBindingMode?: string;
  /** allowed_topologies block */
  readonly allowedTopologies?: DataKubernetesStorageClassAllowedTopologies[];
  /** metadata block */
  readonly metadata: DataKubernetesStorageClassMetadata[];
}
export interface DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** An array of string values. One value must match the label to be selected. */
  readonly values?: string[];
}

function dataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsToTerraform(struct?: DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataKubernetesStorageClassAllowedTopologies {
  /** match_label_expressions block */
  readonly matchLabelExpressions?: DataKubernetesStorageClassAllowedTopologiesMatchLabelExpressions[];
}

function dataKubernetesStorageClassAllowedTopologiesToTerraform(struct?: DataKubernetesStorageClassAllowedTopologies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_label_expressions: cdktf.listMapper(dataKubernetesStorageClassAllowedTopologiesMatchLabelExpressionsToTerraform)(struct!.matchLabelExpressions),
  }
}

export interface DataKubernetesStorageClassMetadata {
  /** An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}

function dataKubernetesStorageClassMetadataToTerraform(struct?: DataKubernetesStorageClassMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


// Resource

export class DataKubernetesStorageClass extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._allowedTopologies = config.allowedTopologies;
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_volume_expansion - computed: true, optional: true, required: false
  private _allowVolumeExpansion?: boolean;
  public get allowVolumeExpansion() {
    return this.getBooleanAttribute('allow_volume_expansion');
  }
  public set allowVolumeExpansion(value: boolean) {
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
    return this._mountOptions
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }
  public get parameters(): { [key: string]: string } {
    return this.interpolationForAttribute('parameters') as any; // Getting the computed value is not yet implemented
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
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
    return this._reclaimPolicy
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
    return this._volumeBindingMode
  }

  // allowed_topologies - computed: false, optional: true, required: false
  private _allowedTopologies?: DataKubernetesStorageClassAllowedTopologies[];
  public get allowedTopologies() {
    return this.interpolationForAttribute('allowed_topologies') as any;
  }
  public set allowedTopologies(value: DataKubernetesStorageClassAllowedTopologies[] ) {
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
  private _metadata: DataKubernetesStorageClassMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: DataKubernetesStorageClassMetadata[]) {
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
      volume_binding_mode: cdktf.stringToTerraform(this._volumeBindingMode),
      allowed_topologies: cdktf.listMapper(dataKubernetesStorageClassAllowedTopologiesToTerraform)(this._allowedTopologies),
      metadata: cdktf.listMapper(dataKubernetesStorageClassMetadataToTerraform)(this._metadata),
    };
  }
}
