// https://www.terraform.io/docs/providers/kubernetes/r/stateful_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatefulSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Wait for the rollout of the stateful set to complete. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#wait_for_rollout StatefulSet#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#metadata StatefulSet#metadata}
  */
  readonly metadata: StatefulSetMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#spec StatefulSet#spec}
  */
  readonly spec: StatefulSetSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#timeouts StatefulSet#timeouts}
  */
  readonly timeouts?: StatefulSetTimeouts;
}
export interface StatefulSetMetadata {
  /**
  * An unstructured key value map stored with the stateful set that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#annotations StatefulSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#generate_name StatefulSet#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the stateful set. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#labels StatefulSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the stateful set, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the stateful set must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#namespace StatefulSet#namespace}
  */
  readonly namespace?: string;
}

export function statefulSetMetadataToTerraform(struct?: StatefulSetMetadataOutputReference | StatefulSetMetadata): any {
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

export class StatefulSetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetMetadata | undefined {
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

  public set internalValue(value: StatefulSetMetadata | undefined) {
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
export interface StatefulSetSpecSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#operator StatefulSet#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#values StatefulSet#values}
  */
  readonly values?: string[];
}

export function statefulSetSpecSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export interface StatefulSetSpecSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_labels StatefulSet#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_expressions StatefulSet#match_expressions}
  */
  readonly matchExpressions?: StatefulSetSpecSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function statefulSetSpecSelectorToTerraform(struct?: StatefulSetSpecSelectorOutputReference | StatefulSetSpecSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class StatefulSetSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions = value.matchExpressions;
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
  private _matchExpressions?: StatefulSetSpecSelectorMatchExpressions[] | cdktf.IResolvable; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }
  public set matchExpressions(value: StatefulSetSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions;
  }
}
export interface StatefulSetSpecTemplateMetadata {
  /**
  * An unstructured key value map stored with the stateful set that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#annotations StatefulSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#generate_name StatefulSet#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the stateful set. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#labels StatefulSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the stateful set, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
}

export function statefulSetSpecTemplateMetadataToTerraform(struct?: StatefulSetSpecTemplateMetadataOutputReference | StatefulSetSpecTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class StatefulSetSpecTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateMetadata | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#operator StatefulSet#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#values StatefulSet#values}
  */
  readonly values?: string[];
}

export function statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_expressions StatefulSet#match_expressions}
  */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchExpressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchExpressions = value.matchExpressions;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }
  public set matchExpressions(value: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions;
  }
}
export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight is in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#weight StatefulSet#weight}
  */
  readonly weight: number;
  /**
  * preference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#preference StatefulSet#preference}
  */
  readonly preference: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
}

export function statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#operator StatefulSet#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#values StatefulSet#values}
  */
  readonly values?: string[];
}

export function statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions | cdktf.IResolvable): any {
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

export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm {
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_expressions StatefulSet#match_expressions}
  */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#node_selector_term StatefulSet#node_selector_term}
  */
  readonly nodeSelectorTerm?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_term: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform)(struct!.nodeSelectorTerm),
  }
}

export class StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerm !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerm = this._nodeSelectorTerm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelectorTerm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelectorTerm = value.nodeSelectorTerm;
    }
  }

  // node_selector_term - computed: false, optional: true, required: false
  private _nodeSelectorTerm?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[] | cdktf.IResolvable; 
  public get nodeSelectorTerm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_selector_term');
  }
  public set nodeSelectorTerm(value: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[] | cdktf.IResolvable) {
    this._nodeSelectorTerm = value;
  }
  public resetNodeSelectorTerm() {
    this._nodeSelectorTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermInput() {
    return this._nodeSelectorTerm;
  }
}
export interface StatefulSetSpecTemplateSpecAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#preferred_during_scheduling_ignored_during_execution StatefulSet#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#required_during_scheduling_ignored_during_execution StatefulSet#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function statefulSetSpecTemplateSpecAffinityNodeAffinityToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityNodeAffinityOutputReference | StatefulSetSpecTemplateSpecAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: statefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export class StatefulSetSpecTemplateSpecAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecAffinityNodeAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecAffinityNodeAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable; 
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution');
  }
  public set preferredDuringSchedulingIgnoredDuringExecution(value: StatefulSetSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: StatefulSetSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#operator StatefulSet#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#values StatefulSet#values}
  */
  readonly values?: string[];
}

export function statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_labels StatefulSet#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_expressions StatefulSet#match_expressions}
  */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#namespaces StatefulSet#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#topology_key StatefulSet#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#label_selector StatefulSet#label_selector}
  */
  readonly labelSelector?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export class StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector = value.labelSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | cdktf.IResolvable; 
  public get labelSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_selector');
  }
  public set labelSelector(value: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | cdktf.IResolvable) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }
}
export interface StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#weight StatefulSet#weight}
  */
  readonly weight: number;
  /**
  * pod_affinity_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#pod_affinity_term StatefulSet#pod_affinity_term}
  */
  readonly podAffinityTerm: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#operator StatefulSet#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#values StatefulSet#values}
  */
  readonly values?: string[];
}

export function statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_labels StatefulSet#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_expressions StatefulSet#match_expressions}
  */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#namespaces StatefulSet#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#topology_key StatefulSet#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#label_selector StatefulSet#label_selector}
  */
  readonly labelSelector?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#preferred_during_scheduling_ignored_during_execution StatefulSet#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#required_during_scheduling_ignored_during_execution StatefulSet#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityPodAffinityToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAffinityOutputReference | StatefulSetSpecTemplateSpecAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export class StatefulSetSpecTemplateSpecAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecAffinityPodAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecAffinityPodAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable; 
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution');
  }
  public set preferredDuringSchedulingIgnoredDuringExecution(value: StatefulSetSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable; 
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution');
  }
  public set requiredDuringSchedulingIgnoredDuringExecution(value: StatefulSetSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
}
export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#operator StatefulSet#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#values StatefulSet#values}
  */
  readonly values?: string[];
}

export function statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_labels StatefulSet#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_expressions StatefulSet#match_expressions}
  */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#namespaces StatefulSet#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#topology_key StatefulSet#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#label_selector StatefulSet#label_selector}
  */
  readonly labelSelector?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export class StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector = value.labelSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | cdktf.IResolvable; 
  public get labelSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_selector');
  }
  public set labelSelector(value: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[] | cdktf.IResolvable) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
  }
}
export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#weight StatefulSet#weight}
  */
  readonly weight: number;
  /**
  * pod_affinity_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#pod_affinity_term StatefulSet#pod_affinity_term}
  */
  readonly podAffinityTerm: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#operator StatefulSet#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#values StatefulSet#values}
  */
  readonly values?: string[];
}

export function statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_labels StatefulSet#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_expressions StatefulSet#match_expressions}
  */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#namespaces StatefulSet#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * empty topology key is interpreted by the scheduler as 'all topologies'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#topology_key StatefulSet#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#label_selector StatefulSet#label_selector}
  */
  readonly labelSelector?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface StatefulSetSpecTemplateSpecAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#preferred_during_scheduling_ignored_during_execution StatefulSet#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#required_during_scheduling_ignored_during_execution StatefulSet#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecAffinityPodAntiAffinityToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityOutputReference | StatefulSetSpecTemplateSpecAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(statefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export class StatefulSetSpecTemplateSpecAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecAffinityPodAntiAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecAffinityPodAntiAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable; 
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution');
  }
  public set preferredDuringSchedulingIgnoredDuringExecution(value: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable; 
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution');
  }
  public set requiredDuringSchedulingIgnoredDuringExecution(value: StatefulSetSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
}
export interface StatefulSetSpecTemplateSpecAffinity {
  /**
  * node_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#node_affinity StatefulSet#node_affinity}
  */
  readonly nodeAffinity?: StatefulSetSpecTemplateSpecAffinityNodeAffinity;
  /**
  * pod_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#pod_affinity StatefulSet#pod_affinity}
  */
  readonly podAffinity?: StatefulSetSpecTemplateSpecAffinityPodAffinity;
  /**
  * pod_anti_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#pod_anti_affinity StatefulSet#pod_anti_affinity}
  */
  readonly podAntiAffinity?: StatefulSetSpecTemplateSpecAffinityPodAntiAffinity;
}

export function statefulSetSpecTemplateSpecAffinityToTerraform(struct?: StatefulSetSpecTemplateSpecAffinityOutputReference | StatefulSetSpecTemplateSpecAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: statefulSetSpecTemplateSpecAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: statefulSetSpecTemplateSpecAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: statefulSetSpecTemplateSpecAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}

export class StatefulSetSpecTemplateSpecAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new StatefulSetSpecTemplateSpecAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: StatefulSetSpecTemplateSpecAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new StatefulSetSpecTemplateSpecAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: StatefulSetSpecTemplateSpecAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new StatefulSetSpecTemplateSpecAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: StatefulSetSpecTemplateSpecAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefOutputReference | StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // name - computed: false, optional: true, required: false
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#api_version StatefulSet#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#field_path StatefulSet#field_path}
  */
  readonly fieldPath?: string;
}

export function statefulSetSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRefOutputReference | StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#container_name StatefulSet#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#divisor StatefulSet#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#resource StatefulSet#resource}
  */
  readonly resource: string;
}

export function statefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRefOutputReference | StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRefOutputReference | StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // name - computed: false, optional: true, required: false
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface StatefulSetSpecTemplateSpecContainerEnvValueFrom {
  /**
  * config_map_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#config_map_key_ref StatefulSet#config_map_key_ref}
  */
  readonly configMapKeyRef?: StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#field_ref StatefulSet#field_ref}
  */
  readonly fieldRef?: StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#resource_field_ref StatefulSet#resource_field_ref}
  */
  readonly resourceFieldRef?: StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRef;
  /**
  * secret_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret_key_ref StatefulSet#secret_key_ref}
  */
  readonly secretKeyRef?: StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRef;
}

export function statefulSetSpecTemplateSpecContainerEnvValueFromToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvValueFromOutputReference | StatefulSetSpecTemplateSpecContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: statefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: statefulSetSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: statefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: statefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}

export class StatefulSetSpecTemplateSpecContainerEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerEnvValueFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerEnvValueFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: StatefulSetSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: StatefulSetSpecTemplateSpecContainerEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: StatefulSetSpecTemplateSpecContainerEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: StatefulSetSpecTemplateSpecContainerEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface StatefulSetSpecTemplateSpecContainerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
  /**
  * value_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value_from StatefulSet#value_from}
  */
  readonly valueFrom?: StatefulSetSpecTemplateSpecContainerEnvValueFrom;
}

export function statefulSetSpecTemplateSpecContainerEnvToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: statefulSetSpecTemplateSpecContainerEnvValueFromToTerraform(struct!.valueFrom),
  }
}

export interface StatefulSetSpecTemplateSpecContainerEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Specify whether the ConfigMap must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvFromConfigMapRefOutputReference | StatefulSetSpecTemplateSpecContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class StatefulSetSpecTemplateSpecContainerEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerEnvFromConfigMapRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerEnvFromConfigMapRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._optional = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface StatefulSetSpecTemplateSpecContainerEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerEnvFromSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvFromSecretRefOutputReference | StatefulSetSpecTemplateSpecContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class StatefulSetSpecTemplateSpecContainerEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerEnvFromSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerEnvFromSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._optional = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface StatefulSetSpecTemplateSpecContainerEnvFrom {
  /**
  * An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#prefix StatefulSet#prefix}
  */
  readonly prefix?: string;
  /**
  * config_map_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#config_map_ref StatefulSet#config_map_ref}
  */
  readonly configMapRef?: StatefulSetSpecTemplateSpecContainerEnvFromConfigMapRef;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret_ref StatefulSet#secret_ref}
  */
  readonly secretRef?: StatefulSetSpecTemplateSpecContainerEnvFromSecretRef;
}

export function statefulSetSpecTemplateSpecContainerEnvFromToTerraform(struct?: StatefulSetSpecTemplateSpecContainerEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: statefulSetSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    secret_ref: statefulSetSpecTemplateSpecContainerEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePostStartExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
}

export function statefulSetSpecTemplateSpecContainerLifecyclePostStartExecToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartExecOutputReference | StatefulSetSpecTemplateSpecContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class StatefulSetSpecTemplateSpecContainerLifecyclePostStartExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerLifecyclePostStartExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerLifecyclePostStartExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host StatefulSet#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#scheme StatefulSet#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_header StatefulSet#http_header}
  */
  readonly httpHeader?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetOutputReference | StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeader = value.httpHeader;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader[] | cdktf.IResolvable; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }
  public set httpHeader(value: StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }
}
export interface StatefulSetSpecTemplateSpecContainerLifecyclePostStartTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port: string;
}

export function statefulSetSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePostStart {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#exec StatefulSet#exec}
  */
  readonly exec?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_get StatefulSet#http_get}
  */
  readonly httpGet?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tcp_socket StatefulSet#tcp_socket}
  */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecContainerLifecyclePostStartTcpSocket[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerLifecyclePostStartToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: statefulSetSpecTemplateSpecContainerLifecyclePostStartExecToTerraform(struct!.exec),
    http_get: statefulSetSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePreStopExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
}

export function statefulSetSpecTemplateSpecContainerLifecyclePreStopExecToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopExecOutputReference | StatefulSetSpecTemplateSpecContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class StatefulSetSpecTemplateSpecContainerLifecyclePreStopExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerLifecyclePreStopExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerLifecyclePreStopExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host StatefulSet#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#scheme StatefulSet#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_header StatefulSet#http_header}
  */
  readonly httpHeader?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetOutputReference | StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeader = value.httpHeader;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader[] | cdktf.IResolvable; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }
  public set httpHeader(value: StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }
}
export interface StatefulSetSpecTemplateSpecContainerLifecyclePreStopTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port: string;
}

export function statefulSetSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecyclePreStop {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#exec StatefulSet#exec}
  */
  readonly exec?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_get StatefulSet#http_get}
  */
  readonly httpGet?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tcp_socket StatefulSet#tcp_socket}
  */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecContainerLifecyclePreStopTcpSocket[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerLifecyclePreStopToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: statefulSetSpecTemplateSpecContainerLifecyclePreStopExecToTerraform(struct!.exec),
    http_get: statefulSetSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLifecycle {
  /**
  * post_start block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#post_start StatefulSet#post_start}
  */
  readonly postStart?: StatefulSetSpecTemplateSpecContainerLifecyclePostStart[] | cdktf.IResolvable;
  /**
  * pre_stop block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#pre_stop StatefulSet#pre_stop}
  */
  readonly preStop?: StatefulSetSpecTemplateSpecContainerLifecyclePreStop[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerLifecycleToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLifecycleOutputReference | StatefulSetSpecTemplateSpecContainerLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export class StatefulSetSpecTemplateSpecContainerLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStart = this._postStart;
    }
    if (this._preStop !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStop = this._preStop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postStart = undefined;
      this._preStop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postStart = value.postStart;
      this._preStop = value.preStop;
    }
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart?: StatefulSetSpecTemplateSpecContainerLifecyclePostStart[] | cdktf.IResolvable; 
  public get postStart() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('post_start');
  }
  public set postStart(value: StatefulSetSpecTemplateSpecContainerLifecyclePostStart[] | cdktf.IResolvable) {
    this._postStart = value;
  }
  public resetPostStart() {
    this._postStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart;
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop?: StatefulSetSpecTemplateSpecContainerLifecyclePreStop[] | cdktf.IResolvable; 
  public get preStop() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pre_stop');
  }
  public set preStop(value: StatefulSetSpecTemplateSpecContainerLifecyclePreStop[] | cdktf.IResolvable) {
    this._preStop = value;
  }
  public resetPreStop() {
    this._preStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop;
  }
}
export interface StatefulSetSpecTemplateSpecContainerLivenessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
}

export function statefulSetSpecTemplateSpecContainerLivenessProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLivenessProbeExecOutputReference | StatefulSetSpecTemplateSpecContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class StatefulSetSpecTemplateSpecContainerLivenessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerLivenessProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerLivenessProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host StatefulSet#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#scheme StatefulSet#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_header StatefulSet#http_header}
  */
  readonly httpHeader?: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGetOutputReference | StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeader = value.httpHeader;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader[] | cdktf.IResolvable; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }
  public set httpHeader(value: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }
}
export interface StatefulSetSpecTemplateSpecContainerLivenessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port: string;
}

export function statefulSetSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecContainerLivenessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#failure_threshold StatefulSet#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#initial_delay_seconds StatefulSet#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#period_seconds StatefulSet#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#success_threshold StatefulSet#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#timeout_seconds StatefulSet#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#exec StatefulSet#exec}
  */
  readonly exec?: StatefulSetSpecTemplateSpecContainerLivenessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_get StatefulSet#http_get}
  */
  readonly httpGet?: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tcp_socket StatefulSet#tcp_socket}
  */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecContainerLivenessProbeTcpSocket[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerLivenessProbeToTerraform(struct?: StatefulSetSpecTemplateSpecContainerLivenessProbeOutputReference | StatefulSetSpecTemplateSpecContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: statefulSetSpecTemplateSpecContainerLivenessProbeExecToTerraform(struct!.exec),
    http_get: statefulSetSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class StatefulSetSpecTemplateSpecContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerLivenessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket = value.tcpSocket;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new StatefulSetSpecTemplateSpecContainerLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: StatefulSetSpecTemplateSpecContainerLivenessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: StatefulSetSpecTemplateSpecContainerLivenessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: StatefulSetSpecTemplateSpecContainerLivenessProbeTcpSocket[] | cdktf.IResolvable; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }
  public set tcpSocket(value: StatefulSetSpecTemplateSpecContainerLivenessProbeTcpSocket[] | cdktf.IResolvable) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket;
  }
}
export interface StatefulSetSpecTemplateSpecContainerPort {
  /**
  * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#container_port StatefulSet#container_port}
  */
  readonly containerPort: number;
  /**
  * What host IP to bind the external port to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host_ip StatefulSet#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host_port StatefulSet#host_port}
  */
  readonly hostPort?: number;
  /**
  * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP or TCP. Defaults to "TCP".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#protocol StatefulSet#protocol}
  */
  readonly protocol?: string;
}

export function statefulSetSpecTemplateSpecContainerPortToTerraform(struct?: StatefulSetSpecTemplateSpecContainerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface StatefulSetSpecTemplateSpecContainerReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
}

export function statefulSetSpecTemplateSpecContainerReadinessProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecContainerReadinessProbeExecOutputReference | StatefulSetSpecTemplateSpecContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class StatefulSetSpecTemplateSpecContainerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerReadinessProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerReadinessProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host StatefulSet#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#scheme StatefulSet#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_header StatefulSet#http_header}
  */
  readonly httpHeader?: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGetOutputReference | StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeader = value.httpHeader;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader[] | cdktf.IResolvable; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }
  public set httpHeader(value: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }
}
export interface StatefulSetSpecTemplateSpecContainerReadinessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port: string;
}

export function statefulSetSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecContainerReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecContainerReadinessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#failure_threshold StatefulSet#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#initial_delay_seconds StatefulSet#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#period_seconds StatefulSet#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#success_threshold StatefulSet#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#timeout_seconds StatefulSet#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#exec StatefulSet#exec}
  */
  readonly exec?: StatefulSetSpecTemplateSpecContainerReadinessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_get StatefulSet#http_get}
  */
  readonly httpGet?: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tcp_socket StatefulSet#tcp_socket}
  */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecContainerReadinessProbeTcpSocket[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerReadinessProbeToTerraform(struct?: StatefulSetSpecTemplateSpecContainerReadinessProbeOutputReference | StatefulSetSpecTemplateSpecContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: statefulSetSpecTemplateSpecContainerReadinessProbeExecToTerraform(struct!.exec),
    http_get: statefulSetSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class StatefulSetSpecTemplateSpecContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerReadinessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerReadinessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket = value.tcpSocket;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new StatefulSetSpecTemplateSpecContainerReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: StatefulSetSpecTemplateSpecContainerReadinessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: StatefulSetSpecTemplateSpecContainerReadinessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: StatefulSetSpecTemplateSpecContainerReadinessProbeTcpSocket[] | cdktf.IResolvable; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }
  public set tcpSocket(value: StatefulSetSpecTemplateSpecContainerReadinessProbeTcpSocket[] | cdktf.IResolvable) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket;
  }
}
export interface StatefulSetSpecTemplateSpecContainerResources {
  /**
  * Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#limits StatefulSet#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#requests StatefulSet#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function statefulSetSpecTemplateSpecContainerResourcesToTerraform(struct?: StatefulSetSpecTemplateSpecContainerResourcesOutputReference | StatefulSetSpecTemplateSpecContainerResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}

export class StatefulSetSpecTemplateSpecContainerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits = undefined;
      this._requests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: true, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: true, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface StatefulSetSpecTemplateSpecContainerSecurityContextCapabilities {
  /**
  * Added capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#add StatefulSet#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#drop StatefulSet#drop}
  */
  readonly drop?: string[];
}

export function statefulSetSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform(struct?: StatefulSetSpecTemplateSpecContainerSecurityContextCapabilitiesOutputReference | StatefulSetSpecTemplateSpecContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export class StatefulSetSpecTemplateSpecContainerSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerSecurityContextCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerSecurityContextCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._drop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#level StatefulSet#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#role StatefulSet#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#type StatefulSet#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#user StatefulSet#user}
  */
  readonly user?: string;
}

export function statefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform(struct?: StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptionsOutputReference | StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export class StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface StatefulSetSpecTemplateSpecContainerSecurityContextSeccompProfile {
  /**
  * Localhost Profile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#localhost_profile StatefulSet#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Type indicates which kind of seccomp profile will be applied. Valid options are: Localhost, RuntimeDefault, Unconfined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#type StatefulSet#type}
  */
  readonly type?: string;
}

export function statefulSetSpecTemplateSpecContainerSecurityContextSeccompProfileToTerraform(struct?: StatefulSetSpecTemplateSpecContainerSecurityContextSeccompProfileOutputReference | StatefulSetSpecTemplateSpecContainerSecurityContextSeccompProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class StatefulSetSpecTemplateSpecContainerSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerSecurityContextSeccompProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerSecurityContextSeccompProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface StatefulSetSpecTemplateSpecContainerSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#allow_privilege_escalation StatefulSet#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#privileged StatefulSet#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Whether this container has a read-only root filesystem. Default is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only_root_filesystem StatefulSet#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#run_as_group StatefulSet#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#run_as_non_root StatefulSet#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#run_as_user StatefulSet#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#capabilities StatefulSet#capabilities}
  */
  readonly capabilities?: StatefulSetSpecTemplateSpecContainerSecurityContextCapabilities;
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#se_linux_options StatefulSet#se_linux_options}
  */
  readonly seLinuxOptions?: StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptions;
  /**
  * seccomp_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#seccomp_profile StatefulSet#seccomp_profile}
  */
  readonly seccompProfile?: StatefulSetSpecTemplateSpecContainerSecurityContextSeccompProfile;
}

export function statefulSetSpecTemplateSpecContainerSecurityContextToTerraform(struct?: StatefulSetSpecTemplateSpecContainerSecurityContextOutputReference | StatefulSetSpecTemplateSpecContainerSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    capabilities: statefulSetSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    se_linux_options: statefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: statefulSetSpecTemplateSpecContainerSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
  }
}

export class StatefulSetSpecTemplateSpecContainerSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPrivilegeEscalation = undefined;
      this._privileged = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._capabilities.internalValue = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._privileged = value.privileged;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._capabilities.internalValue = value.capabilities;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: string; 
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }
  public set runAsGroup(value: string) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: string; 
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }
  public set runAsUser(value: string) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new StatefulSetSpecTemplateSpecContainerSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: StatefulSetSpecTemplateSpecContainerSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: StatefulSetSpecTemplateSpecContainerSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new StatefulSetSpecTemplateSpecContainerSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: StatefulSetSpecTemplateSpecContainerSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }
}
export interface StatefulSetSpecTemplateSpecContainerStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
}

export function statefulSetSpecTemplateSpecContainerStartupProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecContainerStartupProbeExecOutputReference | StatefulSetSpecTemplateSpecContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class StatefulSetSpecTemplateSpecContainerStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerStartupProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerStartupProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface StatefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecContainerStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host StatefulSet#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#scheme StatefulSet#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_header StatefulSet#http_header}
  */
  readonly httpHeader?: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerStartupProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGetOutputReference | StatefulSetSpecTemplateSpecContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class StatefulSetSpecTemplateSpecContainerStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerStartupProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeader = value.httpHeader;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader[] | cdktf.IResolvable; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }
  public set httpHeader(value: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }
}
export interface StatefulSetSpecTemplateSpecContainerStartupProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port: string;
}

export function statefulSetSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecContainerStartupProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecContainerStartupProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#failure_threshold StatefulSet#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#initial_delay_seconds StatefulSet#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#period_seconds StatefulSet#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#success_threshold StatefulSet#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#timeout_seconds StatefulSet#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#exec StatefulSet#exec}
  */
  readonly exec?: StatefulSetSpecTemplateSpecContainerStartupProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_get StatefulSet#http_get}
  */
  readonly httpGet?: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tcp_socket StatefulSet#tcp_socket}
  */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecContainerStartupProbeTcpSocket[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerStartupProbeToTerraform(struct?: StatefulSetSpecTemplateSpecContainerStartupProbeOutputReference | StatefulSetSpecTemplateSpecContainerStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: statefulSetSpecTemplateSpecContainerStartupProbeExecToTerraform(struct!.exec),
    http_get: statefulSetSpecTemplateSpecContainerStartupProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class StatefulSetSpecTemplateSpecContainerStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecContainerStartupProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecContainerStartupProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket = value.tcpSocket;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new StatefulSetSpecTemplateSpecContainerStartupProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: StatefulSetSpecTemplateSpecContainerStartupProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new StatefulSetSpecTemplateSpecContainerStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: StatefulSetSpecTemplateSpecContainerStartupProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: StatefulSetSpecTemplateSpecContainerStartupProbeTcpSocket[] | cdktf.IResolvable; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }
  public set tcpSocket(value: StatefulSetSpecTemplateSpecContainerStartupProbeTcpSocket[] | cdktf.IResolvable) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket;
  }
}
export interface StatefulSetSpecTemplateSpecContainerVolumeMount {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#mount_path StatefulSet#mount_path}
  */
  readonly mountPath: string;
  /**
  * Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#mount_propagation StatefulSet#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#sub_path StatefulSet#sub_path}
  */
  readonly subPath?: string;
}

export function statefulSetSpecTemplateSpecContainerVolumeMountToTerraform(struct?: StatefulSetSpecTemplateSpecContainerVolumeMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface StatefulSetSpecTemplateSpecContainer {
  /**
  * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#args StatefulSet#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
  /**
  * Docker image name. More info: http://kubernetes.io/docs/user-guide/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#image StatefulSet#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#image_pull_policy StatefulSet#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#stdin StatefulSet#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#stdin_once StatefulSet#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#termination_message_path StatefulSet#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#termination_message_policy StatefulSet#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tty StatefulSet#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#working_dir StatefulSet#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#env StatefulSet#env}
  */
  readonly env?: StatefulSetSpecTemplateSpecContainerEnv[] | cdktf.IResolvable;
  /**
  * env_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#env_from StatefulSet#env_from}
  */
  readonly envFrom?: StatefulSetSpecTemplateSpecContainerEnvFrom[] | cdktf.IResolvable;
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#lifecycle StatefulSet#lifecycle}
  */
  readonly lifecycle?: StatefulSetSpecTemplateSpecContainerLifecycle;
  /**
  * liveness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#liveness_probe StatefulSet#liveness_probe}
  */
  readonly livenessProbe?: StatefulSetSpecTemplateSpecContainerLivenessProbe;
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: StatefulSetSpecTemplateSpecContainerPort[] | cdktf.IResolvable;
  /**
  * readiness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#readiness_probe StatefulSet#readiness_probe}
  */
  readonly readinessProbe?: StatefulSetSpecTemplateSpecContainerReadinessProbe;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#resources StatefulSet#resources}
  */
  readonly resources?: StatefulSetSpecTemplateSpecContainerResources;
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#security_context StatefulSet#security_context}
  */
  readonly securityContext?: StatefulSetSpecTemplateSpecContainerSecurityContext;
  /**
  * startup_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#startup_probe StatefulSet#startup_probe}
  */
  readonly startupProbe?: StatefulSetSpecTemplateSpecContainerStartupProbe;
  /**
  * volume_mount block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#volume_mount StatefulSet#volume_mount}
  */
  readonly volumeMount?: StatefulSetSpecTemplateSpecContainerVolumeMount[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecContainerToTerraform(struct?: StatefulSetSpecTemplateSpecContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(statefulSetSpecTemplateSpecContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(statefulSetSpecTemplateSpecContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: statefulSetSpecTemplateSpecContainerLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: statefulSetSpecTemplateSpecContainerLivenessProbeToTerraform(struct!.livenessProbe),
    port: cdktf.listMapper(statefulSetSpecTemplateSpecContainerPortToTerraform)(struct!.port),
    readiness_probe: statefulSetSpecTemplateSpecContainerReadinessProbeToTerraform(struct!.readinessProbe),
    resources: statefulSetSpecTemplateSpecContainerResourcesToTerraform(struct!.resources),
    security_context: statefulSetSpecTemplateSpecContainerSecurityContextToTerraform(struct!.securityContext),
    startup_probe: statefulSetSpecTemplateSpecContainerStartupProbeToTerraform(struct!.startupProbe),
    volume_mount: cdktf.listMapper(statefulSetSpecTemplateSpecContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface StatefulSetSpecTemplateSpecDnsConfigOption {
  /**
  * Name of the option.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Value of the option. Optional: Defaults to empty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecDnsConfigOptionToTerraform(struct?: StatefulSetSpecTemplateSpecDnsConfigOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecDnsConfig {
  /**
  * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#nameservers StatefulSet#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#searches StatefulSet#searches}
  */
  readonly searches?: string[];
  /**
  * option block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#option StatefulSet#option}
  */
  readonly option?: StatefulSetSpecTemplateSpecDnsConfigOption[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecDnsConfigToTerraform(struct?: StatefulSetSpecTemplateSpecDnsConfigOutputReference | StatefulSetSpecTemplateSpecDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    searches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searches),
    option: cdktf.listMapper(statefulSetSpecTemplateSpecDnsConfigOptionToTerraform)(struct!.option),
  }
}

export class StatefulSetSpecTemplateSpecDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._searches !== undefined) {
      hasAnyValues = true;
      internalValueResult.searches = this._searches;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameservers = undefined;
      this._searches = undefined;
      this._option = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameservers = value.nameservers;
      this._searches = value.searches;
      this._option = value.option;
    }
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // searches - computed: false, optional: true, required: false
  private _searches?: string[]; 
  public get searches() {
    return this.getListAttribute('searches');
  }
  public set searches(value: string[]) {
    this._searches = value;
  }
  public resetSearches() {
    this._searches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchesInput() {
    return this._searches;
  }

  // option - computed: false, optional: true, required: false
  private _option?: StatefulSetSpecTemplateSpecDnsConfigOption[] | cdktf.IResolvable; 
  public get option() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('option');
  }
  public set option(value: StatefulSetSpecTemplateSpecDnsConfigOption[] | cdktf.IResolvable) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }
}
export interface StatefulSetSpecTemplateSpecHostAliases {
  /**
  * Hostnames for the IP address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#hostnames StatefulSet#hostnames}
  */
  readonly hostnames: string[];
  /**
  * IP address of the host file entry.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#ip StatefulSet#ip}
  */
  readonly ip: string;
}

export function statefulSetSpecTemplateSpecHostAliasesToTerraform(struct?: StatefulSetSpecTemplateSpecHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface StatefulSetSpecTemplateSpecImagePullSecrets {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
}

export function statefulSetSpecTemplateSpecImagePullSecretsToTerraform(struct?: StatefulSetSpecTemplateSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefOutputReference | StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // name - computed: false, optional: true, required: false
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#api_version StatefulSet#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#field_path StatefulSet#field_path}
  */
  readonly fieldPath?: string;
}

export function statefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRefOutputReference | StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#container_name StatefulSet#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#divisor StatefulSet#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#resource StatefulSet#resource}
  */
  readonly resource: string;
}

export function statefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefOutputReference | StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefOutputReference | StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // name - computed: false, optional: true, required: false
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerEnvValueFrom {
  /**
  * config_map_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#config_map_key_ref StatefulSet#config_map_key_ref}
  */
  readonly configMapKeyRef?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#field_ref StatefulSet#field_ref}
  */
  readonly fieldRef?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#resource_field_ref StatefulSet#resource_field_ref}
  */
  readonly resourceFieldRef?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef;
  /**
  * secret_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret_key_ref StatefulSet#secret_key_ref}
  */
  readonly secretKeyRef?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef;
}

export function statefulSetSpecTemplateSpecInitContainerEnvValueFromToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvValueFromOutputReference | StatefulSetSpecTemplateSpecInitContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: statefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: statefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: statefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: statefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerEnvValueFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerEnvValueFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: StatefulSetSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: StatefulSetSpecTemplateSpecInitContainerEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: StatefulSetSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: StatefulSetSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
  /**
  * value_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value_from StatefulSet#value_from}
  */
  readonly valueFrom?: StatefulSetSpecTemplateSpecInitContainerEnvValueFrom;
}

export function statefulSetSpecTemplateSpecInitContainerEnvToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: statefulSetSpecTemplateSpecInitContainerEnvValueFromToTerraform(struct!.valueFrom),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Specify whether the ConfigMap must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRefOutputReference | StatefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._optional = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret must be defined
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvFromSecretRefOutputReference | StatefulSetSpecTemplateSpecInitContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerEnvFromSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerEnvFromSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._optional = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerEnvFrom {
  /**
  * An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#prefix StatefulSet#prefix}
  */
  readonly prefix?: string;
  /**
  * config_map_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#config_map_ref StatefulSet#config_map_ref}
  */
  readonly configMapRef?: StatefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRef;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret_ref StatefulSet#secret_ref}
  */
  readonly secretRef?: StatefulSetSpecTemplateSpecInitContainerEnvFromSecretRef;
}

export function statefulSetSpecTemplateSpecInitContainerEnvFromToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: statefulSetSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    secret_ref: statefulSetSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
}

export function statefulSetSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartExecOutputReference | StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host StatefulSet#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#scheme StatefulSet#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_header StatefulSet#http_header}
  */
  readonly httpHeader?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetOutputReference | StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeader = value.httpHeader;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader[] | cdktf.IResolvable; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }
  public set httpHeader(value: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port: string;
}

export function statefulSetSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePostStart {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#exec StatefulSet#exec}
  */
  readonly exec?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_get StatefulSet#http_get}
  */
  readonly httpGet?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tcp_socket StatefulSet#tcp_socket}
  */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerLifecyclePostStartToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: statefulSetSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform(struct!.exec),
    http_get: statefulSetSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
}

export function statefulSetSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopExecOutputReference | StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host StatefulSet#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#scheme StatefulSet#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_header StatefulSet#http_header}
  */
  readonly httpHeader?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetOutputReference | StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeader = value.httpHeader;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader[] | cdktf.IResolvable; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }
  public set httpHeader(value: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port: string;
}

export function statefulSetSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecyclePreStop {
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#exec StatefulSet#exec}
  */
  readonly exec?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_get StatefulSet#http_get}
  */
  readonly httpGet?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tcp_socket StatefulSet#tcp_socket}
  */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerLifecyclePreStopToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: statefulSetSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform(struct!.exec),
    http_get: statefulSetSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLifecycle {
  /**
  * post_start block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#post_start StatefulSet#post_start}
  */
  readonly postStart?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStart[] | cdktf.IResolvable;
  /**
  * pre_stop block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#pre_stop StatefulSet#pre_stop}
  */
  readonly preStop?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStop[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerLifecycleToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLifecycleOutputReference | StatefulSetSpecTemplateSpecInitContainerLifecycle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerLifecycle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStart = this._postStart;
    }
    if (this._preStop !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStop = this._preStop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerLifecycle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postStart = undefined;
      this._preStop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postStart = value.postStart;
      this._preStop = value.preStop;
    }
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart?: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStart[] | cdktf.IResolvable; 
  public get postStart() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('post_start');
  }
  public set postStart(value: StatefulSetSpecTemplateSpecInitContainerLifecyclePostStart[] | cdktf.IResolvable) {
    this._postStart = value;
  }
  public resetPostStart() {
    this._postStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart;
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop?: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStop[] | cdktf.IResolvable; 
  public get preStop() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pre_stop');
  }
  public set preStop(value: StatefulSetSpecTemplateSpecInitContainerLifecyclePreStop[] | cdktf.IResolvable) {
    this._preStop = value;
  }
  public resetPreStop() {
    this._preStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerLivenessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
}

export function statefulSetSpecTemplateSpecInitContainerLivenessProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeExecOutputReference | StatefulSetSpecTemplateSpecInitContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerLivenessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerLivenessProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerLivenessProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host StatefulSet#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#scheme StatefulSet#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_header StatefulSet#http_header}
  */
  readonly httpHeader?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetOutputReference | StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeader = value.httpHeader;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader[] | cdktf.IResolvable; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }
  public set httpHeader(value: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port: string;
}

export function statefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerLivenessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#failure_threshold StatefulSet#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#initial_delay_seconds StatefulSet#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#period_seconds StatefulSet#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#success_threshold StatefulSet#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#timeout_seconds StatefulSet#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#exec StatefulSet#exec}
  */
  readonly exec?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_get StatefulSet#http_get}
  */
  readonly httpGet?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tcp_socket StatefulSet#tcp_socket}
  */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocket[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerLivenessProbeToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeOutputReference | StatefulSetSpecTemplateSpecInitContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: statefulSetSpecTemplateSpecInitContainerLivenessProbeExecToTerraform(struct!.exec),
    http_get: statefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerLivenessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket = value.tcpSocket;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new StatefulSetSpecTemplateSpecInitContainerLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: StatefulSetSpecTemplateSpecInitContainerLivenessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: StatefulSetSpecTemplateSpecInitContainerLivenessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: StatefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocket[] | cdktf.IResolvable; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }
  public set tcpSocket(value: StatefulSetSpecTemplateSpecInitContainerLivenessProbeTcpSocket[] | cdktf.IResolvable) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerPort {
  /**
  * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#container_port StatefulSet#container_port}
  */
  readonly containerPort: number;
  /**
  * What host IP to bind the external port to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host_ip StatefulSet#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host_port StatefulSet#host_port}
  */
  readonly hostPort?: number;
  /**
  * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Protocol for port. Must be UDP or TCP. Defaults to "TCP".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#protocol StatefulSet#protocol}
  */
  readonly protocol?: string;
}

export function statefulSetSpecTemplateSpecInitContainerPortToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
}

export function statefulSetSpecTemplateSpecInitContainerReadinessProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeExecOutputReference | StatefulSetSpecTemplateSpecInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerReadinessProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerReadinessProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host StatefulSet#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#scheme StatefulSet#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_header StatefulSet#http_header}
  */
  readonly httpHeader?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetOutputReference | StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeader = value.httpHeader;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader[] | cdktf.IResolvable; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }
  public set httpHeader(value: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port: string;
}

export function statefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerReadinessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#failure_threshold StatefulSet#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#initial_delay_seconds StatefulSet#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#period_seconds StatefulSet#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#success_threshold StatefulSet#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#timeout_seconds StatefulSet#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#exec StatefulSet#exec}
  */
  readonly exec?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_get StatefulSet#http_get}
  */
  readonly httpGet?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tcp_socket StatefulSet#tcp_socket}
  */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocket[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerReadinessProbeToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeOutputReference | StatefulSetSpecTemplateSpecInitContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: statefulSetSpecTemplateSpecInitContainerReadinessProbeExecToTerraform(struct!.exec),
    http_get: statefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerReadinessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerReadinessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket = value.tcpSocket;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new StatefulSetSpecTemplateSpecInitContainerReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: StatefulSetSpecTemplateSpecInitContainerReadinessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: StatefulSetSpecTemplateSpecInitContainerReadinessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: StatefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocket[] | cdktf.IResolvable; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }
  public set tcpSocket(value: StatefulSetSpecTemplateSpecInitContainerReadinessProbeTcpSocket[] | cdktf.IResolvable) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerResources {
  /**
  * Describes the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#limits StatefulSet#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#requests StatefulSet#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function statefulSetSpecTemplateSpecInitContainerResourcesToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerResourcesOutputReference | StatefulSetSpecTemplateSpecInitContainerResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits = undefined;
      this._requests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: true, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: true, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilities {
  /**
  * Added capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#add StatefulSet#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#drop StatefulSet#drop}
  */
  readonly drop?: string[];
}

export function statefulSetSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilitiesOutputReference | StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._drop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#level StatefulSet#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#role StatefulSet#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#type StatefulSet#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#user StatefulSet#user}
  */
  readonly user?: string;
}

export function statefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsOutputReference | StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerSecurityContextSeccompProfile {
  /**
  * Localhost Profile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#localhost_profile StatefulSet#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Type indicates which kind of seccomp profile will be applied. Valid options are: Localhost, RuntimeDefault, Unconfined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#type StatefulSet#type}
  */
  readonly type?: string;
}

export function statefulSetSpecTemplateSpecInitContainerSecurityContextSeccompProfileToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerSecurityContextSeccompProfileOutputReference | StatefulSetSpecTemplateSpecInitContainerSecurityContextSeccompProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerSecurityContextSeccompProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerSecurityContextSeccompProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface StatefulSetSpecTemplateSpecInitContainerSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#allow_privilege_escalation StatefulSet#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#privileged StatefulSet#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Whether this container has a read-only root filesystem. Default is false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only_root_filesystem StatefulSet#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#run_as_group StatefulSet#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#run_as_non_root StatefulSet#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#run_as_user StatefulSet#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#capabilities StatefulSet#capabilities}
  */
  readonly capabilities?: StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilities;
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#se_linux_options StatefulSet#se_linux_options}
  */
  readonly seLinuxOptions?: StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions;
  /**
  * seccomp_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#seccomp_profile StatefulSet#seccomp_profile}
  */
  readonly seccompProfile?: StatefulSetSpecTemplateSpecInitContainerSecurityContextSeccompProfile;
}

export function statefulSetSpecTemplateSpecInitContainerSecurityContextToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerSecurityContextOutputReference | StatefulSetSpecTemplateSpecInitContainerSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    capabilities: statefulSetSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    se_linux_options: statefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: statefulSetSpecTemplateSpecInitContainerSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPrivilegeEscalation = undefined;
      this._privileged = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._capabilities.internalValue = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._privileged = value.privileged;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._capabilities.internalValue = value.capabilities;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: string; 
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }
  public set runAsGroup(value: string) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: string; 
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }
  public set runAsUser(value: string) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: StatefulSetSpecTemplateSpecInitContainerSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: StatefulSetSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new StatefulSetSpecTemplateSpecInitContainerSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: StatefulSetSpecTemplateSpecInitContainerSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
}

export function statefulSetSpecTemplateSpecInitContainerStartupProbeExecToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerStartupProbeExecOutputReference | StatefulSetSpecTemplateSpecInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerStartupProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerStartupProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host StatefulSet#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: string;
  /**
  * Scheme to use for connecting to the host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#scheme StatefulSet#scheme}
  */
  readonly scheme?: string;
  /**
  * http_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_header StatefulSet#http_header}
  */
  readonly httpHeader?: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetOutputReference | StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeader = value.httpHeader;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader[] | cdktf.IResolvable; 
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }
  public set httpHeader(value: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader[] | cdktf.IResolvable) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocket {
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port: string;
}

export function statefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainerStartupProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#failure_threshold StatefulSet#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#initial_delay_seconds StatefulSet#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#period_seconds StatefulSet#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#success_threshold StatefulSet#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#timeout_seconds StatefulSet#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#exec StatefulSet#exec}
  */
  readonly exec?: StatefulSetSpecTemplateSpecInitContainerStartupProbeExec;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#http_get StatefulSet#http_get}
  */
  readonly httpGet?: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tcp_socket StatefulSet#tcp_socket}
  */
  readonly tcpSocket?: StatefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocket[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerStartupProbeToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerStartupProbeOutputReference | StatefulSetSpecTemplateSpecInitContainerStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: statefulSetSpecTemplateSpecInitContainerStartupProbeExecToTerraform(struct!.exec),
    http_get: statefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export class StatefulSetSpecTemplateSpecInitContainerStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecInitContainerStartupProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecInitContainerStartupProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket = value.tcpSocket;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new StatefulSetSpecTemplateSpecInitContainerStartupProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: StatefulSetSpecTemplateSpecInitContainerStartupProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: StatefulSetSpecTemplateSpecInitContainerStartupProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket?: StatefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocket[] | cdktf.IResolvable; 
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }
  public set tcpSocket(value: StatefulSetSpecTemplateSpecInitContainerStartupProbeTcpSocket[] | cdktf.IResolvable) {
    this._tcpSocket = value;
  }
  public resetTcpSocket() {
    this._tcpSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket;
  }
}
export interface StatefulSetSpecTemplateSpecInitContainerVolumeMount {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#mount_path StatefulSet#mount_path}
  */
  readonly mountPath: string;
  /**
  * Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#mount_propagation StatefulSet#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#sub_path StatefulSet#sub_path}
  */
  readonly subPath?: string;
}

export function statefulSetSpecTemplateSpecInitContainerVolumeMountToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainerVolumeMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface StatefulSetSpecTemplateSpecInitContainer {
  /**
  * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#args StatefulSet#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#command StatefulSet#command}
  */
  readonly command?: string[];
  /**
  * Docker image name. More info: http://kubernetes.io/docs/user-guide/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#image StatefulSet#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#image_pull_policy StatefulSet#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#stdin StatefulSet#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#stdin_once StatefulSet#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#termination_message_path StatefulSet#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#termination_message_policy StatefulSet#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#tty StatefulSet#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#working_dir StatefulSet#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#env StatefulSet#env}
  */
  readonly env?: StatefulSetSpecTemplateSpecInitContainerEnv[] | cdktf.IResolvable;
  /**
  * env_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#env_from StatefulSet#env_from}
  */
  readonly envFrom?: StatefulSetSpecTemplateSpecInitContainerEnvFrom[] | cdktf.IResolvable;
  /**
  * lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#lifecycle StatefulSet#lifecycle}
  */
  readonly lifecycle?: StatefulSetSpecTemplateSpecInitContainerLifecycle;
  /**
  * liveness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#liveness_probe StatefulSet#liveness_probe}
  */
  readonly livenessProbe?: StatefulSetSpecTemplateSpecInitContainerLivenessProbe;
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#port StatefulSet#port}
  */
  readonly port?: StatefulSetSpecTemplateSpecInitContainerPort[] | cdktf.IResolvable;
  /**
  * readiness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#readiness_probe StatefulSet#readiness_probe}
  */
  readonly readinessProbe?: StatefulSetSpecTemplateSpecInitContainerReadinessProbe;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#resources StatefulSet#resources}
  */
  readonly resources?: StatefulSetSpecTemplateSpecInitContainerResources;
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#security_context StatefulSet#security_context}
  */
  readonly securityContext?: StatefulSetSpecTemplateSpecInitContainerSecurityContext;
  /**
  * startup_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#startup_probe StatefulSet#startup_probe}
  */
  readonly startupProbe?: StatefulSetSpecTemplateSpecInitContainerStartupProbe;
  /**
  * volume_mount block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#volume_mount StatefulSet#volume_mount}
  */
  readonly volumeMount?: StatefulSetSpecTemplateSpecInitContainerVolumeMount[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecInitContainerToTerraform(struct?: StatefulSetSpecTemplateSpecInitContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: statefulSetSpecTemplateSpecInitContainerLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: statefulSetSpecTemplateSpecInitContainerLivenessProbeToTerraform(struct!.livenessProbe),
    port: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerPortToTerraform)(struct!.port),
    readiness_probe: statefulSetSpecTemplateSpecInitContainerReadinessProbeToTerraform(struct!.readinessProbe),
    resources: statefulSetSpecTemplateSpecInitContainerResourcesToTerraform(struct!.resources),
    security_context: statefulSetSpecTemplateSpecInitContainerSecurityContextToTerraform(struct!.securityContext),
    startup_probe: statefulSetSpecTemplateSpecInitContainerStartupProbeToTerraform(struct!.startupProbe),
    volume_mount: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface StatefulSetSpecTemplateSpecReadinessGate {
  /**
  * refers to a condition in the pod's condition list with matching type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#condition_type StatefulSet#condition_type}
  */
  readonly conditionType: string;
}

export function statefulSetSpecTemplateSpecReadinessGateToTerraform(struct?: StatefulSetSpecTemplateSpecReadinessGate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}

export interface StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#level StatefulSet#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#role StatefulSet#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#type StatefulSet#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#user StatefulSet#user}
  */
  readonly user?: string;
}

export function statefulSetSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct?: StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference | StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export class StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface StatefulSetSpecTemplateSpecSecurityContextSeccompProfile {
  /**
  * Localhost Profile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#localhost_profile StatefulSet#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Type indicates which kind of seccomp profile will be applied. Valid options are: Localhost, RuntimeDefault, Unconfined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#type StatefulSet#type}
  */
  readonly type?: string;
}

export function statefulSetSpecTemplateSpecSecurityContextSeccompProfileToTerraform(struct?: StatefulSetSpecTemplateSpecSecurityContextSeccompProfileOutputReference | StatefulSetSpecTemplateSpecSecurityContextSeccompProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class StatefulSetSpecTemplateSpecSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecSecurityContextSeccompProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecSecurityContextSeccompProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
export interface StatefulSetSpecTemplateSpecSecurityContextSysctl {
  /**
  * Name of a property to set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name: string;
  /**
  * Value of a property to set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value: string;
}

export function statefulSetSpecTemplateSpecSecurityContextSysctlToTerraform(struct?: StatefulSetSpecTemplateSpecSecurityContextSysctl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_group StatefulSet#fs_group}
  */
  readonly fsGroup?: string;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#run_as_group StatefulSet#run_as_group}
  */
  readonly runAsGroup?: string;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#run_as_non_root StatefulSet#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#run_as_user StatefulSet#run_as_user}
  */
  readonly runAsUser?: string;
  /**
  * A list of groups applied to the first process run in each container, in addition to the container's primary GID. If unspecified, no groups will be added to any container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#supplemental_groups StatefulSet#supplemental_groups}
  */
  readonly supplementalGroups?: number[];
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#se_linux_options StatefulSet#se_linux_options}
  */
  readonly seLinuxOptions?: StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions;
  /**
  * seccomp_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#seccomp_profile StatefulSet#seccomp_profile}
  */
  readonly seccompProfile?: StatefulSetSpecTemplateSpecSecurityContextSeccompProfile;
  /**
  * sysctl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#sysctl StatefulSet#sysctl}
  */
  readonly sysctl?: StatefulSetSpecTemplateSpecSecurityContextSysctl[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecSecurityContextToTerraform(struct?: StatefulSetSpecTemplateSpecSecurityContextOutputReference | StatefulSetSpecTemplateSpecSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.stringToTerraform(struct!.fsGroup),
    run_as_group: cdktf.stringToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.stringToTerraform(struct!.runAsUser),
    supplemental_groups: cdktf.listMapper(cdktf.numberToTerraform)(struct!.supplementalGroups),
    se_linux_options: statefulSetSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: statefulSetSpecTemplateSpecSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    sysctl: cdktf.listMapper(statefulSetSpecTemplateSpecSecurityContextSysctlToTerraform)(struct!.sysctl),
  }
}

export class StatefulSetSpecTemplateSpecSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._sysctl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctl = this._sysctl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsGroup = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._supplementalGroups = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._sysctl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsGroup = value.fsGroup;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._supplementalGroups = value.supplementalGroups;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._sysctl = value.sysctl;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: string; 
  public get fsGroup() {
    return this.getStringAttribute('fs_group');
  }
  public set fsGroup(value: string) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: string; 
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }
  public set runAsGroup(value: string) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: string; 
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }
  public set runAsUser(value: string) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: number[]; 
  public get supplementalGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('supplemental_groups')));
  }
  public set supplementalGroups(value: number[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: StatefulSetSpecTemplateSpecSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new StatefulSetSpecTemplateSpecSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: StatefulSetSpecTemplateSpecSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // sysctl - computed: false, optional: true, required: false
  private _sysctl?: StatefulSetSpecTemplateSpecSecurityContextSysctl[] | cdktf.IResolvable; 
  public get sysctl() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sysctl');
  }
  public set sysctl(value: StatefulSetSpecTemplateSpecSecurityContextSysctl[] | cdktf.IResolvable) {
    this._sysctl = value;
  }
  public resetSysctl() {
    this._sysctl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlInput() {
    return this._sysctl;
  }
}
export interface StatefulSetSpecTemplateSpecToleration {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#effect StatefulSet#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#operator StatefulSet#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#toleration_seconds StatefulSet#toleration_seconds}
  */
  readonly tolerationSeconds?: string;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#value StatefulSet#value}
  */
  readonly value?: string;
}

export function statefulSetSpecTemplateSpecTolerationToTerraform(struct?: StatefulSetSpecTemplateSpecToleration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.stringToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#operator StatefulSet#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#values StatefulSet#values}
  */
  readonly values?: string[];
}

export function statefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export interface StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_labels StatefulSet#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_expressions StatefulSet#match_expressions}
  */
  readonly matchExpressions?: StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorToTerraform(struct?: StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface StatefulSetSpecTemplateSpecTopologySpreadConstraint {
  /**
  * describes the degree to which pods may be unevenly distributed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#max_skew StatefulSet#max_skew}
  */
  readonly maxSkew?: number;
  /**
  * the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#topology_key StatefulSet#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * indicates how to deal with a pod if it doesn't satisfy the spread constraint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#when_unsatisfiable StatefulSet#when_unsatisfiable}
  */
  readonly whenUnsatisfiable?: string;
  /**
  * label_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#label_selector StatefulSet#label_selector}
  */
  readonly labelSelector?: StatefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelector[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecTopologySpreadConstraintToTerraform(struct?: StatefulSetSpecTemplateSpecTopologySpreadConstraint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
    label_selector: cdktf.listMapper(statefulSetSpecTemplateSpecTopologySpreadConstraintLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeAwsElasticBlockStore {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_type StatefulSet#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#partition StatefulSet#partition}
  */
  readonly partition?: number;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#volume_id StatefulSet#volume_id}
  */
  readonly volumeId: string;
}

export function statefulSetSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeAwsElasticBlockStoreOutputReference | StatefulSetSpecTemplateSpecVolumeAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export class StatefulSetSpecTemplateSpecVolumeAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeAwsElasticBlockStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeAwsElasticBlockStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsType = undefined;
      this._partition = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeAzureDisk {
  /**
  * Host Caching mode: None, Read Only, Read Write.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#caching_mode StatefulSet#caching_mode}
  */
  readonly cachingMode: string;
  /**
  * The URI the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#data_disk_uri StatefulSet#data_disk_uri}
  */
  readonly dataDiskUri: string;
  /**
  * The Name of the data disk in the blob storage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#disk_name StatefulSet#disk_name}
  */
  readonly diskName: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_type StatefulSet#fs_type}
  */
  readonly fsType?: string;
  /**
  * The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#kind StatefulSet#kind}
  */
  readonly kind?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecVolumeAzureDiskToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeAzureDiskOutputReference | StatefulSetSpecTemplateSpecVolumeAzureDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    data_disk_uri: cdktf.stringToTerraform(struct!.dataDiskUri),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class StatefulSetSpecTemplateSpecVolumeAzureDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeAzureDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingMode = this._cachingMode;
    }
    if (this._dataDiskUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskUri = this._dataDiskUri;
    }
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeAzureDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cachingMode = undefined;
      this._dataDiskUri = undefined;
      this._diskName = undefined;
      this._fsType = undefined;
      this._kind = undefined;
      this._readOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cachingMode = value.cachingMode;
      this._dataDiskUri = value.dataDiskUri;
      this._diskName = value.diskName;
      this._fsType = value.fsType;
      this._kind = value.kind;
      this._readOnly = value.readOnly;
    }
  }

  // caching_mode - computed: false, optional: false, required: true
  private _cachingMode?: string; 
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }
  public set cachingMode(value: string) {
    this._cachingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingModeInput() {
    return this._cachingMode;
  }

  // data_disk_uri - computed: false, optional: false, required: true
  private _dataDiskUri?: string; 
  public get dataDiskUri() {
    return this.getStringAttribute('data_disk_uri');
  }
  public set dataDiskUri(value: string) {
    this._dataDiskUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskUriInput() {
    return this._dataDiskUri;
  }

  // disk_name - computed: false, optional: false, required: true
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeAzureFile {
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of secret that contains Azure Storage Account Name and Key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret_name StatefulSet#secret_name}
  */
  readonly secretName: string;
  /**
  * The namespace of the secret that contains Azure Storage Account Name and Key. For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret_namespace StatefulSet#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * Share Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#share_name StatefulSet#share_name}
  */
  readonly shareName: string;
}

export function statefulSetSpecTemplateSpecVolumeAzureFileToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeAzureFileOutputReference | StatefulSetSpecTemplateSpecVolumeAzureFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}

export class StatefulSetSpecTemplateSpecVolumeAzureFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeAzureFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNamespace = this._secretNamespace;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeAzureFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._readOnly = undefined;
      this._secretName = undefined;
      this._secretNamespace = undefined;
      this._shareName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._readOnly = value.readOnly;
      this._secretName = value.secretName;
      this._secretNamespace = value.secretNamespace;
      this._shareName = value.shareName;
    }
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_namespace - computed: false, optional: true, required: false
  private _secretNamespace?: string; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string) {
    this._secretNamespace = value;
  }
  public resetSecretNamespace() {
    this._secretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace;
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeCephFsSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#namespace StatefulSet#namespace}
  */
  readonly namespace?: string;
}

export function statefulSetSpecTemplateSpecVolumeCephFsSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCephFsSecretRefOutputReference | StatefulSetSpecTemplateSpecVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class StatefulSetSpecTemplateSpecVolumeCephFsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeCephFsSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeCephFsSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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
}
export interface StatefulSetSpecTemplateSpecVolumeCephFs {
  /**
  * Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#monitors StatefulSet#monitors}
  */
  readonly monitors: string[];
  /**
  * Used as the mounted root, rather than the full Ceph tree, default is /
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret_file StatefulSet#secret_file}
  */
  readonly secretFile?: string;
  /**
  * User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#user StatefulSet#user}
  */
  readonly user?: string;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret_ref StatefulSet#secret_ref}
  */
  readonly secretRef?: StatefulSetSpecTemplateSpecVolumeCephFsSecretRef;
}

export function statefulSetSpecTemplateSpecVolumeCephFsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCephFsOutputReference | StatefulSetSpecTemplateSpecVolumeCephFs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    user: cdktf.stringToTerraform(struct!.user),
    secret_ref: statefulSetSpecTemplateSpecVolumeCephFsSecretRefToTerraform(struct!.secretRef),
  }
}

export class StatefulSetSpecTemplateSpecVolumeCephFsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeCephFs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretFile = this._secretFile;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeCephFs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monitors = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._secretFile = undefined;
      this._user = undefined;
      this._secretRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monitors = value.monitors;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._secretFile = value.secretFile;
      this._user = value.user;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return cdktf.Fn.tolist(this.getListAttribute('monitors'));
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_file - computed: false, optional: true, required: false
  private _secretFile?: string; 
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }
  public set secretFile(value: string) {
    this._secretFile = value;
  }
  public resetSecretFile() {
    this._secretFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFileInput() {
    return this._secretFile;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new StatefulSetSpecTemplateSpecVolumeCephFsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: StatefulSetSpecTemplateSpecVolumeCephFsSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeCinder {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_type StatefulSet#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#volume_id StatefulSet#volume_id}
  */
  readonly volumeId: string;
}

export function statefulSetSpecTemplateSpecVolumeCinderToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCinderOutputReference | StatefulSetSpecTemplateSpecVolumeCinder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export class StatefulSetSpecTemplateSpecVolumeCinderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeCinder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeCinder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeConfigMapItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#mode StatefulSet#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
}

export function statefulSetSpecTemplateSpecVolumeConfigMapItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeConfigMap {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#default_mode StatefulSet#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the ConfigMap or its keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#items StatefulSet#items}
  */
  readonly items?: StatefulSetSpecTemplateSpecVolumeConfigMapItems[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecVolumeConfigMapToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeConfigMapOutputReference | StatefulSetSpecTemplateSpecVolumeConfigMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeConfigMapItemsToTerraform)(struct!.items),
  }
}

export class StatefulSetSpecTemplateSpecVolumeConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeConfigMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeConfigMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultMode = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultMode = value.defaultMode;
      this._name = value.name;
      this._optional = value.optional;
      this._items = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: string; 
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }
  public set defaultMode(value: string) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // name - computed: false, optional: true, required: false
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // items - computed: false, optional: true, required: false
  private _items?: StatefulSetSpecTemplateSpecVolumeConfigMapItems[] | cdktf.IResolvable; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items');
  }
  public set items(value: StatefulSetSpecTemplateSpecVolumeConfigMapItems[] | cdktf.IResolvable) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
}

export function statefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRefOutputReference | StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
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
}
export interface StatefulSetSpecTemplateSpecVolumeCsi {
  /**
  * the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#driver StatefulSet#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_type StatefulSet#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Attributes of the volume to publish.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#volume_attributes StatefulSet#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string };
  /**
  * node_publish_secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#node_publish_secret_ref StatefulSet#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRef;
}

export function statefulSetSpecTemplateSpecVolumeCsiToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeCsiOutputReference | StatefulSetSpecTemplateSpecVolumeCsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.volumeAttributes),
    node_publish_secret_ref: statefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform(struct!.nodePublishSecretRef),
  }
}

export class StatefulSetSpecTemplateSpecVolumeCsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeCsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributes = this._volumeAttributes;
    }
    if (this._nodePublishSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublishSecretRef = this._nodePublishSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeCsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driver = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._volumeAttributes = undefined;
      this._nodePublishSecretRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._volumeAttributes = value.volumeAttributes;
      this._nodePublishSecretRef.internalValue = value.nodePublishSecretRef;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_attributes - computed: false, optional: true, required: false
  private _volumeAttributes?: { [key: string]: string }; 
  public get volumeAttributes() {
    return this.getStringMapAttribute('volume_attributes');
  }
  public set volumeAttributes(value: { [key: string]: string }) {
    this._volumeAttributes = value;
  }
  public resetVolumeAttributes() {
    this._volumeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesInput() {
    return this._volumeAttributes;
  }

  // node_publish_secret_ref - computed: false, optional: true, required: false
  private _nodePublishSecretRef = new StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRefOutputReference(this, "node_publish_secret_ref");
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }
  public putNodePublishSecretRef(value: StatefulSetSpecTemplateSpecVolumeCsiNodePublishSecretRef) {
    this._nodePublishSecretRef.internalValue = value;
  }
  public resetNodePublishSecretRef() {
    this._nodePublishSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublishSecretRefInput() {
    return this._nodePublishSecretRef.internalValue;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to "v1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#api_version StatefulSet#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#field_path StatefulSet#field_path}
  */
  readonly fieldPath?: string;
}

export function statefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRefOutputReference | StatefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class StatefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#container_name StatefulSet#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#divisor StatefulSet#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#resource StatefulSet#resource}
  */
  readonly resource: string;
}

export function statefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefOutputReference | StatefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class StatefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeDownwardApiItems {
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#mode StatefulSet#mode}
  */
  readonly mode?: string;
  /**
  * Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path: string;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#field_ref StatefulSet#field_ref}
  */
  readonly fieldRef: StatefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#resource_field_ref StatefulSet#resource_field_ref}
  */
  readonly resourceFieldRef?: StatefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef;
}

export function statefulSetSpecTemplateSpecVolumeDownwardApiItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: statefulSetSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: statefulSetSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeDownwardApi {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#default_mode StatefulSet#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#items StatefulSet#items}
  */
  readonly items?: StatefulSetSpecTemplateSpecVolumeDownwardApiItems[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecVolumeDownwardApiToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeDownwardApiOutputReference | StatefulSetSpecTemplateSpecVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeDownwardApiItemsToTerraform)(struct!.items),
  }
}

export class StatefulSetSpecTemplateSpecVolumeDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeDownwardApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeDownwardApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultMode = undefined;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultMode = value.defaultMode;
      this._items = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: string; 
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }
  public set defaultMode(value: string) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items?: StatefulSetSpecTemplateSpecVolumeDownwardApiItems[] | cdktf.IResolvable; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items');
  }
  public set items(value: StatefulSetSpecTemplateSpecVolumeDownwardApiItems[] | cdktf.IResolvable) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeEmptyDir {
  /**
  * What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#medium StatefulSet#medium}
  */
  readonly medium?: string;
  /**
  * Total amount of local storage required for this EmptyDir volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#size_limit StatefulSet#size_limit}
  */
  readonly sizeLimit?: string;
}

export function statefulSetSpecTemplateSpecVolumeEmptyDirToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeEmptyDirOutputReference | StatefulSetSpecTemplateSpecVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}

export class StatefulSetSpecTemplateSpecVolumeEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeEmptyDir | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeEmptyDir | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeFc {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_type StatefulSet#fs_type}
  */
  readonly fsType?: string;
  /**
  * FC target lun number
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#lun StatefulSet#lun}
  */
  readonly lun: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * FC target worldwide names (WWNs)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#target_ww_ns StatefulSet#target_ww_ns}
  */
  readonly targetWwNs: string[];
}

export function statefulSetSpecTemplateSpecVolumeFcToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeFcOutputReference | StatefulSetSpecTemplateSpecVolumeFc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetWwNs),
  }
}

export class StatefulSetSpecTemplateSpecVolumeFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeFc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._targetWwNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetWwNs = this._targetWwNs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeFc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsType = undefined;
      this._lun = undefined;
      this._readOnly = undefined;
      this._targetWwNs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsType = value.fsType;
      this._lun = value.lun;
      this._readOnly = value.readOnly;
      this._targetWwNs = value.targetWwNs;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // target_ww_ns - computed: false, optional: false, required: true
  private _targetWwNs?: string[]; 
  public get targetWwNs() {
    return cdktf.Fn.tolist(this.getListAttribute('target_ww_ns'));
  }
  public set targetWwNs(value: string[]) {
    this._targetWwNs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWwNsInput() {
    return this._targetWwNs;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#namespace StatefulSet#namespace}
  */
  readonly namespace?: string;
}

export function statefulSetSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRefOutputReference | StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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
}
export interface StatefulSetSpecTemplateSpecVolumeFlexVolume {
  /**
  * Driver is the name of the driver to use for this volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#driver StatefulSet#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_type StatefulSet#fs_type}
  */
  readonly fsType?: string;
  /**
  * Extra command options if any.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#options StatefulSet#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret_ref StatefulSet#secret_ref}
  */
  readonly secretRef?: StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRef;
}

export function statefulSetSpecTemplateSpecVolumeFlexVolumeToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeFlexVolumeOutputReference | StatefulSetSpecTemplateSpecVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: statefulSetSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}

export class StatefulSetSpecTemplateSpecVolumeFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeFlexVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeFlexVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driver = undefined;
      this._fsType = undefined;
      this._options = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._options = value.options;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: StatefulSetSpecTemplateSpecVolumeFlexVolumeSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeFlocker {
  /**
  * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#dataset_name StatefulSet#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * UUID of the dataset. This is unique identifier of a Flocker dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#dataset_uuid StatefulSet#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function statefulSetSpecTemplateSpecVolumeFlockerToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeFlockerOutputReference | StatefulSetSpecTemplateSpecVolumeFlocker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}

export class StatefulSetSpecTemplateSpecVolumeFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeFlocker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._datasetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetUuid = this._datasetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeFlocker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetName = undefined;
      this._datasetUuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetName = value.datasetName;
      this._datasetUuid = value.datasetUuid;
    }
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // dataset_uuid - computed: false, optional: true, required: false
  private _datasetUuid?: string; 
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
  public set datasetUuid(value: string) {
    this._datasetUuid = value;
  }
  public resetDatasetUuid() {
    this._datasetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUuidInput() {
    return this._datasetUuid;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeGcePersistentDisk {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_type StatefulSet#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#partition StatefulSet#partition}
  */
  readonly partition?: number;
  /**
  * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#pd_name StatefulSet#pd_name}
  */
  readonly pdName: string;
  /**
  * Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecVolumeGcePersistentDiskToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeGcePersistentDiskOutputReference | StatefulSetSpecTemplateSpecVolumeGcePersistentDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class StatefulSetSpecTemplateSpecVolumeGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeGcePersistentDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._pdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdName = this._pdName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeGcePersistentDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsType = undefined;
      this._partition = undefined;
      this._pdName = undefined;
      this._readOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._pdName = value.pdName;
      this._readOnly = value.readOnly;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // pd_name - computed: false, optional: false, required: true
  private _pdName?: string; 
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }
  public set pdName(value: string) {
    this._pdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdNameInput() {
    return this._pdName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeGitRepo {
  /**
  * Target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#directory StatefulSet#directory}
  */
  readonly directory?: string;
  /**
  * Repository URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#repository StatefulSet#repository}
  */
  readonly repository?: string;
  /**
  * Commit hash for the specified revision.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#revision StatefulSet#revision}
  */
  readonly revision?: string;
}

export function statefulSetSpecTemplateSpecVolumeGitRepoToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeGitRepoOutputReference | StatefulSetSpecTemplateSpecVolumeGitRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}

export class StatefulSetSpecTemplateSpecVolumeGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeGitRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeGitRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directory = undefined;
      this._repository = undefined;
      this._revision = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directory = value.directory;
      this._repository = value.repository;
      this._revision = value.revision;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeGlusterfs {
  /**
  * The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#endpoints_name StatefulSet#endpoints_name}
  */
  readonly endpointsName: string;
  /**
  * The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path: string;
  /**
  * Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecVolumeGlusterfsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeGlusterfsOutputReference | StatefulSetSpecTemplateSpecVolumeGlusterfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints_name: cdktf.stringToTerraform(struct!.endpointsName),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class StatefulSetSpecTemplateSpecVolumeGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeGlusterfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointsName = this._endpointsName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeGlusterfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointsName = undefined;
      this._path = undefined;
      this._readOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointsName = value.endpointsName;
      this._path = value.path;
      this._readOnly = value.readOnly;
    }
  }

  // endpoints_name - computed: false, optional: false, required: true
  private _endpointsName?: string; 
  public get endpointsName() {
    return this.getStringAttribute('endpoints_name');
  }
  public set endpointsName(value: string) {
    this._endpointsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsNameInput() {
    return this._endpointsName;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeHostPath {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
  /**
  * Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#type StatefulSet#type}
  */
  readonly type?: string;
}

export function statefulSetSpecTemplateSpecVolumeHostPathToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeHostPathOutputReference | StatefulSetSpecTemplateSpecVolumeHostPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class StatefulSetSpecTemplateSpecVolumeHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeHostPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeHostPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
export interface StatefulSetSpecTemplateSpecVolumeIscsi {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_type StatefulSet#fs_type}
  */
  readonly fsType?: string;
  /**
  * Target iSCSI Qualified Name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#iqn StatefulSet#iqn}
  */
  readonly iqn: string;
  /**
  * iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#iscsi_interface StatefulSet#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * iSCSI target lun number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#lun StatefulSet#lun}
  */
  readonly lun?: number;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#target_portal StatefulSet#target_portal}
  */
  readonly targetPortal: string;
}

export function statefulSetSpecTemplateSpecVolumeIscsiToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeIscsiOutputReference | StatefulSetSpecTemplateSpecVolumeIscsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}

export class StatefulSetSpecTemplateSpecVolumeIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeIscsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._iqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iqn = this._iqn;
    }
    if (this._iscsiInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiInterface = this._iscsiInterface;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._targetPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPortal = this._targetPortal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeIscsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsType = undefined;
      this._iqn = undefined;
      this._iscsiInterface = undefined;
      this._lun = undefined;
      this._readOnly = undefined;
      this._targetPortal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsType = value.fsType;
      this._iqn = value.iqn;
      this._iscsiInterface = value.iscsiInterface;
      this._lun = value.lun;
      this._readOnly = value.readOnly;
      this._targetPortal = value.targetPortal;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // iqn - computed: false, optional: false, required: true
  private _iqn?: string; 
  public get iqn() {
    return this.getStringAttribute('iqn');
  }
  public set iqn(value: string) {
    this._iqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn;
  }

  // iscsi_interface - computed: false, optional: true, required: false
  private _iscsiInterface?: string; 
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }
  public set iscsiInterface(value: string) {
    this._iscsiInterface = value;
  }
  public resetIscsiInterface() {
    this._iscsiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInterfaceInput() {
    return this._iscsiInterface;
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // target_portal - computed: false, optional: false, required: true
  private _targetPortal?: string; 
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
  public set targetPortal(value: string) {
    this._targetPortal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortalInput() {
    return this._targetPortal;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeLocal {
  /**
  * Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
}

export function statefulSetSpecTemplateSpecVolumeLocalToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeLocalOutputReference | StatefulSetSpecTemplateSpecVolumeLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class StatefulSetSpecTemplateSpecVolumeLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeLocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeNfs {
  /**
  * Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path: string;
  /**
  * Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#server StatefulSet#server}
  */
  readonly server: string;
}

export function statefulSetSpecTemplateSpecVolumeNfsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeNfsOutputReference | StatefulSetSpecTemplateSpecVolumeNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}

export class StatefulSetSpecTemplateSpecVolumeNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeNfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeNfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface StatefulSetSpecTemplateSpecVolumePersistentVolumeClaim {
  /**
  * ClaimName is the name of a PersistentVolumeClaim in the same 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#claim_name StatefulSet#claim_name}
  */
  readonly claimName?: string;
  /**
  * Will force the ReadOnly setting in VolumeMounts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecVolumePersistentVolumeClaimToTerraform(struct?: StatefulSetSpecTemplateSpecVolumePersistentVolumeClaimOutputReference | StatefulSetSpecTemplateSpecVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export class StatefulSetSpecTemplateSpecVolumePersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumePersistentVolumeClaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumePersistentVolumeClaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: true, required: false
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  public resetClaimName() {
    this._claimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface StatefulSetSpecTemplateSpecVolumePhotonPersistentDisk {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_type StatefulSet#fs_type}
  */
  readonly fsType?: string;
  /**
  * ID that identifies Photon Controller persistent disk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#pd_id StatefulSet#pd_id}
  */
  readonly pdId: string;
}

export function statefulSetSpecTemplateSpecVolumePhotonPersistentDiskToTerraform(struct?: StatefulSetSpecTemplateSpecVolumePhotonPersistentDiskOutputReference | StatefulSetSpecTemplateSpecVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}

export class StatefulSetSpecTemplateSpecVolumePhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumePhotonPersistentDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._pdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdId = this._pdId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumePhotonPersistentDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsType = undefined;
      this._pdId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsType = value.fsType;
      this._pdId = value.pdId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // pd_id - computed: false, optional: false, required: true
  private _pdId?: string; 
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
  public set pdId(value: string) {
    this._pdId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdIdInput() {
    return this._pdId;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#mode StatefulSet#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
}

export function statefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMap {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the ConfigMap or it's keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#items StatefulSet#items}
  */
  readonly items?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#api_version StatefulSet#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#field_path StatefulSet#field_path}
  */
  readonly fieldPath?: string;
}

export function statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference | StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export class StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#container_name StatefulSet#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#divisor StatefulSet#divisor}
  */
  readonly divisor?: string;
  /**
  * Resource to select
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#resource StatefulSet#resource}
  */
  readonly resource: string;
}

export function statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference | StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export class StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems {
  /**
  * Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#mode StatefulSet#mode}
  */
  readonly mode?: string;
  /**
  * Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path: string;
  /**
  * field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#field_ref StatefulSet#field_ref}
  */
  readonly fieldRef?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * resource_field_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#resource_field_ref StatefulSet#resource_field_ref}
  */
  readonly resourceFieldRef?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApi {
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#items StatefulSet#items}
  */
  readonly items?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiOutputReference | StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform)(struct!.items),
  }
}

export class StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems[] | cdktf.IResolvable; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items');
  }
  public set items(value: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecretItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#mode StatefulSet#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
}

export function statefulSetSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecret {
  /**
  * Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Optional: Specify whether the Secret or it's keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#items StatefulSet#items}
  */
  readonly items?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecretItems[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform)(struct!.items),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken {
  /**
  * Audience is the intended audience of the token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#audience StatefulSet#audience}
  */
  readonly audience?: string;
  /**
  * ExpirationSeconds is the expected duration of validity of the service account token. It defaults to 1 hour and must be at least 10 minutes (600 seconds).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#expiration_seconds StatefulSet#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Path specifies a relative path to the mount point of the projected volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path: string;
}

export function statefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenOutputReference | StatefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class StatefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._expirationSeconds = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._expirationSeconds = value.expirationSeconds;
      this._path = value.path;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeProjectedSources {
  /**
  * config_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#config_map StatefulSet#config_map}
  */
  readonly configMap?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMap[] | cdktf.IResolvable;
  /**
  * downward_api block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#downward_api StatefulSet#downward_api}
  */
  readonly downwardApi?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApi;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret StatefulSet#secret}
  */
  readonly secret?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesSecret[] | cdktf.IResolvable;
  /**
  * service_account_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#service_account_token StatefulSet#service_account_token}
  */
  readonly serviceAccountToken?: StatefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken;
}

export function statefulSetSpecTemplateSpecVolumeProjectedSourcesToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform)(struct!.configMap),
    downward_api: statefulSetSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform)(struct!.secret),
    service_account_token: statefulSetSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeProjected {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#default_mode StatefulSet#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#sources StatefulSet#sources}
  */
  readonly sources: StatefulSetSpecTemplateSpecVolumeProjectedSources[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecVolumeProjectedToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedSourcesToTerraform)(struct!.sources),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeQuobyte {
  /**
  * Group to map volume access to Default is no group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#group StatefulSet#group}
  */
  readonly group?: string;
  /**
  * Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#registry StatefulSet#registry}
  */
  readonly registry: string;
  /**
  * User to map volume access to Defaults to serivceaccount user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#user StatefulSet#user}
  */
  readonly user?: string;
  /**
  * Volume is a string that references an already created Quobyte volume by name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#volume StatefulSet#volume}
  */
  readonly volume: string;
}

export function statefulSetSpecTemplateSpecVolumeQuobyteToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeQuobyteOutputReference | StatefulSetSpecTemplateSpecVolumeQuobyte): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}

export class StatefulSetSpecTemplateSpecVolumeQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeQuobyte | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeQuobyte | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group = undefined;
      this._readOnly = undefined;
      this._registry = undefined;
      this._user = undefined;
      this._volume = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group = value.group;
      this._readOnly = value.readOnly;
      this._registry = value.registry;
      this._user = value.user;
      this._volume = value.volume;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeRbdSecretRef {
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#namespace StatefulSet#namespace}
  */
  readonly namespace?: string;
}

export function statefulSetSpecTemplateSpecVolumeRbdSecretRefToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeRbdSecretRefOutputReference | StatefulSetSpecTemplateSpecVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class StatefulSetSpecTemplateSpecVolumeRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeRbdSecretRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeRbdSecretRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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
}
export interface StatefulSetSpecTemplateSpecVolumeRbd {
  /**
  * A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#ceph_monitors StatefulSet#ceph_monitors}
  */
  readonly cephMonitors: string[];
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_type StatefulSet#fs_type}
  */
  readonly fsType?: string;
  /**
  * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#keyring StatefulSet#keyring}
  */
  readonly keyring?: string;
  /**
  * The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#rados_user StatefulSet#rados_user}
  */
  readonly radosUser?: string;
  /**
  * The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#rbd_image StatefulSet#rbd_image}
  */
  readonly rbdImage: string;
  /**
  * The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#rbd_pool StatefulSet#rbd_pool}
  */
  readonly rbdPool?: string;
  /**
  * Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read_only StatefulSet#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secret_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret_ref StatefulSet#secret_ref}
  */
  readonly secretRef?: StatefulSetSpecTemplateSpecVolumeRbdSecretRef;
}

export function statefulSetSpecTemplateSpecVolumeRbdToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeRbdOutputReference | StatefulSetSpecTemplateSpecVolumeRbd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ceph_monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cephMonitors),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    rados_user: cdktf.stringToTerraform(struct!.radosUser),
    rbd_image: cdktf.stringToTerraform(struct!.rbdImage),
    rbd_pool: cdktf.stringToTerraform(struct!.rbdPool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: statefulSetSpecTemplateSpecVolumeRbdSecretRefToTerraform(struct!.secretRef),
  }
}

export class StatefulSetSpecTemplateSpecVolumeRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeRbd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cephMonitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.cephMonitors = this._cephMonitors;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._keyring !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyring = this._keyring;
    }
    if (this._radosUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.radosUser = this._radosUser;
    }
    if (this._rbdImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbdImage = this._rbdImage;
    }
    if (this._rbdPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbdPool = this._rbdPool;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeRbd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cephMonitors = undefined;
      this._fsType = undefined;
      this._keyring = undefined;
      this._radosUser = undefined;
      this._rbdImage = undefined;
      this._rbdPool = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cephMonitors = value.cephMonitors;
      this._fsType = value.fsType;
      this._keyring = value.keyring;
      this._radosUser = value.radosUser;
      this._rbdImage = value.rbdImage;
      this._rbdPool = value.rbdPool;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // ceph_monitors - computed: false, optional: false, required: true
  private _cephMonitors?: string[]; 
  public get cephMonitors() {
    return cdktf.Fn.tolist(this.getListAttribute('ceph_monitors'));
  }
  public set cephMonitors(value: string[]) {
    this._cephMonitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cephMonitorsInput() {
    return this._cephMonitors;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // keyring - computed: true, optional: true, required: false
  private _keyring?: string; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // rados_user - computed: false, optional: true, required: false
  private _radosUser?: string; 
  public get radosUser() {
    return this.getStringAttribute('rados_user');
  }
  public set radosUser(value: string) {
    this._radosUser = value;
  }
  public resetRadosUser() {
    this._radosUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radosUserInput() {
    return this._radosUser;
  }

  // rbd_image - computed: false, optional: false, required: true
  private _rbdImage?: string; 
  public get rbdImage() {
    return this.getStringAttribute('rbd_image');
  }
  public set rbdImage(value: string) {
    this._rbdImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdImageInput() {
    return this._rbdImage;
  }

  // rbd_pool - computed: false, optional: true, required: false
  private _rbdPool?: string; 
  public get rbdPool() {
    return this.getStringAttribute('rbd_pool');
  }
  public set rbdPool(value: string) {
    this._rbdPool = value;
  }
  public resetRbdPool() {
    this._rbdPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdPoolInput() {
    return this._rbdPool;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new StatefulSetSpecTemplateSpecVolumeRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: StatefulSetSpecTemplateSpecVolumeRbdSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeSecretItems {
  /**
  * The key to project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#mode StatefulSet#mode}
  */
  readonly mode?: string;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#path StatefulSet#path}
  */
  readonly path?: string;
}

export function statefulSetSpecTemplateSpecVolumeSecretItemsToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface StatefulSetSpecTemplateSpecVolumeSecret {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#default_mode StatefulSet#default_mode}
  */
  readonly defaultMode?: string;
  /**
  * Optional: Specify whether the Secret or its keys must be defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#optional StatefulSet#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret_name StatefulSet#secret_name}
  */
  readonly secretName?: string;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#items StatefulSet#items}
  */
  readonly items?: StatefulSetSpecTemplateSpecVolumeSecretItems[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecVolumeSecretToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeSecretOutputReference | StatefulSetSpecTemplateSpecVolumeSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    items: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeSecretItemsToTerraform)(struct!.items),
  }
}

export class StatefulSetSpecTemplateSpecVolumeSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultMode = undefined;
      this._optional = undefined;
      this._secretName = undefined;
      this._items = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultMode = value.defaultMode;
      this._optional = value.optional;
      this._secretName = value.secretName;
      this._items = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: string; 
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }
  public set defaultMode(value: string) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // items - computed: false, optional: true, required: false
  private _items?: StatefulSetSpecTemplateSpecVolumeSecretItems[] | cdktf.IResolvable; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items');
  }
  public set items(value: StatefulSetSpecTemplateSpecVolumeSecretItems[] | cdktf.IResolvable) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }
}
export interface StatefulSetSpecTemplateSpecVolumeVsphereVolume {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fs_type StatefulSet#fs_type}
  */
  readonly fsType?: string;
  /**
  * Path that identifies vSphere volume vmdk
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#volume_path StatefulSet#volume_path}
  */
  readonly volumePath: string;
}

export function statefulSetSpecTemplateSpecVolumeVsphereVolumeToTerraform(struct?: StatefulSetSpecTemplateSpecVolumeVsphereVolumeOutputReference | StatefulSetSpecTemplateSpecVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}

export class StatefulSetSpecTemplateSpecVolumeVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpecVolumeVsphereVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._volumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumePath = this._volumePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpecVolumeVsphereVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fsType = undefined;
      this._volumePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fsType = value.fsType;
      this._volumePath = value.volumePath;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }
}
export interface StatefulSetSpecTemplateSpecVolume {
  /**
  * Volume's name. Must be a DNS_LABEL and unique within the pod. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * aws_elastic_block_store block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#aws_elastic_block_store StatefulSet#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: StatefulSetSpecTemplateSpecVolumeAwsElasticBlockStore;
  /**
  * azure_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#azure_disk StatefulSet#azure_disk}
  */
  readonly azureDisk?: StatefulSetSpecTemplateSpecVolumeAzureDisk;
  /**
  * azure_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#azure_file StatefulSet#azure_file}
  */
  readonly azureFile?: StatefulSetSpecTemplateSpecVolumeAzureFile;
  /**
  * ceph_fs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#ceph_fs StatefulSet#ceph_fs}
  */
  readonly cephFs?: StatefulSetSpecTemplateSpecVolumeCephFs;
  /**
  * cinder block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#cinder StatefulSet#cinder}
  */
  readonly cinder?: StatefulSetSpecTemplateSpecVolumeCinder;
  /**
  * config_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#config_map StatefulSet#config_map}
  */
  readonly configMap?: StatefulSetSpecTemplateSpecVolumeConfigMap;
  /**
  * csi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#csi StatefulSet#csi}
  */
  readonly csi?: StatefulSetSpecTemplateSpecVolumeCsi;
  /**
  * downward_api block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#downward_api StatefulSet#downward_api}
  */
  readonly downwardApi?: StatefulSetSpecTemplateSpecVolumeDownwardApi;
  /**
  * empty_dir block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#empty_dir StatefulSet#empty_dir}
  */
  readonly emptyDir?: StatefulSetSpecTemplateSpecVolumeEmptyDir;
  /**
  * fc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#fc StatefulSet#fc}
  */
  readonly fc?: StatefulSetSpecTemplateSpecVolumeFc;
  /**
  * flex_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#flex_volume StatefulSet#flex_volume}
  */
  readonly flexVolume?: StatefulSetSpecTemplateSpecVolumeFlexVolume;
  /**
  * flocker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#flocker StatefulSet#flocker}
  */
  readonly flocker?: StatefulSetSpecTemplateSpecVolumeFlocker;
  /**
  * gce_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#gce_persistent_disk StatefulSet#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: StatefulSetSpecTemplateSpecVolumeGcePersistentDisk;
  /**
  * git_repo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#git_repo StatefulSet#git_repo}
  */
  readonly gitRepo?: StatefulSetSpecTemplateSpecVolumeGitRepo;
  /**
  * glusterfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#glusterfs StatefulSet#glusterfs}
  */
  readonly glusterfs?: StatefulSetSpecTemplateSpecVolumeGlusterfs;
  /**
  * host_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host_path StatefulSet#host_path}
  */
  readonly hostPath?: StatefulSetSpecTemplateSpecVolumeHostPath;
  /**
  * iscsi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#iscsi StatefulSet#iscsi}
  */
  readonly iscsi?: StatefulSetSpecTemplateSpecVolumeIscsi;
  /**
  * local block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#local StatefulSet#local}
  */
  readonly local?: StatefulSetSpecTemplateSpecVolumeLocal;
  /**
  * nfs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#nfs StatefulSet#nfs}
  */
  readonly nfs?: StatefulSetSpecTemplateSpecVolumeNfs;
  /**
  * persistent_volume_claim block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#persistent_volume_claim StatefulSet#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: StatefulSetSpecTemplateSpecVolumePersistentVolumeClaim;
  /**
  * photon_persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#photon_persistent_disk StatefulSet#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: StatefulSetSpecTemplateSpecVolumePhotonPersistentDisk;
  /**
  * projected block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#projected StatefulSet#projected}
  */
  readonly projected?: StatefulSetSpecTemplateSpecVolumeProjected[] | cdktf.IResolvable;
  /**
  * quobyte block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#quobyte StatefulSet#quobyte}
  */
  readonly quobyte?: StatefulSetSpecTemplateSpecVolumeQuobyte;
  /**
  * rbd block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#rbd StatefulSet#rbd}
  */
  readonly rbd?: StatefulSetSpecTemplateSpecVolumeRbd;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#secret StatefulSet#secret}
  */
  readonly secret?: StatefulSetSpecTemplateSpecVolumeSecret;
  /**
  * vsphere_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#vsphere_volume StatefulSet#vsphere_volume}
  */
  readonly vsphereVolume?: StatefulSetSpecTemplateSpecVolumeVsphereVolume;
}

export function statefulSetSpecTemplateSpecVolumeToTerraform(struct?: StatefulSetSpecTemplateSpecVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    aws_elastic_block_store: statefulSetSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: statefulSetSpecTemplateSpecVolumeAzureDiskToTerraform(struct!.azureDisk),
    azure_file: statefulSetSpecTemplateSpecVolumeAzureFileToTerraform(struct!.azureFile),
    ceph_fs: statefulSetSpecTemplateSpecVolumeCephFsToTerraform(struct!.cephFs),
    cinder: statefulSetSpecTemplateSpecVolumeCinderToTerraform(struct!.cinder),
    config_map: statefulSetSpecTemplateSpecVolumeConfigMapToTerraform(struct!.configMap),
    csi: statefulSetSpecTemplateSpecVolumeCsiToTerraform(struct!.csi),
    downward_api: statefulSetSpecTemplateSpecVolumeDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: statefulSetSpecTemplateSpecVolumeEmptyDirToTerraform(struct!.emptyDir),
    fc: statefulSetSpecTemplateSpecVolumeFcToTerraform(struct!.fc),
    flex_volume: statefulSetSpecTemplateSpecVolumeFlexVolumeToTerraform(struct!.flexVolume),
    flocker: statefulSetSpecTemplateSpecVolumeFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: statefulSetSpecTemplateSpecVolumeGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: statefulSetSpecTemplateSpecVolumeGitRepoToTerraform(struct!.gitRepo),
    glusterfs: statefulSetSpecTemplateSpecVolumeGlusterfsToTerraform(struct!.glusterfs),
    host_path: statefulSetSpecTemplateSpecVolumeHostPathToTerraform(struct!.hostPath),
    iscsi: statefulSetSpecTemplateSpecVolumeIscsiToTerraform(struct!.iscsi),
    local: statefulSetSpecTemplateSpecVolumeLocalToTerraform(struct!.local),
    nfs: statefulSetSpecTemplateSpecVolumeNfsToTerraform(struct!.nfs),
    persistent_volume_claim: statefulSetSpecTemplateSpecVolumePersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: statefulSetSpecTemplateSpecVolumePhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    projected: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeProjectedToTerraform)(struct!.projected),
    quobyte: statefulSetSpecTemplateSpecVolumeQuobyteToTerraform(struct!.quobyte),
    rbd: statefulSetSpecTemplateSpecVolumeRbdToTerraform(struct!.rbd),
    secret: statefulSetSpecTemplateSpecVolumeSecretToTerraform(struct!.secret),
    vsphere_volume: statefulSetSpecTemplateSpecVolumeVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}

export interface StatefulSetSpecTemplateSpec {
  /**
  * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#active_deadline_seconds StatefulSet#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#automount_service_account_token StatefulSet#automount_service_account_token}
  */
  readonly automountServiceAccountToken?: boolean | cdktf.IResolvable;
  /**
  * Set DNS policy for containers within the pod. Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. Optional: Defaults to 'ClusterFirst', see [Kubernetes reference](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#dns_policy StatefulSet#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Enables generating environment variables for service discovery. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#enable_service_links StatefulSet#enable_service_links}
  */
  readonly enableServiceLinks?: boolean | cdktf.IResolvable;
  /**
  * Use the host's ipc namespace. Optional: Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host_ipc StatefulSet#host_ipc}
  */
  readonly hostIpc?: boolean | cdktf.IResolvable;
  /**
  * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host_network StatefulSet#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Use the host's pid namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host_pid StatefulSet#host_pid}
  */
  readonly hostPid?: boolean | cdktf.IResolvable;
  /**
  * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#hostname StatefulSet#hostname}
  */
  readonly hostname?: string;
  /**
  * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#node_name StatefulSet#node_name}
  */
  readonly nodeName?: string;
  /**
  * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: http://kubernetes.io/docs/user-guide/node-selection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#node_selector StatefulSet#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#priority_class_name StatefulSet#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Restart policy for all containers within the pod. One of Always, OnFailure, Never. More info: http://kubernetes.io/docs/user-guide/pod-states#restartpolicy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#restart_policy StatefulSet#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: http://releases.k8s.io/HEAD/docs/design/service_accounts.md.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#service_account_name StatefulSet#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#share_process_namespace StatefulSet#share_process_namespace}
  */
  readonly shareProcessNamespace?: boolean | cdktf.IResolvable;
  /**
  * If specified, the fully qualified Pod hostname will be "...svc.". If not specified, the pod will not have a domainname at all..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#subdomain StatefulSet#subdomain}
  */
  readonly subdomain?: string;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#termination_grace_period_seconds StatefulSet#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#affinity StatefulSet#affinity}
  */
  readonly affinity?: StatefulSetSpecTemplateSpecAffinity;
  /**
  * container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#container StatefulSet#container}
  */
  readonly container?: StatefulSetSpecTemplateSpecContainer[] | cdktf.IResolvable;
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#dns_config StatefulSet#dns_config}
  */
  readonly dnsConfig?: StatefulSetSpecTemplateSpecDnsConfig;
  /**
  * host_aliases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#host_aliases StatefulSet#host_aliases}
  */
  readonly hostAliases?: StatefulSetSpecTemplateSpecHostAliases[] | cdktf.IResolvable;
  /**
  * image_pull_secrets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#image_pull_secrets StatefulSet#image_pull_secrets}
  */
  readonly imagePullSecrets?: StatefulSetSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * init_container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#init_container StatefulSet#init_container}
  */
  readonly initContainer?: StatefulSetSpecTemplateSpecInitContainer[] | cdktf.IResolvable;
  /**
  * readiness_gate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#readiness_gate StatefulSet#readiness_gate}
  */
  readonly readinessGate?: StatefulSetSpecTemplateSpecReadinessGate[] | cdktf.IResolvable;
  /**
  * security_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#security_context StatefulSet#security_context}
  */
  readonly securityContext?: StatefulSetSpecTemplateSpecSecurityContext;
  /**
  * toleration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#toleration StatefulSet#toleration}
  */
  readonly toleration?: StatefulSetSpecTemplateSpecToleration[] | cdktf.IResolvable;
  /**
  * topology_spread_constraint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#topology_spread_constraint StatefulSet#topology_spread_constraint}
  */
  readonly topologySpreadConstraint?: StatefulSetSpecTemplateSpecTopologySpreadConstraint[] | cdktf.IResolvable;
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#volume StatefulSet#volume}
  */
  readonly volume?: StatefulSetSpecTemplateSpecVolume[] | cdktf.IResolvable;
}

export function statefulSetSpecTemplateSpecToTerraform(struct?: StatefulSetSpecTemplateSpecOutputReference | StatefulSetSpecTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    automount_service_account_token: cdktf.booleanToTerraform(struct!.automountServiceAccountToken),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enable_service_links: cdktf.booleanToTerraform(struct!.enableServiceLinks),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    affinity: statefulSetSpecTemplateSpecAffinityToTerraform(struct!.affinity),
    container: cdktf.listMapper(statefulSetSpecTemplateSpecContainerToTerraform)(struct!.container),
    dns_config: statefulSetSpecTemplateSpecDnsConfigToTerraform(struct!.dnsConfig),
    host_aliases: cdktf.listMapper(statefulSetSpecTemplateSpecHostAliasesToTerraform)(struct!.hostAliases),
    image_pull_secrets: cdktf.listMapper(statefulSetSpecTemplateSpecImagePullSecretsToTerraform)(struct!.imagePullSecrets),
    init_container: cdktf.listMapper(statefulSetSpecTemplateSpecInitContainerToTerraform)(struct!.initContainer),
    readiness_gate: cdktf.listMapper(statefulSetSpecTemplateSpecReadinessGateToTerraform)(struct!.readinessGate),
    security_context: statefulSetSpecTemplateSpecSecurityContextToTerraform(struct!.securityContext),
    toleration: cdktf.listMapper(statefulSetSpecTemplateSpecTolerationToTerraform)(struct!.toleration),
    topology_spread_constraint: cdktf.listMapper(statefulSetSpecTemplateSpecTopologySpreadConstraintToTerraform)(struct!.topologySpreadConstraint),
    volume: cdktf.listMapper(statefulSetSpecTemplateSpecVolumeToTerraform)(struct!.volume),
  }
}

export class StatefulSetSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeadlineSeconds = this._activeDeadlineSeconds;
    }
    if (this._automountServiceAccountToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.automountServiceAccountToken = this._automountServiceAccountToken;
    }
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._enableServiceLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableServiceLinks = this._enableServiceLinks;
    }
    if (this._hostIpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIpc = this._hostIpc;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._hostPid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPid = this._hostPid;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._shareProcessNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareProcessNamespace = this._shareProcessNamespace;
    }
    if (this._subdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdomain = this._subdomain;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._hostAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases;
    }
    if (this._imagePullSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets;
    }
    if (this._initContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainer = this._initContainer;
    }
    if (this._readinessGate !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessGate = this._readinessGate;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._toleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleration = this._toleration;
    }
    if (this._topologySpreadConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraint = this._topologySpreadConstraint;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeDeadlineSeconds = undefined;
      this._automountServiceAccountToken = undefined;
      this._dnsPolicy = undefined;
      this._enableServiceLinks = undefined;
      this._hostIpc = undefined;
      this._hostNetwork = undefined;
      this._hostPid = undefined;
      this._hostname = undefined;
      this._nodeName = undefined;
      this._nodeSelector = undefined;
      this._priorityClassName = undefined;
      this._restartPolicy = undefined;
      this._serviceAccountName = undefined;
      this._shareProcessNamespace = undefined;
      this._subdomain = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._affinity.internalValue = undefined;
      this._container = undefined;
      this._dnsConfig.internalValue = undefined;
      this._hostAliases = undefined;
      this._imagePullSecrets = undefined;
      this._initContainer = undefined;
      this._readinessGate = undefined;
      this._securityContext.internalValue = undefined;
      this._toleration = undefined;
      this._topologySpreadConstraint = undefined;
      this._volume = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeDeadlineSeconds = value.activeDeadlineSeconds;
      this._automountServiceAccountToken = value.automountServiceAccountToken;
      this._dnsPolicy = value.dnsPolicy;
      this._enableServiceLinks = value.enableServiceLinks;
      this._hostIpc = value.hostIpc;
      this._hostNetwork = value.hostNetwork;
      this._hostPid = value.hostPid;
      this._hostname = value.hostname;
      this._nodeName = value.nodeName;
      this._nodeSelector = value.nodeSelector;
      this._priorityClassName = value.priorityClassName;
      this._restartPolicy = value.restartPolicy;
      this._serviceAccountName = value.serviceAccountName;
      this._shareProcessNamespace = value.shareProcessNamespace;
      this._subdomain = value.subdomain;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._affinity.internalValue = value.affinity;
      this._container = value.container;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._hostAliases = value.hostAliases;
      this._imagePullSecrets = value.imagePullSecrets;
      this._initContainer = value.initContainer;
      this._readinessGate = value.readinessGate;
      this._securityContext.internalValue = value.securityContext;
      this._toleration = value.toleration;
      this._topologySpreadConstraint = value.topologySpreadConstraint;
      this._volume = value.volume;
    }
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds;
  }

  // automount_service_account_token - computed: false, optional: true, required: false
  private _automountServiceAccountToken?: boolean | cdktf.IResolvable; 
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }
  public set automountServiceAccountToken(value: boolean | cdktf.IResolvable) {
    this._automountServiceAccountToken = value;
  }
  public resetAutomountServiceAccountToken() {
    this._automountServiceAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automountServiceAccountTokenInput() {
    return this._automountServiceAccountToken;
  }

  // dns_policy - computed: false, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // enable_service_links - computed: false, optional: true, required: false
  private _enableServiceLinks?: boolean | cdktf.IResolvable; 
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }
  public set enableServiceLinks(value: boolean | cdktf.IResolvable) {
    this._enableServiceLinks = value;
  }
  public resetEnableServiceLinks() {
    this._enableServiceLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServiceLinksInput() {
    return this._enableServiceLinks;
  }

  // host_ipc - computed: false, optional: true, required: false
  private _hostIpc?: boolean | cdktf.IResolvable; 
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }
  public set hostIpc(value: boolean | cdktf.IResolvable) {
    this._hostIpc = value;
  }
  public resetHostIpc() {
    this._hostIpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpcInput() {
    return this._hostIpc;
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // host_pid - computed: false, optional: true, required: false
  private _hostPid?: boolean | cdktf.IResolvable; 
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }
  public set hostPid(value: boolean | cdktf.IResolvable) {
    this._hostPid = value;
  }
  public resetHostPid() {
    this._hostPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPidInput() {
    return this._hostPid;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // node_name - computed: true, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }

  // service_account_name - computed: true, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // share_process_namespace - computed: false, optional: true, required: false
  private _shareProcessNamespace?: boolean | cdktf.IResolvable; 
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }
  public set shareProcessNamespace(value: boolean | cdktf.IResolvable) {
    this._shareProcessNamespace = value;
  }
  public resetShareProcessNamespace() {
    this._shareProcessNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareProcessNamespaceInput() {
    return this._shareProcessNamespace;
  }

  // subdomain - computed: false, optional: true, required: false
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new StatefulSetSpecTemplateSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: StatefulSetSpecTemplateSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container?: StatefulSetSpecTemplateSpecContainer[] | cdktf.IResolvable; 
  public get container() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('container');
  }
  public set container(value: StatefulSetSpecTemplateSpecContainer[] | cdktf.IResolvable) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new StatefulSetSpecTemplateSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: StatefulSetSpecTemplateSpecDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases?: StatefulSetSpecTemplateSpecHostAliases[] | cdktf.IResolvable; 
  public get hostAliases() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_aliases');
  }
  public set hostAliases(value: StatefulSetSpecTemplateSpecHostAliases[] | cdktf.IResolvable) {
    this._hostAliases = value;
  }
  public resetHostAliases() {
    this._hostAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets?: StatefulSetSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable; 
  public get imagePullSecrets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('image_pull_secrets');
  }
  public set imagePullSecrets(value: StatefulSetSpecTemplateSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets;
  }

  // init_container - computed: false, optional: true, required: false
  private _initContainer?: StatefulSetSpecTemplateSpecInitContainer[] | cdktf.IResolvable; 
  public get initContainer() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('init_container');
  }
  public set initContainer(value: StatefulSetSpecTemplateSpecInitContainer[] | cdktf.IResolvable) {
    this._initContainer = value;
  }
  public resetInitContainer() {
    this._initContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerInput() {
    return this._initContainer;
  }

  // readiness_gate - computed: false, optional: true, required: false
  private _readinessGate?: StatefulSetSpecTemplateSpecReadinessGate[] | cdktf.IResolvable; 
  public get readinessGate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('readiness_gate');
  }
  public set readinessGate(value: StatefulSetSpecTemplateSpecReadinessGate[] | cdktf.IResolvable) {
    this._readinessGate = value;
  }
  public resetReadinessGate() {
    this._readinessGate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessGateInput() {
    return this._readinessGate;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new StatefulSetSpecTemplateSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: StatefulSetSpecTemplateSpecSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // toleration - computed: false, optional: true, required: false
  private _toleration?: StatefulSetSpecTemplateSpecToleration[] | cdktf.IResolvable; 
  public get toleration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('toleration');
  }
  public set toleration(value: StatefulSetSpecTemplateSpecToleration[] | cdktf.IResolvable) {
    this._toleration = value;
  }
  public resetToleration() {
    this._toleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationInput() {
    return this._toleration;
  }

  // topology_spread_constraint - computed: false, optional: true, required: false
  private _topologySpreadConstraint?: StatefulSetSpecTemplateSpecTopologySpreadConstraint[] | cdktf.IResolvable; 
  public get topologySpreadConstraint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('topology_spread_constraint');
  }
  public set topologySpreadConstraint(value: StatefulSetSpecTemplateSpecTopologySpreadConstraint[] | cdktf.IResolvable) {
    this._topologySpreadConstraint = value;
  }
  public resetTopologySpreadConstraint() {
    this._topologySpreadConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintInput() {
    return this._topologySpreadConstraint;
  }

  // volume - computed: false, optional: true, required: false
  private _volume?: StatefulSetSpecTemplateSpecVolume[] | cdktf.IResolvable; 
  public get volume() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volume');
  }
  public set volume(value: StatefulSetSpecTemplateSpecVolume[] | cdktf.IResolvable) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}
export interface StatefulSetSpecTemplate {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#metadata StatefulSet#metadata}
  */
  readonly metadata: StatefulSetSpecTemplateMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#spec StatefulSet#spec}
  */
  readonly spec?: StatefulSetSpecTemplateSpec;
}

export function statefulSetSpecTemplateToTerraform(struct?: StatefulSetSpecTemplateOutputReference | StatefulSetSpecTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: statefulSetSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: statefulSetSpecTemplateSpecToTerraform(struct!.spec),
  }
}

export class StatefulSetSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new StatefulSetSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: StatefulSetSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new StatefulSetSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: StatefulSetSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface StatefulSetSpecUpdateStrategyRollingUpdate {
  /**
  * Indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#partition StatefulSet#partition}
  */
  readonly partition?: number;
}

export function statefulSetSpecUpdateStrategyRollingUpdateToTerraform(struct?: StatefulSetSpecUpdateStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition: cdktf.numberToTerraform(struct!.partition),
  }
}

export interface StatefulSetSpecUpdateStrategy {
  /**
  * Indicates the type of the StatefulSet update strategy. Default is RollingUpdate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#type StatefulSet#type}
  */
  readonly type?: string;
  /**
  * rolling_update block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#rolling_update StatefulSet#rolling_update}
  */
  readonly rollingUpdate?: StatefulSetSpecUpdateStrategyRollingUpdate[] | cdktf.IResolvable;
}

export function statefulSetSpecUpdateStrategyToTerraform(struct?: StatefulSetSpecUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    rolling_update: cdktf.listMapper(statefulSetSpecUpdateStrategyRollingUpdateToTerraform)(struct!.rollingUpdate),
  }
}

export interface StatefulSetSpecVolumeClaimTemplateMetadata {
  /**
  * An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#annotations StatefulSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#generate_name StatefulSet#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#labels StatefulSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the persistent volume claim, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#name StatefulSet#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the persistent volume claim must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#namespace StatefulSet#namespace}
  */
  readonly namespace?: string;
}

export function statefulSetSpecVolumeClaimTemplateMetadataToTerraform(struct?: StatefulSetSpecVolumeClaimTemplateMetadataOutputReference | StatefulSetSpecVolumeClaimTemplateMetadata): any {
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

export class StatefulSetSpecVolumeClaimTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecVolumeClaimTemplateMetadata | undefined {
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

  public set internalValue(value: StatefulSetSpecVolumeClaimTemplateMetadata | undefined) {
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
export interface StatefulSetSpecVolumeClaimTemplateSpecResources {
  /**
  * Map describing the maximum amount of compute resources allowed. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#limits StatefulSet#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Map describing the minimum amount of compute resources required. If this is omitted for a container, it defaults to `limits` if that is explicitly specified, otherwise to an implementation-defined value. More info: http://kubernetes.io/docs/user-guide/compute-resources/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#requests StatefulSet#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function statefulSetSpecVolumeClaimTemplateSpecResourcesToTerraform(struct?: StatefulSetSpecVolumeClaimTemplateSpecResourcesOutputReference | StatefulSetSpecVolumeClaimTemplateSpecResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}

export class StatefulSetSpecVolumeClaimTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecVolumeClaimTemplateSpecResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecVolumeClaimTemplateSpecResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits = undefined;
      this._requests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface StatefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#key StatefulSet#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#operator StatefulSet#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#values StatefulSet#values}
  */
  readonly values?: string[];
}

export function statefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform(struct?: StatefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export interface StatefulSetSpecVolumeClaimTemplateSpecSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_labels StatefulSet#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#match_expressions StatefulSet#match_expressions}
  */
  readonly matchExpressions?: StatefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function statefulSetSpecVolumeClaimTemplateSpecSelectorToTerraform(struct?: StatefulSetSpecVolumeClaimTemplateSpecSelectorOutputReference | StatefulSetSpecVolumeClaimTemplateSpecSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(statefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class StatefulSetSpecVolumeClaimTemplateSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecVolumeClaimTemplateSpecSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecVolumeClaimTemplateSpecSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions = value.matchExpressions;
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
  private _matchExpressions?: StatefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }
  public set matchExpressions(value: StatefulSetSpecVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions;
  }
}
export interface StatefulSetSpecVolumeClaimTemplateSpec {
  /**
  * A set of the desired access modes the volume should have. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes-1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#access_modes StatefulSet#access_modes}
  */
  readonly accessModes: string[];
  /**
  * Name of the storage class requested by the claim
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#storage_class_name StatefulSet#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * The binding reference to the PersistentVolume backing this claim.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#volume_name StatefulSet#volume_name}
  */
  readonly volumeName?: string;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#resources StatefulSet#resources}
  */
  readonly resources: StatefulSetSpecVolumeClaimTemplateSpecResources;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#selector StatefulSet#selector}
  */
  readonly selector?: StatefulSetSpecVolumeClaimTemplateSpecSelector;
}

export function statefulSetSpecVolumeClaimTemplateSpecToTerraform(struct?: StatefulSetSpecVolumeClaimTemplateSpecOutputReference | StatefulSetSpecVolumeClaimTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessModes),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    resources: statefulSetSpecVolumeClaimTemplateSpecResourcesToTerraform(struct!.resources),
    selector: statefulSetSpecVolumeClaimTemplateSpecSelectorToTerraform(struct!.selector),
  }
}

export class StatefulSetSpecVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpecVolumeClaimTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpecVolumeClaimTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessModes = undefined;
      this._storageClassName = undefined;
      this._volumeName = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessModes = value.accessModes;
      this._storageClassName = value.storageClassName;
      this._volumeName = value.volumeName;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
    }
  }

  // access_modes - computed: false, optional: false, required: true
  private _accessModes?: string[]; 
  public get accessModes() {
    return cdktf.Fn.tolist(this.getListAttribute('access_modes'));
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // storage_class_name - computed: true, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_name - computed: true, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new StatefulSetSpecVolumeClaimTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: StatefulSetSpecVolumeClaimTemplateSpecResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new StatefulSetSpecVolumeClaimTemplateSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: StatefulSetSpecVolumeClaimTemplateSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface StatefulSetSpecVolumeClaimTemplate {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#metadata StatefulSet#metadata}
  */
  readonly metadata: StatefulSetSpecVolumeClaimTemplateMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#spec StatefulSet#spec}
  */
  readonly spec: StatefulSetSpecVolumeClaimTemplateSpec;
}

export function statefulSetSpecVolumeClaimTemplateToTerraform(struct?: StatefulSetSpecVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: statefulSetSpecVolumeClaimTemplateMetadataToTerraform(struct!.metadata),
    spec: statefulSetSpecVolumeClaimTemplateSpecToTerraform(struct!.spec),
  }
}

export interface StatefulSetSpec {
  /**
  * Controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#pod_management_policy StatefulSet#pod_management_policy}
  */
  readonly podManagementPolicy?: string;
  /**
  * The desired number of replicas of the given Template, in the sense that they are instantiations of the same Template. Value must be a positive integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#replicas StatefulSet#replicas}
  */
  readonly replicas?: string;
  /**
  * The maximum number of revisions that will be maintained in the StatefulSet's revision history. The default value is 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#revision_history_limit StatefulSet#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * The name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#service_name StatefulSet#service_name}
  */
  readonly serviceName: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#selector StatefulSet#selector}
  */
  readonly selector: StatefulSetSpecSelector;
  /**
  * template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#template StatefulSet#template}
  */
  readonly template: StatefulSetSpecTemplate;
  /**
  * update_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#update_strategy StatefulSet#update_strategy}
  */
  readonly updateStrategy?: StatefulSetSpecUpdateStrategy[] | cdktf.IResolvable;
  /**
  * volume_claim_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#volume_claim_template StatefulSet#volume_claim_template}
  */
  readonly volumeClaimTemplate?: StatefulSetSpecVolumeClaimTemplate[] | cdktf.IResolvable;
}

export function statefulSetSpecToTerraform(struct?: StatefulSetSpecOutputReference | StatefulSetSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_management_policy: cdktf.stringToTerraform(struct!.podManagementPolicy),
    replicas: cdktf.stringToTerraform(struct!.replicas),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    selector: statefulSetSpecSelectorToTerraform(struct!.selector),
    template: statefulSetSpecTemplateToTerraform(struct!.template),
    update_strategy: cdktf.listMapper(statefulSetSpecUpdateStrategyToTerraform)(struct!.updateStrategy),
    volume_claim_template: cdktf.listMapper(statefulSetSpecVolumeClaimTemplateToTerraform)(struct!.volumeClaimTemplate),
  }
}

export class StatefulSetSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podManagementPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.podManagementPolicy = this._podManagementPolicy;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._updateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy;
    }
    if (this._volumeClaimTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplate = this._volumeClaimTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podManagementPolicy = undefined;
      this._replicas = undefined;
      this._revisionHistoryLimit = undefined;
      this._serviceName = undefined;
      this._selector.internalValue = undefined;
      this._template.internalValue = undefined;
      this._updateStrategy = undefined;
      this._volumeClaimTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podManagementPolicy = value.podManagementPolicy;
      this._replicas = value.replicas;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._serviceName = value.serviceName;
      this._selector.internalValue = value.selector;
      this._template.internalValue = value.template;
      this._updateStrategy = value.updateStrategy;
      this._volumeClaimTemplate = value.volumeClaimTemplate;
    }
  }

  // pod_management_policy - computed: true, optional: true, required: false
  private _podManagementPolicy?: string; 
  public get podManagementPolicy() {
    return this.getStringAttribute('pod_management_policy');
  }
  public set podManagementPolicy(value: string) {
    this._podManagementPolicy = value;
  }
  public resetPodManagementPolicy() {
    this._podManagementPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podManagementPolicyInput() {
    return this._podManagementPolicy;
  }

  // replicas - computed: true, optional: true, required: false
  private _replicas?: string; 
  public get replicas() {
    return this.getStringAttribute('replicas');
  }
  public set replicas(value: string) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // revision_history_limit - computed: true, optional: true, required: false
  private _revisionHistoryLimit?: number; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new StatefulSetSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: StatefulSetSpecSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template = new StatefulSetSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: StatefulSetSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy?: StatefulSetSpecUpdateStrategy[] | cdktf.IResolvable; 
  public get updateStrategy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('update_strategy');
  }
  public set updateStrategy(value: StatefulSetSpecUpdateStrategy[] | cdktf.IResolvable) {
    this._updateStrategy = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy;
  }

  // volume_claim_template - computed: false, optional: true, required: false
  private _volumeClaimTemplate?: StatefulSetSpecVolumeClaimTemplate[] | cdktf.IResolvable; 
  public get volumeClaimTemplate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volume_claim_template');
  }
  public set volumeClaimTemplate(value: StatefulSetSpecVolumeClaimTemplate[] | cdktf.IResolvable) {
    this._volumeClaimTemplate = value;
  }
  public resetVolumeClaimTemplate() {
    this._volumeClaimTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplateInput() {
    return this._volumeClaimTemplate;
  }
}
export interface StatefulSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#create StatefulSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#delete StatefulSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#read StatefulSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#update StatefulSet#update}
  */
  readonly update?: string;
}

export function statefulSetTimeoutsToTerraform(struct?: StatefulSetTimeoutsOutputReference | StatefulSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class StatefulSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatefulSetTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatefulSetTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set kubernetes_stateful_set}
*/
export class StatefulSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_stateful_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set kubernetes_stateful_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatefulSetConfig
  */
  public constructor(scope: Construct, id: string, config: StatefulSetConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_stateful_set',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.9.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._waitForRollout = config.waitForRollout;
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

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new StatefulSetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: StatefulSetMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new StatefulSetSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: StatefulSetSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StatefulSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StatefulSetTimeouts) {
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
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      metadata: statefulSetMetadataToTerraform(this._metadata.internalValue),
      spec: statefulSetSpecToTerraform(this._spec.internalValue),
      timeouts: statefulSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
