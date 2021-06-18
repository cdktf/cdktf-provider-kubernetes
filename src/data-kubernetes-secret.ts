// https://www.terraform.io/docs/providers/kubernetes/d/secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * A map of the secret data with values encoded in base64 format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/secret.html#binary_data DataKubernetesSecret#binary_data}
  */
  readonly binaryData?: { [key: string]: string };
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/secret.html#metadata DataKubernetesSecret#metadata}
  */
  readonly metadata: DataKubernetesSecretMetadata[];
}
export interface DataKubernetesSecretMetadata {
  /**
  * An unstructured key value map stored with the secret that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/secret.html#annotations DataKubernetesSecret#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the secret. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/secret.html#labels DataKubernetesSecret#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the secret, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/secret.html#name DataKubernetesSecret#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the secret must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/secret.html#namespace DataKubernetesSecret#namespace}
  */
  readonly namespace?: string;
}

function dataKubernetesSecretMetadataToTerraform(struct?: DataKubernetesSecretMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/secret.html kubernetes_secret}
*/
export class DataKubernetesSecret extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/d/secret.html kubernetes_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataKubernetesSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_secret',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._binaryData = config.binaryData;
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary_data - computed: false, optional: true, required: false
  private _binaryData?: { [key: string]: string };
  public get binaryData() {
    return this.interpolationForAttribute('binary_data') as any;
  }
  public set binaryData(value: { [key: string]: string } ) {
    this._binaryData = value;
  }
  public resetBinaryData() {
    this._binaryData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryDataInput() {
    return this._binaryData
  }

  // data - computed: true, optional: false, required: false
  public data(key: string): string {
    return new cdktf.StringMap(this, 'data').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesSecretMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: DataKubernetesSecretMetadata[]) {
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
      binary_data: cdktf.hashMapper(cdktf.anyToTerraform)(this._binaryData),
      metadata: cdktf.listMapper(dataKubernetesSecretMetadataToTerraform)(this._metadata),
    };
  }
}
