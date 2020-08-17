// https://www.terraform.io/docs/providers/kubernetes/r/data_kubernetes_storage_class.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataKubernetesStorageClassConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: DataKubernetesStorageClassMetadata[];
}
export interface DataKubernetesStorageClassMetadata {
  /** An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}

// Resource

export class DataKubernetesStorageClass extends TerraformDataSource {

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
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_volume_expansion - computed: true, optional: false, required: true
  public get allowVolumeExpansion() {
    return this.getBooleanAttribute('allow_volume_expansion');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // mount_options - computed: true, optional: false, required: true
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }

  // parameters - computed: true, optional: false, required: true
  public parameters(key: string): string {
    return new StringMap(this, 'parameters').lookup(key);
  }

  // reclaim_policy - computed: true, optional: false, required: true
  public get reclaimPolicy() {
    return this.getStringAttribute('reclaim_policy');
  }

  // storage_provisioner - computed: true, optional: false, required: true
  public get storageProvisioner() {
    return this.getStringAttribute('storage_provisioner');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesStorageClassMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: DataKubernetesStorageClassMetadata[]) {
    this._metadata = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
    };
  }
}
