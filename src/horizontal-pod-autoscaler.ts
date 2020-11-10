// https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HorizontalPodAutoscalerConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: HorizontalPodAutoscalerMetadata[];
  /** spec block */
  readonly spec: HorizontalPodAutoscalerSpec[];
}
export interface HorizontalPodAutoscalerMetadata {
  /** An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the horizontal pod autoscaler must be unique. */
  readonly namespace?: string;
}
export interface HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface HorizontalPodAutoscalerSpecMetricExternalMetricSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions[];
}
export interface HorizontalPodAutoscalerSpecMetricExternalMetric {
  /** name is the name of the given metric */
  readonly name: string;
  /** selector block */
  readonly selector?: HorizontalPodAutoscalerSpecMetricExternalMetricSelector[];
}
export interface HorizontalPodAutoscalerSpecMetricExternalTarget {
  /** averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type */
  readonly averageUtilization?: number;
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  readonly averageValue?: string;
  /** type represents whether the metric type is Utilization, Value, or AverageValue */
  readonly type: string;
  /** value is the target value of the metric (as a quantity). */
  readonly value?: string;
}
export interface HorizontalPodAutoscalerSpecMetricExternal {
  /** metric block */
  readonly metric: HorizontalPodAutoscalerSpecMetricExternalMetric[];
  /** target block */
  readonly target?: HorizontalPodAutoscalerSpecMetricExternalTarget[];
}
export interface HorizontalPodAutoscalerSpecMetricObjectDescribedObject {
  /** API version of the referent */
  readonly apiVersion: string;
  /** Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds */
  readonly kind: string;
  /** Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
}
export interface HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface HorizontalPodAutoscalerSpecMetricObjectMetricSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions[];
}
export interface HorizontalPodAutoscalerSpecMetricObjectMetric {
  /** name is the name of the given metric */
  readonly name: string;
  /** selector block */
  readonly selector?: HorizontalPodAutoscalerSpecMetricObjectMetricSelector[];
}
export interface HorizontalPodAutoscalerSpecMetricObjectTarget {
  /** averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type */
  readonly averageUtilization?: number;
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  readonly averageValue?: string;
  /** type represents whether the metric type is Utilization, Value, or AverageValue */
  readonly type: string;
  /** value is the target value of the metric (as a quantity). */
  readonly value?: string;
}
export interface HorizontalPodAutoscalerSpecMetricObject {
  /** described_object block */
  readonly describedObject: HorizontalPodAutoscalerSpecMetricObjectDescribedObject[];
  /** metric block */
  readonly metric: HorizontalPodAutoscalerSpecMetricObjectMetric[];
  /** target block */
  readonly target?: HorizontalPodAutoscalerSpecMetricObjectTarget[];
}
export interface HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface HorizontalPodAutoscalerSpecMetricPodsMetricSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions[];
}
export interface HorizontalPodAutoscalerSpecMetricPodsMetric {
  /** name is the name of the given metric */
  readonly name: string;
  /** selector block */
  readonly selector?: HorizontalPodAutoscalerSpecMetricPodsMetricSelector[];
}
export interface HorizontalPodAutoscalerSpecMetricPodsTarget {
  /** averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type */
  readonly averageUtilization?: number;
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  readonly averageValue?: string;
  /** type represents whether the metric type is Utilization, Value, or AverageValue */
  readonly type: string;
  /** value is the target value of the metric (as a quantity). */
  readonly value?: string;
}
export interface HorizontalPodAutoscalerSpecMetricPods {
  /** metric block */
  readonly metric: HorizontalPodAutoscalerSpecMetricPodsMetric[];
  /** target block */
  readonly target?: HorizontalPodAutoscalerSpecMetricPodsTarget[];
}
export interface HorizontalPodAutoscalerSpecMetricResourceTarget {
  /** averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type */
  readonly averageUtilization?: number;
  /** averageValue is the target value of the average of the metric across all relevant pods (as a quantity) */
  readonly averageValue?: string;
  /** type represents whether the metric type is Utilization, Value, or AverageValue */
  readonly type: string;
  /** value is the target value of the metric (as a quantity). */
  readonly value?: string;
}
export interface HorizontalPodAutoscalerSpecMetricResource {
  /** name is the name of the resource in question. */
  readonly name: string;
  /** target block */
  readonly target?: HorizontalPodAutoscalerSpecMetricResourceTarget[];
}
export interface HorizontalPodAutoscalerSpecMetric {
  /** type is the type of metric source. It should be one of "Object", "Pods", "External" or "Resource", each mapping to a matching field in the object. */
  readonly type: string;
  /** external block */
  readonly external?: HorizontalPodAutoscalerSpecMetricExternal[];
  /** object block */
  readonly object?: HorizontalPodAutoscalerSpecMetricObject[];
  /** pods block */
  readonly pods?: HorizontalPodAutoscalerSpecMetricPods[];
  /** resource block */
  readonly resource?: HorizontalPodAutoscalerSpecMetricResource[];
}
export interface HorizontalPodAutoscalerSpecScaleTargetRef {
  /** API version of the referent */
  readonly apiVersion?: string;
  /** Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds */
  readonly kind: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
}
export interface HorizontalPodAutoscalerSpec {
  /** Upper limit for the number of pods that can be set by the autoscaler. */
  readonly maxReplicas: number;
  /** Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`. */
  readonly minReplicas?: number;
  /** Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. If not specified the default autoscaling policy will be used. */
  readonly targetCpuUtilizationPercentage?: number;
  /** metric block */
  readonly metric?: HorizontalPodAutoscalerSpecMetric[];
  /** scale_target_ref block */
  readonly scaleTargetRef: HorizontalPodAutoscalerSpecScaleTargetRef[];
}

// Resource

export class HorizontalPodAutoscaler extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
      metadata: this._metadata,
      spec: this._spec,
    };
  }
}
