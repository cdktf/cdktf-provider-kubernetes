// https://www.terraform.io/docs/providers/kubernetes/r/resource_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#metadata ResourceQuota#metadata}
  */
  readonly metadata: ResourceQuotaMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#spec ResourceQuota#spec}
  */
  readonly spec?: ResourceQuotaSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#timeouts ResourceQuota#timeouts}
  */
  readonly timeouts?: ResourceQuotaTimeouts;
}
export interface ResourceQuotaMetadata {
  /**
  * An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#annotations ResourceQuota#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#generate_name ResourceQuota#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#labels ResourceQuota#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resource quota, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#name ResourceQuota#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the resource quota must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#namespace ResourceQuota#namespace}
  */
  readonly namespace?: string;
}

export function resourceQuotaMetadataToTerraform(struct?: ResourceQuotaMetadataOutputReference | ResourceQuotaMetadata): any {
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

export class ResourceQuotaMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceQuotaMetadata | undefined {
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

  public set internalValue(value: ResourceQuotaMetadata | undefined) {
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
export interface ResourceQuotaSpecScopeSelectorMatchExpression {
  /**
  * Represents a scope's relationship to a set of values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#operator ResourceQuota#operator}
  */
  readonly operator: string;
  /**
  * The name of the scope that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#scope_name ResourceQuota#scope_name}
  */
  readonly scopeName: string;
  /**
  * A list of scope selector requirements by scope of the resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#values ResourceQuota#values}
  */
  readonly values?: string[];
}

export function resourceQuotaSpecScopeSelectorMatchExpressionToTerraform(struct?: ResourceQuotaSpecScopeSelectorMatchExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    scope_name: cdktf.stringToTerraform(struct!.scopeName),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ResourceQuotaSpecScopeSelector {
  /**
  * match_expression block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#match_expression ResourceQuota#match_expression}
  */
  readonly matchExpression?: ResourceQuotaSpecScopeSelectorMatchExpression[] | cdktf.IResolvable;
}

export function resourceQuotaSpecScopeSelectorToTerraform(struct?: ResourceQuotaSpecScopeSelectorOutputReference | ResourceQuotaSpecScopeSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expression: cdktf.listMapper(resourceQuotaSpecScopeSelectorMatchExpressionToTerraform)(struct!.matchExpression),
  }
}

export class ResourceQuotaSpecScopeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceQuotaSpecScopeSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpression = this._matchExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceQuotaSpecScopeSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchExpression = value.matchExpression;
    }
  }

  // match_expression - computed: false, optional: true, required: false
  private _matchExpression?: ResourceQuotaSpecScopeSelectorMatchExpression[] | cdktf.IResolvable; 
  public get matchExpression() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expression');
  }
  public set matchExpression(value: ResourceQuotaSpecScopeSelectorMatchExpression[] | cdktf.IResolvable) {
    this._matchExpression = value;
  }
  public resetMatchExpression() {
    this._matchExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionInput() {
    return this._matchExpression;
  }
}
export interface ResourceQuotaSpec {
  /**
  * The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#hard ResourceQuota#hard}
  */
  readonly hard?: { [key: string]: string };
  /**
  * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#scopes ResourceQuota#scopes}
  */
  readonly scopes?: string[];
  /**
  * scope_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#scope_selector ResourceQuota#scope_selector}
  */
  readonly scopeSelector?: ResourceQuotaSpecScopeSelector;
}

export function resourceQuotaSpecToTerraform(struct?: ResourceQuotaSpecOutputReference | ResourceQuotaSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hard: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hard),
    scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.scopes),
    scope_selector: resourceQuotaSpecScopeSelectorToTerraform(struct!.scopeSelector),
  }
}

export class ResourceQuotaSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceQuotaSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hard !== undefined) {
      hasAnyValues = true;
      internalValueResult.hard = this._hard;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._scopeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeSelector = this._scopeSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceQuotaSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hard = undefined;
      this._scopes = undefined;
      this._scopeSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hard = value.hard;
      this._scopes = value.scopes;
      this._scopeSelector.internalValue = value.scopeSelector;
    }
  }

  // hard - computed: false, optional: true, required: false
  private _hard?: { [key: string]: string }; 
  public get hard() {
    return this.getStringMapAttribute('hard');
  }
  public set hard(value: { [key: string]: string }) {
    this._hard = value;
  }
  public resetHard() {
    this._hard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardInput() {
    return this._hard;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // scope_selector - computed: false, optional: true, required: false
  private _scopeSelector = new ResourceQuotaSpecScopeSelectorOutputReference(this, "scope_selector");
  public get scopeSelector() {
    return this._scopeSelector;
  }
  public putScopeSelector(value: ResourceQuotaSpecScopeSelector) {
    this._scopeSelector.internalValue = value;
  }
  public resetScopeSelector() {
    this._scopeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeSelectorInput() {
    return this._scopeSelector.internalValue;
  }
}
export interface ResourceQuotaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#create ResourceQuota#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota#update ResourceQuota#update}
  */
  readonly update?: string;
}

export function resourceQuotaTimeoutsToTerraform(struct?: ResourceQuotaTimeoutsOutputReference | ResourceQuotaTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ResourceQuotaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceQuotaTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceQuotaTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota kubernetes_resource_quota}
*/
export class ResourceQuota extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_resource_quota";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/resource_quota kubernetes_resource_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_resource_quota',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.11.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ResourceQuotaMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ResourceQuotaMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new ResourceQuotaSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ResourceQuotaSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceQuotaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceQuotaTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: resourceQuotaMetadataToTerraform(this._metadata.internalValue),
      spec: resourceQuotaSpecToTerraform(this._spec.internalValue),
      timeouts: resourceQuotaTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
