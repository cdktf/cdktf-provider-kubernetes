// https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LimitRangeV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#metadata LimitRangeV1#metadata}
  */
  readonly metadata: LimitRangeV1Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#spec LimitRangeV1#spec}
  */
  readonly spec?: LimitRangeV1Spec;
}
export interface LimitRangeV1Metadata {
  /**
  * An unstructured key value map stored with the limit range that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#annotations LimitRangeV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#generate_name LimitRangeV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the limit range. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#labels LimitRangeV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the limit range, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#name LimitRangeV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the limit range must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#namespace LimitRangeV1#namespace}
  */
  readonly namespace?: string;
}

function limitRangeV1MetadataToTerraform(struct?: LimitRangeV1MetadataOutputReference | LimitRangeV1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class LimitRangeV1MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string | undefined; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string | undefined) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface LimitRangeV1SpecLimit {
  /**
  * Default resource requirement limit value by resource name if resource limit is omitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#default LimitRangeV1#default}
  */
  readonly default?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The default resource requirement request value by resource name if resource request is omitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#default_request LimitRangeV1#default_request}
  */
  readonly defaultRequest?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Max usage constraints on this kind by resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#max LimitRangeV1#max}
  */
  readonly max?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#max_limit_request_ratio LimitRangeV1#max_limit_request_ratio}
  */
  readonly maxLimitRequestRatio?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Min usage constraints on this kind by resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#min LimitRangeV1#min}
  */
  readonly min?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Type of resource that this limit applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#type LimitRangeV1#type}
  */
  readonly type?: string;
}

function limitRangeV1SpecLimitToTerraform(struct?: LimitRangeV1SpecLimit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.default),
    default_request: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.defaultRequest),
    max: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.max),
    max_limit_request_ratio: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.maxLimitRequestRatio),
    min: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.min),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface LimitRangeV1Spec {
  /**
  * limit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html#limit LimitRangeV1#limit}
  */
  readonly limit?: LimitRangeV1SpecLimit[];
}

function limitRangeV1SpecToTerraform(struct?: LimitRangeV1SpecOutputReference | LimitRangeV1Spec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.listMapper(limitRangeV1SpecLimitToTerraform)(struct!.limit),
  }
}

export class LimitRangeV1SpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: LimitRangeV1SpecLimit[] | undefined; 
  public get limit() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('limit') as any;
  }
  public set limit(value: LimitRangeV1SpecLimit[] | undefined) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html kubernetes_limit_range_v1}
*/
export class LimitRangeV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_limit_range_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/limit_range_v1.html kubernetes_limit_range_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LimitRangeV1Config
  */
  public constructor(scope: Construct, id: string, config: LimitRangeV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_limit_range_v1',
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
  private _metadata?: LimitRangeV1Metadata; 
  private __metadataOutput = new LimitRangeV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: LimitRangeV1Metadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: LimitRangeV1Spec | undefined; 
  private __specOutput = new LimitRangeV1SpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: LimitRangeV1Spec | undefined) {
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
      metadata: limitRangeV1MetadataToTerraform(this._metadata),
      spec: limitRangeV1SpecToTerraform(this._spec),
    };
  }
}
