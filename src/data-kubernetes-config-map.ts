// https://www.terraform.io/docs/providers/kubernetes/d/config_map.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesConfigMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/config_map.html#metadata DataKubernetesConfigMap#metadata}
  */
  readonly metadata: DataKubernetesConfigMapMetadata[];
}
export interface DataKubernetesConfigMapMetadata {
  /**
  * An unstructured key value map stored with the config_map that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/config_map.html#annotations DataKubernetesConfigMap#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the config_map. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/config_map.html#labels DataKubernetesConfigMap#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the config_map, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/config_map.html#name DataKubernetesConfigMap#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the config_map must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/config_map.html#namespace DataKubernetesConfigMap#namespace}
  */
  readonly namespace?: string;
}

function dataKubernetesConfigMapMetadataToTerraform(struct?: DataKubernetesConfigMapMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/config_map.html kubernetes_config_map}
*/
export class DataKubernetesConfigMap extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/d/config_map.html kubernetes_config_map} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesConfigMapConfig
  */
  public constructor(scope: Construct, id: string, config: DataKubernetesConfigMapConfig) {
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
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary_data - computed: true, optional: false, required: false
  public binaryData(key: string): string {
    return new cdktf.StringMap(this, 'binary_data').lookup(key);
  }

  // data - computed: true, optional: false, required: false
  public data(key: string): string {
    return new cdktf.StringMap(this, 'data').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesConfigMapMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: DataKubernetesConfigMapMetadata[]) {
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
      metadata: cdktf.listMapper(dataKubernetesConfigMapMetadataToTerraform)(this._metadata),
    };
  }
}
