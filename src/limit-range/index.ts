/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LimitRangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#id LimitRange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#metadata LimitRange#metadata}
  */
  readonly metadata: LimitRangeMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#spec LimitRange#spec}
  */
  readonly spec?: LimitRangeSpec;
}
export interface LimitRangeMetadata {
  /**
  * An unstructured key value map stored with the limit range that may be used to store arbitrary metadata. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#annotations LimitRange#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#generate_name LimitRange#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the limit range. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#labels LimitRange#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the limit range, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#name LimitRange#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the limit range must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#namespace LimitRange#namespace}
  */
  readonly namespace?: string;
}

export function limitRangeMetadataToTerraform(struct?: LimitRangeMetadataOutputReference | LimitRangeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class LimitRangeMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LimitRangeMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LimitRangeMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface LimitRangeSpecLimit {
  /**
  * Default resource requirement limit value by resource name if resource limit is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#default LimitRange#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * The default resource requirement request value by resource name if resource request is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#default_request LimitRange#default_request}
  */
  readonly defaultRequest?: { [key: string]: string };
  /**
  * Max usage constraints on this kind by resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#max LimitRange#max}
  */
  readonly max?: { [key: string]: string };
  /**
  * The named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#max_limit_request_ratio LimitRange#max_limit_request_ratio}
  */
  readonly maxLimitRequestRatio?: { [key: string]: string };
  /**
  * Min usage constraints on this kind by resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#min LimitRange#min}
  */
  readonly min?: { [key: string]: string };
  /**
  * Type of resource that this limit applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#type LimitRange#type}
  */
  readonly type?: string;
}

export function limitRangeSpecLimitToTerraform(struct?: LimitRangeSpecLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    default_request: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.defaultRequest),
    max: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.max),
    max_limit_request_ratio: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.maxLimitRequestRatio),
    min: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.min),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class LimitRangeSpecLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LimitRangeSpecLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defaultRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRequest = this._defaultRequest;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._maxLimitRequestRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLimitRequestRatio = this._maxLimitRequestRatio;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LimitRangeSpecLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._defaultRequest = undefined;
      this._max = undefined;
      this._maxLimitRequestRatio = undefined;
      this._min = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._defaultRequest = value.defaultRequest;
      this._max = value.max;
      this._maxLimitRequestRatio = value.maxLimitRequestRatio;
      this._min = value.min;
      this._type = value.type;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }; 
  public get default() {
    return this.getStringMapAttribute('default');
  }
  public set default(value: { [key: string]: string }) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // default_request - computed: true, optional: true, required: false
  private _defaultRequest?: { [key: string]: string }; 
  public get defaultRequest() {
    return this.getStringMapAttribute('default_request');
  }
  public set defaultRequest(value: { [key: string]: string }) {
    this._defaultRequest = value;
  }
  public resetDefaultRequest() {
    this._defaultRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRequestInput() {
    return this._defaultRequest;
  }

  // max - computed: false, optional: true, required: false
  private _max?: { [key: string]: string }; 
  public get max() {
    return this.getStringMapAttribute('max');
  }
  public set max(value: { [key: string]: string }) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // max_limit_request_ratio - computed: false, optional: true, required: false
  private _maxLimitRequestRatio?: { [key: string]: string }; 
  public get maxLimitRequestRatio() {
    return this.getStringMapAttribute('max_limit_request_ratio');
  }
  public set maxLimitRequestRatio(value: { [key: string]: string }) {
    this._maxLimitRequestRatio = value;
  }
  public resetMaxLimitRequestRatio() {
    this._maxLimitRequestRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLimitRequestRatioInput() {
    return this._maxLimitRequestRatio;
  }

  // min - computed: false, optional: true, required: false
  private _min?: { [key: string]: string }; 
  public get min() {
    return this.getStringMapAttribute('min');
  }
  public set min(value: { [key: string]: string }) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class LimitRangeSpecLimitList extends cdktf.ComplexList {
  public internalValue? : LimitRangeSpecLimit[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LimitRangeSpecLimitOutputReference {
    return new LimitRangeSpecLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LimitRangeSpec {
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#limit LimitRange#limit}
  */
  readonly limit?: LimitRangeSpecLimit[] | cdktf.IResolvable;
}

export function limitRangeSpecToTerraform(struct?: LimitRangeSpecOutputReference | LimitRangeSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.listMapper(limitRangeSpecLimitToTerraform, true)(struct!.limit),
  }
}

export class LimitRangeSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LimitRangeSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LimitRangeSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit.internalValue = value.limit;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new LimitRangeSpecLimitList(this, "limit", false);
  public get limit() {
    return this._limit;
  }
  public putLimit(value: LimitRangeSpecLimit[] | cdktf.IResolvable) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range kubernetes_limit_range}
*/
export class LimitRange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_limit_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LimitRange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LimitRange to import
  * @param importFromId The id of the existing LimitRange that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LimitRange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubernetes_limit_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/limit_range kubernetes_limit_range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LimitRangeConfig
  */
  public constructor(scope: Construct, id: string, config: LimitRangeConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_limit_range',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.25.1',
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
    this._id = config.id;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new LimitRangeMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: LimitRangeMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new LimitRangeSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: LimitRangeSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadata: limitRangeMetadataToTerraform(this._metadata.internalValue),
      spec: limitRangeSpecToTerraform(this._spec.internalValue),
    };
  }
}
