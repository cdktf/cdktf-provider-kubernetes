// https://www.terraform.io/docs/providers/kubernetes/r/storage_class.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface StorageClassConfig extends TerraformMetaArguments {
  /** Indicates whether the storage class allow volume expand */
  readonly allowVolumeExpansion?: boolean;
  /** Persistent Volumes that are dynamically created by a storage class will have the mount options specified */
  readonly mountOptions?: string[];
  /** The parameters for the provisioner that should create volumes of this storage class */
  readonly parameters?: { [key: string]: string };
  /** Indicates the type of the reclaim policy */
  readonly reclaimPolicy?: string;
  /** Indicates the type of the provisioner */
  readonly storageProvisioner: string;
  /** Indicates when volume binding and dynamic provisioning should occur */
  readonly volumeBindingMode?: string;
  /** metadata block */
  readonly metadata: StorageClassMetadata[];
}
export interface StorageClassMetadata {
  /** An unstructured key value map stored with the storage class that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the storage class. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the storage class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}

// Resource

export class StorageClass extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_volume_expansion - computed: false, optional: true, required: false
  private _allowVolumeExpansion?: boolean;
  public get allowVolumeExpansion() {
    return this._allowVolumeExpansion;
  }
  public set allowVolumeExpansion(value: boolean | undefined) {
    this._allowVolumeExpansion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string[];
  public get mountOptions() {
    return this._mountOptions;
  }
  public set mountOptions(value: string[] | undefined) {
    this._mountOptions = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // reclaim_policy - computed: false, optional: true, required: false
  private _reclaimPolicy?: string;
  public get reclaimPolicy() {
    return this._reclaimPolicy;
  }
  public set reclaimPolicy(value: string | undefined) {
    this._reclaimPolicy = value;
  }

  // storage_provisioner - computed: false, optional: false, required: true
  private _storageProvisioner: string;
  public get storageProvisioner() {
    return this._storageProvisioner;
  }
  public set storageProvisioner(value: string) {
    this._storageProvisioner = value;
  }

  // volume_binding_mode - computed: false, optional: true, required: false
  private _volumeBindingMode?: string;
  public get volumeBindingMode() {
    return this._volumeBindingMode;
  }
  public set volumeBindingMode(value: string | undefined) {
    this._volumeBindingMode = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: StorageClassMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: StorageClassMetadata[]) {
    this._metadata = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_volume_expansion: this._allowVolumeExpansion,
      mount_options: this._mountOptions,
      parameters: this._parameters,
      reclaim_policy: this._reclaimPolicy,
      storage_provisioner: this._storageProvisioner,
      volume_binding_mode: this._volumeBindingMode,
      metadata: this._metadata,
    };
  }
}
