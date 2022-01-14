// https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HorizontalPodAutoscalerV2Beta2Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#metadata HorizontalPodAutoscalerV2Beta2#metadata}
  */
  readonly metadata: HorizontalPodAutoscalerV2Beta2Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#spec HorizontalPodAutoscalerV2Beta2#spec}
  */
  readonly spec: HorizontalPodAutoscalerV2Beta2Spec;
}
export interface HorizontalPodAutoscalerV2Beta2Metadata {
  /**
  * An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#annotations HorizontalPodAutoscalerV2Beta2#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#generate_name HorizontalPodAutoscalerV2Beta2#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#labels HorizontalPodAutoscalerV2Beta2#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the horizontal pod autoscaler must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#namespace HorizontalPodAutoscalerV2Beta2#namespace}
  */
  readonly namespace?: string;
}

export function horizontalPodAutoscalerV2Beta2MetadataToTerraform(struct?: HorizontalPodAutoscalerV2Beta2MetadataOutputReference | HorizontalPodAutoscalerV2Beta2Metadata): any {
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

export class HorizontalPodAutoscalerV2Beta2MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2Metadata | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2Metadata | undefined) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy {
  /**
  * Period specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#period_seconds HorizontalPodAutoscalerV2Beta2#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * Type is used to specify the scaling policy: Percent or Pods
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}
  */
  readonly type: string;
  /**
  * Value contains the amount of change which is permitted by the policy. It must be greater than zero.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}
  */
  readonly value: number;
}

export function horizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy): any {
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

export interface HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown {
  /**
  * Used to specify which policy should be used. If not set, the default value Max is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#select_policy HorizontalPodAutoscalerV2Beta2#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * Number of seconds for which past recommendations should be considered while scaling up or scaling down. This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#stabilization_window_seconds HorizontalPodAutoscalerV2Beta2#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
  /**
  * policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#policy HorizontalPodAutoscalerV2Beta2#policy}
  */
  readonly policy: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicy[];
}

export function horizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
    policy: cdktf.listMapper(horizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownPolicyToTerraform)(struct!.policy),
  }
}

export interface HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy {
  /**
  * Period specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#period_seconds HorizontalPodAutoscalerV2Beta2#period_seconds}
  */
  readonly periodSeconds: number;
  /**
  * Type is used to specify the scaling policy: Percent or Pods
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}
  */
  readonly type: string;
  /**
  * Value contains the amount of change which is permitted by the policy. It must be greater than zero.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}
  */
  readonly value: number;
}

export function horizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy): any {
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

export interface HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp {
  /**
  * Used to specify which policy should be used. If not set, the default value Max is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#select_policy HorizontalPodAutoscalerV2Beta2#select_policy}
  */
  readonly selectPolicy?: string;
  /**
  * Number of seconds for which past recommendations should be considered while scaling up or scaling down. This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#stabilization_window_seconds HorizontalPodAutoscalerV2Beta2#stabilization_window_seconds}
  */
  readonly stabilizationWindowSeconds?: number;
  /**
  * policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#policy HorizontalPodAutoscalerV2Beta2#policy}
  */
  readonly policy: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicy[];
}

export function horizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    select_policy: cdktf.stringToTerraform(struct!.selectPolicy),
    stabilization_window_seconds: cdktf.numberToTerraform(struct!.stabilizationWindowSeconds),
    policy: cdktf.listMapper(horizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpPolicyToTerraform)(struct!.policy),
  }
}

export interface HorizontalPodAutoscalerV2Beta2SpecBehavior {
  /**
  * scale_down block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#scale_down HorizontalPodAutoscalerV2Beta2#scale_down}
  */
  readonly scaleDown?: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown[];
  /**
  * scale_up block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#scale_up HorizontalPodAutoscalerV2Beta2#scale_up}
  */
  readonly scaleUp?: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp[];
}

export function horizontalPodAutoscalerV2Beta2SpecBehaviorToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference | HorizontalPodAutoscalerV2Beta2SpecBehavior): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_down: cdktf.listMapper(horizontalPodAutoscalerV2Beta2SpecBehaviorScaleDownToTerraform)(struct!.scaleDown),
    scale_up: cdktf.listMapper(horizontalPodAutoscalerV2Beta2SpecBehaviorScaleUpToTerraform)(struct!.scaleUp),
  }
}

export class HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecBehavior | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecBehavior | undefined) {
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
  private _scaleDown?: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown[]; 
  public get scaleDown() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scale_down') as any;
  }
  public set scaleDown(value: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleDown[]) {
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
  private _scaleUp?: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp[]; 
  public get scaleUp() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scale_up') as any;
  }
  public set scaleUp(value: HorizontalPodAutoscalerV2Beta2SpecBehaviorScaleUp[]) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#key HorizontalPodAutoscalerV2Beta2#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#operator HorizontalPodAutoscalerV2Beta2#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#values HorizontalPodAutoscalerV2Beta2#values}
  */
  readonly values?: string[];
}

export function horizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions): any {
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

export interface HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_labels HorizontalPodAutoscalerV2Beta2#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_expressions HorizontalPodAutoscalerV2Beta2#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressions[];
}

export function horizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric {
  /**
  * name is the name of the given metric
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}
  */
  readonly name: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#selector HorizontalPodAutoscalerV2Beta2#selector}
  */
  readonly selector?: HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector[];
}

export function horizontalPodAutoscalerV2Beta2SpecMetricExternalMetricToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelectorToTerraform)(struct!.selector),
  }
}

export class HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric | undefined) {
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
  private _selector?: HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector[]; 
  public get selector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('selector') as any;
  }
  public set selector(value: HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricSelector[]) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerV2Beta2SpecMetricExternalTargetToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget): any {
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

export class HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget | undefined) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricExternal {
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}
  */
  readonly metric: HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}
  */
  readonly target?: HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget;
}

export function horizontalPodAutoscalerV2Beta2SpecMetricExternalToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricExternal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: horizontalPodAutoscalerV2Beta2SpecMetricExternalMetricToTerraform(struct!.metric),
    target: horizontalPodAutoscalerV2Beta2SpecMetricExternalTargetToTerraform(struct!.target),
  }
}

export class HorizontalPodAutoscalerV2Beta2SpecMetricExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricExternal | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricExternal | undefined) {
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
  private _metric = new HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetricOutputReference(this as any, "metric", true);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: HorizontalPodAutoscalerV2Beta2SpecMetricExternalMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerV2Beta2SpecMetricExternalTargetOutputReference(this as any, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerV2Beta2SpecMetricExternalTarget) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject {
  /**
  * API version of the referent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#api_version HorizontalPodAutoscalerV2Beta2#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#kind HorizontalPodAutoscalerV2Beta2#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}
  */
  readonly name: string;
}

export function horizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject): any {
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

export class HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject | undefined) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#key HorizontalPodAutoscalerV2Beta2#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#operator HorizontalPodAutoscalerV2Beta2#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#values HorizontalPodAutoscalerV2Beta2#values}
  */
  readonly values?: string[];
}

export function horizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions): any {
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

export interface HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_labels HorizontalPodAutoscalerV2Beta2#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_expressions HorizontalPodAutoscalerV2Beta2#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressions[];
}

export function horizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric {
  /**
  * name is the name of the given metric
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}
  */
  readonly name: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#selector HorizontalPodAutoscalerV2Beta2#selector}
  */
  readonly selector?: HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector[];
}

export function horizontalPodAutoscalerV2Beta2SpecMetricObjectMetricToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelectorToTerraform)(struct!.selector),
  }
}

export class HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric | undefined) {
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
  private _selector?: HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector[]; 
  public get selector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('selector') as any;
  }
  public set selector(value: HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricSelector[]) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerV2Beta2SpecMetricObjectTargetToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget): any {
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

export class HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget | undefined) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricObject {
  /**
  * described_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#described_object HorizontalPodAutoscalerV2Beta2#described_object}
  */
  readonly describedObject: HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject;
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}
  */
  readonly metric: HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}
  */
  readonly target?: HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget;
}

export function horizontalPodAutoscalerV2Beta2SpecMetricObjectToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    described_object: horizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectToTerraform(struct!.describedObject),
    metric: horizontalPodAutoscalerV2Beta2SpecMetricObjectMetricToTerraform(struct!.metric),
    target: horizontalPodAutoscalerV2Beta2SpecMetricObjectTargetToTerraform(struct!.target),
  }
}

export class HorizontalPodAutoscalerV2Beta2SpecMetricObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricObject | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricObject | undefined) {
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
  private _describedObject = new HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObjectOutputReference(this as any, "described_object", true);
  public get describedObject() {
    return this._describedObject;
  }
  public putDescribedObject(value: HorizontalPodAutoscalerV2Beta2SpecMetricObjectDescribedObject) {
    this._describedObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describedObjectInput() {
    return this._describedObject.internalValue;
  }

  // metric - computed: false, optional: false, required: true
  private _metric = new HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetricOutputReference(this as any, "metric", true);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: HorizontalPodAutoscalerV2Beta2SpecMetricObjectMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerV2Beta2SpecMetricObjectTargetOutputReference(this as any, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerV2Beta2SpecMetricObjectTarget) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#key HorizontalPodAutoscalerV2Beta2#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#operator HorizontalPodAutoscalerV2Beta2#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#values HorizontalPodAutoscalerV2Beta2#values}
  */
  readonly values?: string[];
}

export function horizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions): any {
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

export interface HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_labels HorizontalPodAutoscalerV2Beta2#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#match_expressions HorizontalPodAutoscalerV2Beta2#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressions[];
}

export function horizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric {
  /**
  * name is the name of the given metric
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}
  */
  readonly name: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#selector HorizontalPodAutoscalerV2Beta2#selector}
  */
  readonly selector?: HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector[];
}

export function horizontalPodAutoscalerV2Beta2SpecMetricPodsMetricToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelectorToTerraform)(struct!.selector),
  }
}

export class HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric | undefined) {
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
  private _selector?: HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector[]; 
  public get selector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('selector') as any;
  }
  public set selector(value: HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricSelector[]) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerV2Beta2SpecMetricPodsTargetToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget): any {
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

export class HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget | undefined) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricPods {
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}
  */
  readonly metric: HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}
  */
  readonly target?: HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget;
}

export function horizontalPodAutoscalerV2Beta2SpecMetricPodsToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricPods): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: horizontalPodAutoscalerV2Beta2SpecMetricPodsMetricToTerraform(struct!.metric),
    target: horizontalPodAutoscalerV2Beta2SpecMetricPodsTargetToTerraform(struct!.target),
  }
}

export class HorizontalPodAutoscalerV2Beta2SpecMetricPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricPods | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricPods | undefined) {
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
  private _metric = new HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetricOutputReference(this as any, "metric", true);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: HorizontalPodAutoscalerV2Beta2SpecMetricPodsMetric) {
    this._metric.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new HorizontalPodAutoscalerV2Beta2SpecMetricPodsTargetOutputReference(this as any, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerV2Beta2SpecMetricPodsTarget) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_utilization HorizontalPodAutoscalerV2Beta2#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#average_value HorizontalPodAutoscalerV2Beta2#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#value HorizontalPodAutoscalerV2Beta2#value}
  */
  readonly value?: string;
}

export function horizontalPodAutoscalerV2Beta2SpecMetricResourceTargetToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget): any {
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

export class HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget | undefined) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetricResource {
  /**
  * name is the name of the resource in question.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}
  */
  readonly name: string;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#target HorizontalPodAutoscalerV2Beta2#target}
  */
  readonly target?: HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget;
}

export function horizontalPodAutoscalerV2Beta2SpecMetricResourceToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference | HorizontalPodAutoscalerV2Beta2SpecMetricResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: horizontalPodAutoscalerV2Beta2SpecMetricResourceTargetToTerraform(struct!.target),
  }
}

export class HorizontalPodAutoscalerV2Beta2SpecMetricResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecMetricResource | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecMetricResource | undefined) {
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
  private _target = new HorizontalPodAutoscalerV2Beta2SpecMetricResourceTargetOutputReference(this as any, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: HorizontalPodAutoscalerV2Beta2SpecMetricResourceTarget) {
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
export interface HorizontalPodAutoscalerV2Beta2SpecMetric {
  /**
  * type is the type of metric source. It should be one of "Object", "Pods", "External" or "Resource", each mapping to a matching field in the object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#type HorizontalPodAutoscalerV2Beta2#type}
  */
  readonly type: string;
  /**
  * external block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#external HorizontalPodAutoscalerV2Beta2#external}
  */
  readonly external?: HorizontalPodAutoscalerV2Beta2SpecMetricExternal;
  /**
  * object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#object HorizontalPodAutoscalerV2Beta2#object}
  */
  readonly object?: HorizontalPodAutoscalerV2Beta2SpecMetricObject;
  /**
  * pods block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#pods HorizontalPodAutoscalerV2Beta2#pods}
  */
  readonly pods?: HorizontalPodAutoscalerV2Beta2SpecMetricPods;
  /**
  * resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#resource HorizontalPodAutoscalerV2Beta2#resource}
  */
  readonly resource?: HorizontalPodAutoscalerV2Beta2SpecMetricResource;
}

export function horizontalPodAutoscalerV2Beta2SpecMetricToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    external: horizontalPodAutoscalerV2Beta2SpecMetricExternalToTerraform(struct!.external),
    object: horizontalPodAutoscalerV2Beta2SpecMetricObjectToTerraform(struct!.object),
    pods: horizontalPodAutoscalerV2Beta2SpecMetricPodsToTerraform(struct!.pods),
    resource: horizontalPodAutoscalerV2Beta2SpecMetricResourceToTerraform(struct!.resource),
  }
}

export interface HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef {
  /**
  * API version of the referent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#api_version HorizontalPodAutoscalerV2Beta2#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#kind HorizontalPodAutoscalerV2Beta2#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#name HorizontalPodAutoscalerV2Beta2#name}
  */
  readonly name: string;
}

export function horizontalPodAutoscalerV2Beta2SpecScaleTargetRefToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference | HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef): any {
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

export class HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef | undefined) {
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
export interface HorizontalPodAutoscalerV2Beta2Spec {
  /**
  * Upper limit for the number of pods that can be set by the autoscaler.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#max_replicas HorizontalPodAutoscalerV2Beta2#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#min_replicas HorizontalPodAutoscalerV2Beta2#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. If not specified the default autoscaling policy will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#target_cpu_utilization_percentage HorizontalPodAutoscalerV2Beta2#target_cpu_utilization_percentage}
  */
  readonly targetCpuUtilizationPercentage?: number;
  /**
  * behavior block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#behavior HorizontalPodAutoscalerV2Beta2#behavior}
  */
  readonly behavior?: HorizontalPodAutoscalerV2Beta2SpecBehavior;
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#metric HorizontalPodAutoscalerV2Beta2#metric}
  */
  readonly metric?: HorizontalPodAutoscalerV2Beta2SpecMetric[];
  /**
  * scale_target_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2#scale_target_ref HorizontalPodAutoscalerV2Beta2#scale_target_ref}
  */
  readonly scaleTargetRef: HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef;
}

export function horizontalPodAutoscalerV2Beta2SpecToTerraform(struct?: HorizontalPodAutoscalerV2Beta2SpecOutputReference | HorizontalPodAutoscalerV2Beta2Spec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    target_cpu_utilization_percentage: cdktf.numberToTerraform(struct!.targetCpuUtilizationPercentage),
    behavior: horizontalPodAutoscalerV2Beta2SpecBehaviorToTerraform(struct!.behavior),
    metric: cdktf.listMapper(horizontalPodAutoscalerV2Beta2SpecMetricToTerraform)(struct!.metric),
    scale_target_ref: horizontalPodAutoscalerV2Beta2SpecScaleTargetRefToTerraform(struct!.scaleTargetRef),
  }
}

export class HorizontalPodAutoscalerV2Beta2SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HorizontalPodAutoscalerV2Beta2Spec | undefined {
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

  public set internalValue(value: HorizontalPodAutoscalerV2Beta2Spec | undefined) {
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
  private _behavior = new HorizontalPodAutoscalerV2Beta2SpecBehaviorOutputReference(this as any, "behavior", true);
  public get behavior() {
    return this._behavior;
  }
  public putBehavior(value: HorizontalPodAutoscalerV2Beta2SpecBehavior) {
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
  private _metric?: HorizontalPodAutoscalerV2Beta2SpecMetric[]; 
  public get metric() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metric') as any;
  }
  public set metric(value: HorizontalPodAutoscalerV2Beta2SpecMetric[]) {
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
  private _scaleTargetRef = new HorizontalPodAutoscalerV2Beta2SpecScaleTargetRefOutputReference(this as any, "scale_target_ref", true);
  public get scaleTargetRef() {
    return this._scaleTargetRef;
  }
  public putScaleTargetRef(value: HorizontalPodAutoscalerV2Beta2SpecScaleTargetRef) {
    this._scaleTargetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetRefInput() {
    return this._scaleTargetRef.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2 kubernetes_horizontal_pod_autoscaler_v2beta2}
*/
export class HorizontalPodAutoscalerV2Beta2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_horizontal_pod_autoscaler_v2beta2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2beta2 kubernetes_horizontal_pod_autoscaler_v2beta2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HorizontalPodAutoscalerV2Beta2Config
  */
  public constructor(scope: Construct, id: string, config: HorizontalPodAutoscalerV2Beta2Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_horizontal_pod_autoscaler_v2beta2',
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
  private _metadata = new HorizontalPodAutoscalerV2Beta2MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HorizontalPodAutoscalerV2Beta2Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new HorizontalPodAutoscalerV2Beta2SpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: HorizontalPodAutoscalerV2Beta2Spec) {
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
      metadata: horizontalPodAutoscalerV2Beta2MetadataToTerraform(this._metadata.internalValue),
      spec: horizontalPodAutoscalerV2Beta2SpecToTerraform(this._spec.internalValue),
    };
  }
}
