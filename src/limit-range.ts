// https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LimitRangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#metadata LimitRange#metadata}
  */
  readonly metadata: LimitRangeMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#spec LimitRange#spec}
  */
  readonly spec?: LimitRangeSpec[];
}
export interface LimitRangeMetadata {
  /**
  * An unstructured key value map stored with the limit range that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#annotations LimitRange#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#generate_name LimitRange#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the limit range. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#labels LimitRange#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the limit range, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#name LimitRange#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the limit range must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#namespace LimitRange#namespace}
  */
  readonly namespace?: string;
}

function limitRangeMetadataToTerraform(struct?: LimitRangeMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface LimitRangeSpecLimit {
  /**
  * Default resource requirement limit value by resource name if resource limit is omitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#default LimitRange#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * The default resource requirement request value by resource name if resource request is omitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#default_request LimitRange#default_request}
  */
  readonly defaultRequest?: { [key: string]: string };
  /**
  * Max usage constraints on this kind by resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#max LimitRange#max}
  */
  readonly max?: { [key: string]: string };
  /**
  * The named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#max_limit_request_ratio LimitRange#max_limit_request_ratio}
  */
  readonly maxLimitRequestRatio?: { [key: string]: string };
  /**
  * Min usage constraints on this kind by resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#min LimitRange#min}
  */
  readonly min?: { [key: string]: string };
  /**
  * Type of resource that this limit applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#type LimitRange#type}
  */
  readonly type?: string;
}

function limitRangeSpecLimitToTerraform(struct?: LimitRangeSpecLimit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.default),
    default_request: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.defaultRequest),
    max: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.max),
    max_limit_request_ratio: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.maxLimitRequestRatio),
    min: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.min),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface LimitRangeSpec {
  /**
  * limit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html#limit LimitRange#limit}
  */
  readonly limit?: LimitRangeSpecLimit[];
}

function limitRangeSpecToTerraform(struct?: LimitRangeSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limit: cdktf.listMapper(limitRangeSpecLimitToTerraform)(struct!.limit),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html kubernetes_limit_range}
*/
export class LimitRange extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range.html kubernetes_limit_range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LimitRangeConfig
  */
  public constructor(scope: Construct, id: string, config: LimitRangeConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_limit_range',
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
  private _metadata: LimitRangeMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: LimitRangeMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: LimitRangeSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: LimitRangeSpec[] ) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
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
      metadata: cdktf.listMapper(limitRangeMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(limitRangeSpecToTerraform)(this._spec),
    };
  }
}
