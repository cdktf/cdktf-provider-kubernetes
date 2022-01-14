// https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HorizontalPodAutoscalerConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#metadata HorizontalPodAutoscaler#metadata}
  */
  readonly metadata: HorizontalPodAutoscalerMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#spec HorizontalPodAutoscaler#spec}
  */
  readonly spec: HorizontalPodAutoscalerSpec;
}
export interface HorizontalPodAutoscalerMetadata {
  /**
  * An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#annotations HorizontalPodAutoscaler#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#generate_name HorizontalPodAutoscaler#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#labels HorizontalPodAutoscaler#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the horizontal pod autoscaler must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#namespace HorizontalPodAutoscaler#namespace}
  */
  readonly namespace?: string;
}

export function horizontalPodAutoscalerMetadataToTerraform(struct?: HorizontalPodAutoscalerMetadataOutputReference | HorizontalPodAutoscalerMetadata): any {
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

export class HorizontalPodAutoscalerMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerMetadata | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerMetadata | undefined) {
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
  private _annotations?: { [key: string]: string } | cdktf.IResolvable; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable) {
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
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
}
export interface HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy {
  /**
  * Period specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#period_seconds HorizontalPodAutoscaler#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * Type is used to specify the scaling policy: Percent or Pods
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * Value contains the amount of change which is permitted by the policy. It must be greater than zero.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value: number;
}

export function horizontalPodAutoscalerSpecBehaviorScaleDownPolicyToTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface HorizontalPodAutoscalerSpecBehaviorScaleDown {
  /**
  * Used to specify which policy should be used. If not set, the default value Max is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#select_policy HorizontalPodAutoscaler#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * Number of seconds for which past recommendations should be considered while scaling up or scaling down. This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#stabilization_window_seconds HorizontalPodAutoscaler#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
  /**
  * policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#policy HorizontalPodAutoscaler#policy}
  */
  readonly policy: HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy[];
}

export function horizontalPodAutoscalerSpecBehaviorScaleDownToTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleDown): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
    policy: cdktf.listMapper(horizontalPodAutoscalerSpecBehaviorScaleDownPolicyToTerraform)(struct!.policy),
  }
}

export interface HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy {
  /**
  * Period specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#period_seconds HorizontalPodAutoscaler#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * Type is used to specify the scaling policy: Percent or Pods
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * Value contains the amount of change which is permitted by the policy. It must be greater than zero.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value: number;
}

export function horizontalPodAutoscalerSpecBehaviorScaleUpPolicyToTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface HorizontalPodAutoscalerSpecBehaviorScaleUp {
  /**
  * Used to specify which policy should be used. If not set, the default value Max is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#select_policy HorizontalPodAutoscaler#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * Number of seconds for which past recommendations should be considered while scaling up or scaling down. This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#stabilization_window_seconds HorizontalPodAutoscaler#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
  /**
  * policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#policy HorizontalPodAutoscaler#policy}
  */
  readonly policy: HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy[];
}

export function horizontalPodAutoscalerSpecBehaviorScaleUpToTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorScaleUp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
    policy: cdktf.listMapper(horizontalPodAutoscalerSpecBehaviorScaleUpPolicyToTerraform)(struct!.policy),
  }
}

export interface HorizontalPodAutoscalerSpecBehavior {
  /**
  * scale_down block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#scale_down HorizontalPodAutoscaler#scale_down}
  */
  readonly scaleDown?: HorizontalPodAutoscalerSpecBehaviorScaleDown[];
  /**
  * scale_up block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#scale_up HorizontalPodAutoscaler#scale_up}
  */
  readonly scaleUp?: HorizontalPodAutoscalerSpecBehaviorScaleUp[];
}

export function horizontalPodAutoscalerSpecBehaviorToTerraform(struct?: HorizontalPodAutoscalerSpecBehaviorOutputReference | HorizontalPodAutoscalerSpecBehavior): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_down: cdktf.listMapper(horizontalPodAutoscalerSpecBehaviorScaleDownToTerraform)(struct!.scaleDown),
    scale_up: cdktf.listMapper(horizontalPodAutoscalerSpecBehaviorScaleUpToTerraform)(struct!.scaleUp),
  }
}

export class HorizontalPodAutoscalerSpecBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecBehavior | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDown = this._scaleDown;
    }
    if (this._scaleUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUp = this._scaleUp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecBehavior | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleDown = undefined;
      this._scaleUp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleDown = value.scaleDown;
      this._scaleUp = value.scaleUp;
    }
  }

  // scale_down - computed: false, optional: true, required: false
  private _scaleDown?: HorizontalPodAutoscalerSpecBehaviorScaleDown[]; 
  public get scaleDown() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scale_down') as any;
  }
  public set scaleDown(value: HorizontalPodAutoscalerSpecBehaviorScaleDown[]) {
    this._scaleDown = value;
  }
  public resetScaleDown() {
    this._scaleDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownInput() {
    return this._scaleDown;
  }

  // scale_up - computed: false, optional: true, required: false
  private _scaleUp?: HorizontalPodAutoscalerSpecBehaviorScaleUp[]; 
  public get scaleUp() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scale_up') as any;
  }
  public set scaleUp(value: HorizontalPodAutoscalerSpecBehaviorScaleUp[]) {
    this._scaleUp = value;
  }
  public resetScaleUp() {
    this._scaleUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpInput() {
    return this._scaleUp;
  }
}
export interface HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}
  */
  readonly values?: string[];
}

export function horizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface HorizontalPodAutoscalerSpecMetricExternalMetricSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions[];
}

export function horizontalPodAutoscalerSpecMetricExternalMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetricSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface HorizontalPodAutoscalerSpecMetricExternalMetric {
  /**
  * name is the name of the given metric
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}
  */
  readonly selector?: HorizontalPodAutoscalerSpecMetricExternalMetricSelector[];
}

export function horizontalPodAutoscalerSpecMetricExternalMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference | HorizontalPodAutoscalerSpecMetricExternalMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerSpecMetricExternalMetricSelectorToTerraform)(struct!.selector),
  }
}

export class HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricExternalMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricExternalMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._selector = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector?: HorizontalPodAutoscalerSpecMetricExternalMetricSelector[]; 
  public get selector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('selector') as any;
  }
  public set selector(value: HorizontalPodAutoscalerSpecMetricExternalMetricSelector[]) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface HorizontalPodAutoscalerSpecMetricExternalTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerSpecMetricExternalTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference | HorizontalPodAutoscalerSpecMetricExternalTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricExternalTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricExternalTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HorizontalPodAutoscalerSpecMetricExternal {
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric: HorizontalPodAutoscalerSpecMetricExternalMetric;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricExternalTarget;
}

export function horizontalPodAutoscalerSpecMetricExternalToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalOutputReference | HorizontalPodAutoscalerSpecMetricExternal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: horizontalPodAutoscalerSpecMetricExternalMetricToTerraform(struct!.metric),
    target: horizontalPodAutoscalerSpecMetricExternalTargetToTerraform(struct!.target),
  }
}

export class HorizontalPodAutoscalerSpecMetricExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricExternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference(this as any, "metric", true);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: HorizontalPodAutoscalerSpecMetricExternalMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference(this as any, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerSpecMetricExternalTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetricObjectDescribedObject {
  /**
  * API version of the referent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#api_version HorizontalPodAutoscaler#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#kind HorizontalPodAutoscaler#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
}

export function horizontalPodAutoscalerSpecMetricObjectDescribedObjectToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference | HorizontalPodAutoscalerSpecMetricObjectDescribedObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricObjectDescribedObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricObjectDescribedObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

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
}
export interface HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}
  */
  readonly values?: string[];
}

export function horizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface HorizontalPodAutoscalerSpecMetricObjectMetricSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions[];
}

export function horizontalPodAutoscalerSpecMetricObjectMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetricSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface HorizontalPodAutoscalerSpecMetricObjectMetric {
  /**
  * name is the name of the given metric
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}
  */
  readonly selector?: HorizontalPodAutoscalerSpecMetricObjectMetricSelector[];
}

export function horizontalPodAutoscalerSpecMetricObjectMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference | HorizontalPodAutoscalerSpecMetricObjectMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerSpecMetricObjectMetricSelectorToTerraform)(struct!.selector),
  }
}

export class HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricObjectMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricObjectMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._selector = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector?: HorizontalPodAutoscalerSpecMetricObjectMetricSelector[]; 
  public get selector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('selector') as any;
  }
  public set selector(value: HorizontalPodAutoscalerSpecMetricObjectMetricSelector[]) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface HorizontalPodAutoscalerSpecMetricObjectTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerSpecMetricObjectTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference | HorizontalPodAutoscalerSpecMetricObjectTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricObjectTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricObjectTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HorizontalPodAutoscalerSpecMetricObject {
  /**
  * described_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#described_object HorizontalPodAutoscaler#described_object}
  */
  readonly describedObject: HorizontalPodAutoscalerSpecMetricObjectDescribedObject;
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric: HorizontalPodAutoscalerSpecMetricObjectMetric;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricObjectTarget;
}

export function horizontalPodAutoscalerSpecMetricObjectToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectOutputReference | HorizontalPodAutoscalerSpecMetricObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    described_object: horizontalPodAutoscalerSpecMetricObjectDescribedObjectToTerraform(struct!.describedObject),
    metric: horizontalPodAutoscalerSpecMetricObjectMetricToTerraform(struct!.metric),
    target: horizontalPodAutoscalerSpecMetricObjectTargetToTerraform(struct!.target),
  }
}

export class HorizontalPodAutoscalerSpecMetricObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._describedObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.describedObject = this._describedObject?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._describedObject.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._describedObject.internalValue = value.describedObject;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // described_object - computed: false, optional: false, required: true
  private _describedObject = new HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference(this as any, "described_object", true);
  public get describedObject() {
    return this._describedObject;
  }
  public putDescribedObject(value: HorizontalPodAutoscalerSpecMetricObjectDescribedObject) {
    this._describedObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describedObjectInput() {
    return this._describedObject.internalValue;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference(this as any, "metric", true);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: HorizontalPodAutoscalerSpecMetricObjectMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference(this as any, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerSpecMetricObjectTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}
  */
  readonly values?: string[];
}

export function horizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface HorizontalPodAutoscalerSpecMetricPodsMetricSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions[];
}

export function horizontalPodAutoscalerSpecMetricPodsMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetricSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface HorizontalPodAutoscalerSpecMetricPodsMetric {
  /**
  * name is the name of the given metric
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}
  */
  readonly selector?: HorizontalPodAutoscalerSpecMetricPodsMetricSelector[];
}

export function horizontalPodAutoscalerSpecMetricPodsMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference | HorizontalPodAutoscalerSpecMetricPodsMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerSpecMetricPodsMetricSelectorToTerraform)(struct!.selector),
  }
}

export class HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricPodsMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricPodsMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._selector = value.selector;
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

  // selector - computed: false, optional: true, required: false
  private _selector?: HorizontalPodAutoscalerSpecMetricPodsMetricSelector[]; 
  public get selector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('selector') as any;
  }
  public set selector(value: HorizontalPodAutoscalerSpecMetricPodsMetricSelector[]) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface HorizontalPodAutoscalerSpecMetricPodsTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerSpecMetricPodsTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference | HorizontalPodAutoscalerSpecMetricPodsTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricPodsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricPodsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HorizontalPodAutoscalerSpecMetricPods {
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric: HorizontalPodAutoscalerSpecMetricPodsMetric;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricPodsTarget;
}

export function horizontalPodAutoscalerSpecMetricPodsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsOutputReference | HorizontalPodAutoscalerSpecMetricPods): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: horizontalPodAutoscalerSpecMetricPodsMetricToTerraform(struct!.metric),
    target: horizontalPodAutoscalerSpecMetricPodsTargetToTerraform(struct!.target),
  }
}

export class HorizontalPodAutoscalerSpecMetricPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricPods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricPods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metric.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metric.internalValue = value.metric;
      this._target.internalValue = value.target;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference(this as any, "metric", true);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: HorizontalPodAutoscalerSpecMetricPodsMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference(this as any, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerSpecMetricPodsTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetricResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerSpecMetricResourceTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference | HorizontalPodAutoscalerSpecMetricResourceTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricResourceTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageUtilization = this._averageUtilization;
    }
    if (this._averageValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageValue = this._averageValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricResourceTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageUtilization = undefined;
      this._averageValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageUtilization = value.averageUtilization;
      this._averageValue = value.averageValue;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // average_utilization - computed: false, optional: true, required: false
  private _averageUtilization?: number; 
  public get averageUtilization() {
    return this.getNumberAttribute('average_utilization');
  }
  public set averageUtilization(value: number) {
    this._averageUtilization = value;
  }
  public resetAverageUtilization() {
    this._averageUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUtilizationInput() {
    return this._averageUtilization;
  }

  // average_value - computed: false, optional: true, required: false
  private _averageValue?: string; 
  public get averageValue() {
    return this.getStringAttribute('average_value');
  }
  public set averageValue(value: string) {
    this._averageValue = value;
  }
  public resetAverageValue() {
    this._averageValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageValueInput() {
    return this._averageValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface HorizontalPodAutoscalerSpecMetricResource {
  /**
  * name is the name of the resource in question.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricResourceTarget;
}

export function horizontalPodAutoscalerSpecMetricResourceToTerraform(struct?: HorizontalPodAutoscalerSpecMetricResourceOutputReference | HorizontalPodAutoscalerSpecMetricResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: horizontalPodAutoscalerSpecMetricResourceTargetToTerraform(struct!.target),
  }
}

export class HorizontalPodAutoscalerSpecMetricResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecMetricResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecMetricResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._target.internalValue = value.target;
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

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference(this as any, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerSpecMetricResourceTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface HorizontalPodAutoscalerSpecMetric {
  /**
  * type is the type of metric source. It should be one of "Object", "Pods", "External" or "Resource", each mapping to a matching field in the object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * external block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#external HorizontalPodAutoscaler#external}
  */
  readonly external?: HorizontalPodAutoscalerSpecMetricExternal;
  /**
  * object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#object HorizontalPodAutoscaler#object}
  */
  readonly object?: HorizontalPodAutoscalerSpecMetricObject;
  /**
  * pods block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#pods HorizontalPodAutoscaler#pods}
  */
  readonly pods?: HorizontalPodAutoscalerSpecMetricPods;
  /**
  * resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#resource HorizontalPodAutoscaler#resource}
  */
  readonly resource?: HorizontalPodAutoscalerSpecMetricResource;
}

export function horizontalPodAutoscalerSpecMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    external: horizontalPodAutoscalerSpecMetricExternalToTerraform(struct!.external),
    object: horizontalPodAutoscalerSpecMetricObjectToTerraform(struct!.object),
    pods: horizontalPodAutoscalerSpecMetricPodsToTerraform(struct!.pods),
    resource: horizontalPodAutoscalerSpecMetricResourceToTerraform(struct!.resource),
  }
}

export interface HorizontalPodAutoscalerSpecScaleTargetRef {
  /**
  * API version of the referent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#api_version HorizontalPodAutoscaler#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#kind HorizontalPodAutoscaler#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
}

export function horizontalPodAutoscalerSpecScaleTargetRefToTerraform(struct?: HorizontalPodAutoscalerSpecScaleTargetRefOutputReference | HorizontalPodAutoscalerSpecScaleTargetRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class HorizontalPodAutoscalerSpecScaleTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpecScaleTargetRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpecScaleTargetRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
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
}
export interface HorizontalPodAutoscalerSpec {
  /**
  * Upper limit for the number of pods that can be set by the autoscaler.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#max_replicas HorizontalPodAutoscaler#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#min_replicas HorizontalPodAutoscaler#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. If not specified the default autoscaling policy will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#target_cpu_utilization_percentage HorizontalPodAutoscaler#target_cpu_utilization_percentage}
  */
  readonly targetCpuUtilizationPercentage?: number;
  /**
  * behavior block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#behavior HorizontalPodAutoscaler#behavior}
  */
  readonly behavior?: HorizontalPodAutoscalerSpecBehavior;
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric?: HorizontalPodAutoscalerSpecMetric[];
  /**
  * scale_target_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler#scale_target_ref HorizontalPodAutoscaler#scale_target_ref}
  */
  readonly scaleTargetRef: HorizontalPodAutoscalerSpecScaleTargetRef;
}

export function horizontalPodAutoscalerSpecToTerraform(struct?: HorizontalPodAutoscalerSpecOutputReference | HorizontalPodAutoscalerSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    target_cpu_utilization_percentage: cdktf.numberToTerraform(struct!.targetCpuUtilizationPercentage),
    behavior: horizontalPodAutoscalerSpecBehaviorToTerraform(struct!.behavior),
    metric: cdktf.listMapper(horizontalPodAutoscalerSpecMetricToTerraform)(struct!.metric),
    scale_target_ref: horizontalPodAutoscalerSpecScaleTargetRefToTerraform(struct!.scaleTargetRef),
  }
}

export class HorizontalPodAutoscalerSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._targetCpuUtilizationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCpuUtilizationPercentage = this._targetCpuUtilizationPercentage;
    }
    if (this._behavior?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior?.internalValue;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._scaleTargetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleTargetRef = this._scaleTargetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HorizontalPodAutoscalerSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
      this._targetCpuUtilizationPercentage = undefined;
      this._behavior.internalValue = undefined;
      this._metric = undefined;
      this._scaleTargetRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
      this._targetCpuUtilizationPercentage = value.targetCpuUtilizationPercentage;
      this._behavior.internalValue = value.behavior;
      this._metric = value.metric;
      this._scaleTargetRef.internalValue = value.scaleTargetRef;
    }
  }

  // max_replicas - computed: false, optional: false, required: true
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // target_cpu_utilization_percentage - computed: true, optional: true, required: false
  private _targetCpuUtilizationPercentage?: number; 
  public get targetCpuUtilizationPercentage() {
    return this.getNumberAttribute('target_cpu_utilization_percentage');
  }
  public set targetCpuUtilizationPercentage(value: number) {
    this._targetCpuUtilizationPercentage = value;
  }
  public resetTargetCpuUtilizationPercentage() {
    this._targetCpuUtilizationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCpuUtilizationPercentageInput() {
    return this._targetCpuUtilizationPercentage;
  }

  // behavior - computed: false, optional: true, required: false
  private _behavior = new HorizontalPodAutoscalerSpecBehaviorOutputReference(this as any, "behavior", true);
  public get behavior() {
    return this._behavior;
  }
  public putBehavior(value: HorizontalPodAutoscalerSpecBehavior) {
    this._behavior.internalValue = value;
  }
  public resetBehavior() {
    this._behavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: HorizontalPodAutoscalerSpecMetric[]; 
  public get metric() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metric') as any;
  }
  public set metric(value: HorizontalPodAutoscalerSpecMetric[]) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // scale_target_ref - computed: false, optional: false, required: true
  private _scaleTargetRef = new HorizontalPodAutoscalerSpecScaleTargetRefOutputReference(this as any, "scale_target_ref", true);
  public get scaleTargetRef() {
    return this._scaleTargetRef;
  }
  public putScaleTargetRef(value: HorizontalPodAutoscalerSpecScaleTargetRef) {
    this._scaleTargetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetRefInput() {
    return this._scaleTargetRef.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler kubernetes_horizontal_pod_autoscaler}
*/
export class HorizontalPodAutoscaler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_horizontal_pod_autoscaler";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler kubernetes_horizontal_pod_autoscaler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HorizontalPodAutoscalerConfig
  */
  public constructor(scope: Construct, id: string, config: HorizontalPodAutoscalerConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_horizontal_pod_autoscaler',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HorizontalPodAutoscalerMetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HorizontalPodAutoscalerMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new HorizontalPodAutoscalerSpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: HorizontalPodAutoscalerSpec) {
    this._spec.internalValue = value;
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
      metadata: horizontalPodAutoscalerMetadataToTerraform(this._metadata.internalValue),
      spec: horizontalPodAutoscalerSpecToTerraform(this._spec.internalValue),
    };
  }
}
