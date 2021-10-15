// https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IngressClassConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#metadata IngressClass#metadata}
  */
  readonly metadata: IngressClassMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#spec IngressClass#spec}
  */
  readonly spec: IngressClassSpec[];
}
export interface IngressClassMetadata {
  /**
  * An unstructured key value map stored with the ingress_class that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#annotations IngressClass#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#generate_name IngressClass#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the ingress_class. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#labels IngressClass#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the ingress_class, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#name IngressClass#name}
  */
  readonly name?: string;
}

function ingressClassMetadataToTerraform(struct?: IngressClassMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface IngressClassSpecParameters {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#api_group IngressClass#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#kind IngressClass#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#name IngressClass#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#namespace IngressClass#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#scope IngressClass#scope}
  */
  readonly scope?: string;
}

function ingressClassSpecParametersToTerraform(struct?: IngressClassSpecParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export interface IngressClassSpec {
  /**
  * Controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different Parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#controller IngressClass#controller}
  */
  readonly controller?: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html#parameters IngressClass#parameters}
  */
  readonly parameters?: IngressClassSpecParameters[];
}

function ingressClassSpecToTerraform(struct?: IngressClassSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    controller: cdktf.stringToTerraform(struct!.controller),
    parameters: cdktf.listMapper(ingressClassSpecParametersToTerraform)(struct!.parameters),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html kubernetes_ingress_class}
*/
export class IngressClass extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_ingress_class";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/ingress_class.html kubernetes_ingress_class} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IngressClassConfig
  */
  public constructor(scope: Construct, id: string, config: IngressClassConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_ingress_class',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: IngressClassMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: IngressClassMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: IngressClassSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: IngressClassSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(ingressClassMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(ingressClassSpecToTerraform)(this._spec),
    };
  }
}
