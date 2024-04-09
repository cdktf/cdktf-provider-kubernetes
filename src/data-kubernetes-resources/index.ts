// https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource apiVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/resources#api_version DataKubernetesResources#api_version}
  */
  readonly apiVersion: string;
  /**
  * A selector to restrict the list of returned objects by their fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/resources#field_selector DataKubernetesResources#field_selector}
  */
  readonly fieldSelector?: string;
  /**
  * The resource kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/resources#kind DataKubernetesResources#kind}
  */
  readonly kind: string;
  /**
  * A selector to restrict the list of returned objects by their labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/resources#label_selector DataKubernetesResources#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Limit is a maximum number of responses to return for a list call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/resources#limit DataKubernetesResources#limit}
  */
  readonly limit?: number;
  /**
  * The resource namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/resources#namespace DataKubernetesResources#namespace}
  */
  readonly namespace?: string;
  /**
  * The response from the API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/resources#objects DataKubernetesResources#objects}
  */
  readonly objects?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/resources kubernetes_resources}
*/
export class DataKubernetesResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKubernetesResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKubernetesResources to import
  * @param importFromId The id of the existing DataKubernetesResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKubernetesResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubernetes_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.28.0/docs/data-sources/resources kubernetes_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataKubernetesResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_resources',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.28.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiVersion = config.apiVersion;
    this._fieldSelector = config.fieldSelector;
    this._kind = config.kind;
    this._labelSelector = config.labelSelector;
    this._limit = config.limit;
    this._namespace = config.namespace;
    this._objects = config.objects;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector?: string; 
  public get fieldSelector() {
    return this.getStringAttribute('field_selector');
  }
  public set fieldSelector(value: string) {
    this._fieldSelector = value;
  }
  public resetFieldSelector() {
    this._fieldSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // objects - computed: true, optional: true, required: false
  private _objects?: { [key: string]: any }; 
  public get objects() {
    return this.getAnyMapAttribute('objects');
  }
  public set objects(value: { [key: string]: any }) {
    this._objects = value;
  }
  public resetObjects() {
    this._objects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_version: cdktf.stringToTerraform(this._apiVersion),
      field_selector: cdktf.stringToTerraform(this._fieldSelector),
      kind: cdktf.stringToTerraform(this._kind),
      label_selector: cdktf.stringToTerraform(this._labelSelector),
      limit: cdktf.numberToTerraform(this._limit),
      namespace: cdktf.stringToTerraform(this._namespace),
      objects: cdktf.hashMapper(cdktf.anyToTerraform)(this._objects),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_selector: {
        value: cdktf.stringToHclTerraform(this._fieldSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_selector: {
        value: cdktf.stringToHclTerraform(this._labelSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      objects: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._objects),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
