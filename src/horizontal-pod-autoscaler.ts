// https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HorizontalPodAutoscalerConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#metadata HorizontalPodAutoscaler#metadata}
  */
  readonly metadata: HorizontalPodAutoscalerMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#spec HorizontalPodAutoscaler#spec}
  */
  readonly spec: HorizontalPodAutoscalerSpec[];
}
export interface HorizontalPodAutoscalerMetadata {
  /**
  * An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#annotations HorizontalPodAutoscaler#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#generate_name HorizontalPodAutoscaler#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#labels HorizontalPodAutoscaler#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#name HorizontalPodAutoscaler#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the horizontal pod autoscaler must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#namespace HorizontalPodAutoscaler#namespace}
  */
  readonly namespace?: string;
}

function horizontalPodAutoscalerMetadataToTerraform(struct?: HorizontalPodAutoscalerMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#key HorizontalPodAutoscaler#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#operator HorizontalPodAutoscaler#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#values HorizontalPodAutoscaler#values}
  */
  readonly values?: string[];
}

function horizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#match_labels HorizontalPodAutoscaler#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#match_expressions HorizontalPodAutoscaler#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions[];
}

function horizontalPodAutoscalerSpecMetricExternalMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetricSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface HorizontalPodAutoscalerSpecMetricExternalMetric {
  /**
  * name is the name of the given metric
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#selector HorizontalPodAutoscaler#selector}
  */
  readonly selector?: HorizontalPodAutoscalerSpecMetricExternalMetricSelector[];
}

function horizontalPodAutoscalerSpecMetricExternalMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerSpecMetricExternalMetricSelectorToTerraform)(struct!.selector),
  }
}

export interface HorizontalPodAutoscalerSpecMetricExternalTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

function horizontalPodAutoscalerSpecMetricExternalTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternalTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface HorizontalPodAutoscalerSpecMetricExternal {
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric: HorizontalPodAutoscalerSpecMetricExternalMetric[];
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricExternalTarget[];
}

function horizontalPodAutoscalerSpecMetricExternalToTerraform(struct?: HorizontalPodAutoscalerSpecMetricExternal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric: cdktf.listMapper(horizontalPodAutoscalerSpecMetricExternalMetricToTerraform)(struct!.metric),
    target: cdktf.listMapper(horizontalPodAutoscalerSpecMetricExternalTargetToTerraform)(struct!.target),
  }
}

export interface HorizontalPodAutoscalerSpecMetricObjectDescribedObject {
  /**
  * API version of the referent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#api_version HorizontalPodAutoscaler#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#kind HorizontalPodAutoscaler#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
}

function horizontalPodAutoscalerSpecMetricObjectDescribedObjectToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectDescribedObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#key HorizontalPodAutoscaler#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#operator HorizontalPodAutoscaler#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#values HorizontalPodAutoscaler#values}
  */
  readonly values?: string[];
}

function horizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#match_labels HorizontalPodAutoscaler#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#match_expressions HorizontalPodAutoscaler#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions[];
}

function horizontalPodAutoscalerSpecMetricObjectMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetricSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface HorizontalPodAutoscalerSpecMetricObjectMetric {
  /**
  * name is the name of the given metric
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#selector HorizontalPodAutoscaler#selector}
  */
  readonly selector?: HorizontalPodAutoscalerSpecMetricObjectMetricSelector[];
}

function horizontalPodAutoscalerSpecMetricObjectMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerSpecMetricObjectMetricSelectorToTerraform)(struct!.selector),
  }
}

export interface HorizontalPodAutoscalerSpecMetricObjectTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

function horizontalPodAutoscalerSpecMetricObjectTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObjectTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface HorizontalPodAutoscalerSpecMetricObject {
  /**
  * described_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#described_object HorizontalPodAutoscaler#described_object}
  */
  readonly describedObject: HorizontalPodAutoscalerSpecMetricObjectDescribedObject[];
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric: HorizontalPodAutoscalerSpecMetricObjectMetric[];
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricObjectTarget[];
}

function horizontalPodAutoscalerSpecMetricObjectToTerraform(struct?: HorizontalPodAutoscalerSpecMetricObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    described_object: cdktf.listMapper(horizontalPodAutoscalerSpecMetricObjectDescribedObjectToTerraform)(struct!.describedObject),
    metric: cdktf.listMapper(horizontalPodAutoscalerSpecMetricObjectMetricToTerraform)(struct!.metric),
    target: cdktf.listMapper(horizontalPodAutoscalerSpecMetricObjectTargetToTerraform)(struct!.target),
  }
}

export interface HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#key HorizontalPodAutoscaler#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#operator HorizontalPodAutoscaler#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#values HorizontalPodAutoscaler#values}
  */
  readonly values?: string[];
}

function horizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#match_labels HorizontalPodAutoscaler#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#match_expressions HorizontalPodAutoscaler#match_expressions}
  */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions[];
}

function horizontalPodAutoscalerSpecMetricPodsMetricSelectorToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetricSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(horizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface HorizontalPodAutoscalerSpecMetricPodsMetric {
  /**
  * name is the name of the given metric
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#selector HorizontalPodAutoscaler#selector}
  */
  readonly selector?: HorizontalPodAutoscalerSpecMetricPodsMetricSelector[];
}

function horizontalPodAutoscalerSpecMetricPodsMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    selector: cdktf.listMapper(horizontalPodAutoscalerSpecMetricPodsMetricSelectorToTerraform)(struct!.selector),
  }
}

export interface HorizontalPodAutoscalerSpecMetricPodsTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

function horizontalPodAutoscalerSpecMetricPodsTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPodsTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface HorizontalPodAutoscalerSpecMetricPods {
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric: HorizontalPodAutoscalerSpecMetricPodsMetric[];
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricPodsTarget[];
}

function horizontalPodAutoscalerSpecMetricPodsToTerraform(struct?: HorizontalPodAutoscalerSpecMetricPods): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    metric: cdktf.listMapper(horizontalPodAutoscalerSpecMetricPodsMetricToTerraform)(struct!.metric),
    target: cdktf.listMapper(horizontalPodAutoscalerSpecMetricPodsTargetToTerraform)(struct!.target),
  }
}

export interface HorizontalPodAutoscalerSpecMetricResourceTarget {
  /**
  * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#average_utilization HorizontalPodAutoscaler#average_utilization}
  */
  readonly averageUtilization?: number;
  /**
  * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#average_value HorizontalPodAutoscaler#average_value}
  */
  readonly averageValue?: string;
  /**
  * type represents whether the metric type is Utilization, Value, or AverageValue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * value is the target value of the metric (as a quantity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#value HorizontalPodAutoscaler#value}
  */
  readonly value?: string;
}

function horizontalPodAutoscalerSpecMetricResourceTargetToTerraform(struct?: HorizontalPodAutoscalerSpecMetricResourceTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    average_utilization: cdktf.numberToTerraform(struct!.averageUtilization),
    average_value: cdktf.stringToTerraform(struct!.averageValue),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface HorizontalPodAutoscalerSpecMetricResource {
  /**
  * name is the name of the resource in question.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#target HorizontalPodAutoscaler#target}
  */
  readonly target?: HorizontalPodAutoscalerSpecMetricResourceTarget[];
}

function horizontalPodAutoscalerSpecMetricResourceToTerraform(struct?: HorizontalPodAutoscalerSpecMetricResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.listMapper(horizontalPodAutoscalerSpecMetricResourceTargetToTerraform)(struct!.target),
  }
}

export interface HorizontalPodAutoscalerSpecMetric {
  /**
  * type is the type of metric source. It should be one of "Object", "Pods", "External" or "Resource", each mapping to a matching field in the object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#type HorizontalPodAutoscaler#type}
  */
  readonly type: string;
  /**
  * external block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#external HorizontalPodAutoscaler#external}
  */
  readonly external?: HorizontalPodAutoscalerSpecMetricExternal[];
  /**
  * object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#object HorizontalPodAutoscaler#object}
  */
  readonly object?: HorizontalPodAutoscalerSpecMetricObject[];
  /**
  * pods block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#pods HorizontalPodAutoscaler#pods}
  */
  readonly pods?: HorizontalPodAutoscalerSpecMetricPods[];
  /**
  * resource block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#resource HorizontalPodAutoscaler#resource}
  */
  readonly resource?: HorizontalPodAutoscalerSpecMetricResource[];
}

function horizontalPodAutoscalerSpecMetricToTerraform(struct?: HorizontalPodAutoscalerSpecMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    external: cdktf.listMapper(horizontalPodAutoscalerSpecMetricExternalToTerraform)(struct!.external),
    object: cdktf.listMapper(horizontalPodAutoscalerSpecMetricObjectToTerraform)(struct!.object),
    pods: cdktf.listMapper(horizontalPodAutoscalerSpecMetricPodsToTerraform)(struct!.pods),
    resource: cdktf.listMapper(horizontalPodAutoscalerSpecMetricResourceToTerraform)(struct!.resource),
  }
}

export interface HorizontalPodAutoscalerSpecScaleTargetRef {
  /**
  * API version of the referent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#api_version HorizontalPodAutoscaler#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#kind HorizontalPodAutoscaler#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#name HorizontalPodAutoscaler#name}
  */
  readonly name: string;
}

function horizontalPodAutoscalerSpecScaleTargetRefToTerraform(struct?: HorizontalPodAutoscalerSpecScaleTargetRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface HorizontalPodAutoscalerSpec {
  /**
  * Upper limit for the number of pods that can be set by the autoscaler.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#max_replicas HorizontalPodAutoscaler#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#min_replicas HorizontalPodAutoscaler#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. If not specified the default autoscaling policy will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#target_cpu_utilization_percentage HorizontalPodAutoscaler#target_cpu_utilization_percentage}
  */
  readonly targetCpuUtilizationPercentage?: number;
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#metric HorizontalPodAutoscaler#metric}
  */
  readonly metric?: HorizontalPodAutoscalerSpecMetric[];
  /**
  * scale_target_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html#scale_target_ref HorizontalPodAutoscaler#scale_target_ref}
  */
  readonly scaleTargetRef: HorizontalPodAutoscalerSpecScaleTargetRef[];
}

function horizontalPodAutoscalerSpecToTerraform(struct?: HorizontalPodAutoscalerSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    target_cpu_utilization_percentage: cdktf.numberToTerraform(struct!.targetCpuUtilizationPercentage),
    metric: cdktf.listMapper(horizontalPodAutoscalerSpecMetricToTerraform)(struct!.metric),
    scale_target_ref: cdktf.listMapper(horizontalPodAutoscalerSpecScaleTargetRefToTerraform)(struct!.scaleTargetRef),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html kubernetes_horizontal_pod_autoscaler}
*/
export class HorizontalPodAutoscaler extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html kubernetes_horizontal_pod_autoscaler} Resource
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
  private _metadata: HorizontalPodAutoscalerMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: HorizontalPodAutoscalerMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: HorizontalPodAutoscalerSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: HorizontalPodAutoscalerSpec[]) {
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
      metadata: cdktf.listMapper(horizontalPodAutoscalerMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(horizontalPodAutoscalerSpecToTerraform)(this._spec),
    };
  }
}
