// https://www.terraform.io/docs/providers/kubernetes/r/cluster_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role#id ClusterRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference {
    return new ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
    match_expressions: cdktf.listMapper(clusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}

export class ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterRoleAggregationRuleClusterRoleSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRoleAggregationRuleClusterRoleSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class ClusterRoleAggregationRuleClusterRoleSelectorsList extends cdktf.ComplexList {
  public internalValue? : ClusterRoleAggregationRuleClusterRoleSelectors[] | cdktf.IResolvable

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
  public get(index: number): ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference {
    return new ClusterRoleAggregationRuleClusterRoleSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
    cluster_role_selectors: cdktf.listMapper(clusterRoleAggregationRuleClusterRoleSelectorsToTerraform, true)(struct!.clusterRoleSelectors),
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
    if (this._clusterRoleSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoleSelectors = this._clusterRoleSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRoleAggregationRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterRoleSelectors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterRoleSelectors.internalValue = value.clusterRoleSelectors;
    }
  }

  // cluster_role_selectors - computed: false, optional: true, required: false
  private _clusterRoleSelectors = new ClusterRoleAggregationRuleClusterRoleSelectorsList(this, "cluster_role_selectors", false);
  public get clusterRoleSelectors() {
    return this._clusterRoleSelectors;
  }
  public putClusterRoleSelectors(value: ClusterRoleAggregationRuleClusterRoleSelectors[] | cdktf.IResolvable) {
    this._clusterRoleSelectors.internalValue = value;
  }
  public resetClusterRoleSelectors() {
    this._clusterRoleSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleSelectorsInput() {
    return this._clusterRoleSelectors.internalValue;
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
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    non_resource_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonResourceUrls),
    resource_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceNames),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}

export class ClusterRoleRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterRoleRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._nonResourceUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonResourceUrls = this._nonResourceUrls;
    }
    if (this._resourceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNames = this._resourceNames;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRoleRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._nonResourceUrls = undefined;
      this._resourceNames = undefined;
      this._resources = undefined;
      this._verbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._nonResourceUrls = value.nonResourceUrls;
      this._resourceNames = value.resourceNames;
      this._resources = value.resources;
      this._verbs = value.verbs;
    }
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  public resetApiGroups() {
    this._apiGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // non_resource_urls - computed: false, optional: true, required: false
  private _nonResourceUrls?: string[]; 
  public get nonResourceUrls() {
    return this.getListAttribute('non_resource_urls');
  }
  public set nonResourceUrls(value: string[]) {
    this._nonResourceUrls = value;
  }
  public resetNonResourceUrls() {
    this._nonResourceUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonResourceUrlsInput() {
    return this._nonResourceUrls;
  }

  // resource_names - computed: false, optional: true, required: false
  private _resourceNames?: string[]; 
  public get resourceNames() {
    return this.getListAttribute('resource_names');
  }
  public set resourceNames(value: string[]) {
    this._resourceNames = value;
  }
  public resetResourceNames() {
    this._resourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamesInput() {
    return this._resourceNames;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // verbs - computed: false, optional: false, required: true
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }
}

export class ClusterRoleRuleList extends cdktf.ComplexList {
  public internalValue? : ClusterRoleRule[] | cdktf.IResolvable

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
  public get(index: number): ClusterRoleRuleOutputReference {
    return new ClusterRoleRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
        providerVersion: '2.14.0',
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
    this._aggregationRule.internalValue = config.aggregationRule;
    this._metadata.internalValue = config.metadata;
    this._rule.internalValue = config.rule;
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
  private _rule = new ClusterRoleRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ClusterRoleRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      aggregation_rule: clusterRoleAggregationRuleToTerraform(this._aggregationRule.internalValue),
      metadata: clusterRoleMetadataToTerraform(this._metadata.internalValue),
      rule: cdktf.listMapper(clusterRoleRuleToTerraform, true)(this._rule.internalValue),
    };
  }
}