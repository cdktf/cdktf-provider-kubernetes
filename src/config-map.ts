// https://www.terraform.io/docs/providers/kubernetes/r/config_map.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ConfigMapConfig extends TerraformMetaArguments {
  /** BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet. This field only accepts base64-encoded payloads that will be decoded/encoded before being sent/received to/from the apiserver. */
  readonly binaryData?: { [key: string]: string };
  /** Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process. */
  readonly data?: { [key: string]: string };
  /** metadata block */
  readonly metadata: ConfigMapMetadata[];
}
export interface ConfigMapMetadata {
  /** An unstructured key value map stored with the config map that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the config map. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the config map, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the config map must be unique. */
  readonly namespace?: string;
}

// Resource

export class ConfigMap extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ConfigMapConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_config_map',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._binaryData = config.binaryData;
    this._data = config.data;
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary_data - computed: false, optional: true, required: false
  private _binaryData?: { [key: string]: string };
  public get binaryData() {
    return this._binaryData;
  }
  public set binaryData(value: { [key: string]: string } | undefined) {
    this._binaryData = value;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string };
  public get data() {
    return this._data;
  }
  public set data(value: { [key: string]: string } | undefined) {
    this._data = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: ConfigMapMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: ConfigMapMetadata[]) {
    this._metadata = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      binary_data: this._binaryData,
      data: this._data,
      metadata: this._metadata,
    };
  }
}
