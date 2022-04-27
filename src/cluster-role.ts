// https://www.terraform.io/docs/providers/kubernetes/r/cluster_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * aggregation_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#aggregation_rule ClusterRole#aggregation_rule}
  */
  readonly aggregationRule?: ClusterRoleAggregationRule;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#metadata ClusterRole#metadata}
  */
  readonly metadata: ClusterRoleMetadata;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#rule ClusterRole#rule}
  */
  readonly rule?: ClusterRoleRule[] | cdktf.IResolvable;
}
export interface ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#key ClusterRole#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#operator ClusterRole#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#values ClusterRole#values}
  */
  readonly values?: string[];
}

export function clusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsToTerraform(struct?: ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ClusterRoleAggregationRuleClusterRoleSelectors {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#match_labels ClusterRole#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#match_expressions ClusterRole#match_expressions}
  */
  readonly matchExpressions?: ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions[] | cdktf.IResolvable;
}

export function clusterRoleAggregationRuleClusterRoleSelectorsToTerraform(struct?: ClusterRoleAggregationRuleClusterRoleSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(clusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ClusterRoleAggregationRule {
  /**
  * cluster_role_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#cluster_role_selectors ClusterRole#cluster_role_selectors}
  */
  readonly clusterRoleSelectors?: ClusterRoleAggregationRuleClusterRoleSelectors[] | cdktf.IResolvable;
}

export function clusterRoleAggregationRuleToTerraform(struct?: ClusterRoleAggregationRuleOutputReference | ClusterRoleAggregationRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role_selectors: cdktf.listMapper(clusterRoleAggregationRuleClusterRoleSelectorsToTerraform)(struct!.clusterRoleSelectors),
  }
}

export class ClusterRoleAggregationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterRoleAggregationRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoleSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoleSelectors = this._clusterRoleSelectors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRoleAggregationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterRoleSelectors = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterRoleSelectors = value.clusterRoleSelectors;
    }
  }

  // cluster_role_selectors - computed: false, optional: true, required: false
  private _clusterRoleSelectors?: ClusterRoleAggregationRuleClusterRoleSelectors[] | cdktf.IResolvable; 
  public get clusterRoleSelectors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cluster_role_selectors');
  }
  public set clusterRoleSelectors(value: ClusterRoleAggregationRuleClusterRoleSelectors[] | cdktf.IResolvable) {
    this._clusterRoleSelectors = value;
  }
  public resetClusterRoleSelectors() {
    this._clusterRoleSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleSelectorsInput() {
    return this._clusterRoleSelectors;
  }
}
export interface ClusterRoleMetadata {
  /**
  * An unstructured key value map stored with the clusterRole that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#annotations ClusterRole#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRole. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#labels ClusterRole#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the clusterRole, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#name ClusterRole#name}
  */
  readonly name?: string;
}

export function clusterRoleMetadataToTerraform(struct?: ClusterRoleMetadataOutputReference | ClusterRoleMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ClusterRoleMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterRoleMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRoleMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface ClusterRoleRule {
  /**
  * APIGroups is the name of the APIGroup that contains the resources. If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#api_groups ClusterRole#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * NonResourceURLs is a set of partial urls that a user should have access to. *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"), but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#non_resource_urls ClusterRole#non_resource_urls}
  */
  readonly nonResourceUrls?: string[];
  /**
  * ResourceNames is an optional white list of names that the rule applies to. An empty set means that everything is allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#resource_names ClusterRole#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * Resources is a list of resources this rule applies to. ResourceAll represents all resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#resources ClusterRole#resources}
  */
  readonly resources?: string[];
  /**
  * Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule. VerbAll represents all kinds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#verbs ClusterRole#verbs}
  */
  readonly verbs: string[];
}

export function clusterRoleRuleToTerraform(struct?: ClusterRoleRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.apiGroups),
    non_resource_urls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nonResourceUrls),
    resource_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceNames),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    verbs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.verbs),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role kubernetes_cluster_role}
*/
export class ClusterRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_cluster_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role kubernetes_cluster_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterRoleConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_cluster_role',
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
    this._aggregationRule.internalValue = config.aggregationRule;
    this._metadata.internalValue = config.metadata;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // aggregation_rule - computed: false, optional: true, required: false
  private _aggregationRule = new ClusterRoleAggregationRuleOutputReference(this, "aggregation_rule");
  public get aggregationRule() {
    return this._aggregationRule;
  }
  public putAggregationRule(value: ClusterRoleAggregationRule) {
    this._aggregationRule.internalValue = value;
  }
  public resetAggregationRule() {
    this._aggregationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationRuleInput() {
    return this._aggregationRule.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ClusterRoleMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ClusterRoleMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: ClusterRoleRule[] | cdktf.IResolvable; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule');
  }
  public set rule(value: ClusterRoleRule[] | cdktf.IResolvable) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation_rule: clusterRoleAggregationRuleToTerraform(this._aggregationRule.internalValue),
      metadata: clusterRoleMetadataToTerraform(this._metadata.internalValue),
      rule: cdktf.listMapper(clusterRoleRuleToTerraform)(this._rule),
    };
  }
}
