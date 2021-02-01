// https://www.terraform.io/docs/providers/kubernetes/r/replication_controller.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReplicationControllerConfig extends cdktf.TerraformMetaArguments {
  /** metadata block */
  readonly metadata: ReplicationControllerMetadata[];
  /** spec block */
  readonly spec: ReplicationControllerSpec[];
  /** timeouts block */
  readonly timeouts?: ReplicationControllerTimeouts;
}
export interface ReplicationControllerMetadata {
  /** An unstructured key value map stored with the replication controller that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the replication controller. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the replication controller, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the replication controller must be unique. */
  readonly namespace?: string;
}

function replicationControllerMetadataToTerraform(struct?: ReplicationControllerMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  readonly operator?: string;
  /** Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
}

function replicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: ReplicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight is in the range 1-100 */
  readonly weight: number;
  /** preference block */
  readonly preference: ReplicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference[];
}

function replicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: cdktf.listMapper(replicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform)(struct!.preference),
  }
}

export interface ReplicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  readonly operator?: string;
  /** Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm {
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions[];
}

function replicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform(struct?: ReplicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** node_selector_term block */
  readonly nodeSelectorTerm?: ReplicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[];
}

function replicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_selector_term: cdktf.listMapper(replicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform)(struct!.nodeSelectorTerm),
  }
}

export interface ReplicationControllerSpecTemplateAffinityNodeAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function replicationControllerSpecTemplateAffinityNodeAffinityToTerraform(struct?: ReplicationControllerSpecTemplateAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function replicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function replicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100 */
  readonly weight: number;
  /** pod_affinity_term block */
  readonly podAffinityTerm: ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}

function replicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform)(struct!.podAffinityTerm),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function replicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: ReplicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function replicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function replicationControllerSpecTemplateAffinityPodAffinityToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function replicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function replicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100 */
  readonly weight: number;
  /** pod_affinity_term block */
  readonly podAffinityTerm: ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}

function replicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform)(struct!.podAffinityTerm),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function replicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function replicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface ReplicationControllerSpecTemplateAffinityPodAntiAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function replicationControllerSpecTemplateAffinityPodAntiAffinityToTerraform(struct?: ReplicationControllerSpecTemplateAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface ReplicationControllerSpecTemplateAffinity {
  /** node_affinity block */
  readonly nodeAffinity?: ReplicationControllerSpecTemplateAffinityNodeAffinity[];
  /** pod_affinity block */
  readonly podAffinity?: ReplicationControllerSpecTemplateAffinityPodAffinity[];
  /** pod_anti_affinity block */
  readonly podAntiAffinity?: ReplicationControllerSpecTemplateAffinityPodAntiAffinity[];
}

function replicationControllerSpecTemplateAffinityToTerraform(struct?: ReplicationControllerSpecTemplateAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_affinity: cdktf.listMapper(replicationControllerSpecTemplateAffinityNodeAffinityToTerraform)(struct!.nodeAffinity),
    pod_affinity: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAffinityToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.listMapper(replicationControllerSpecTemplateAffinityPodAntiAffinityToTerraform)(struct!.podAntiAffinity),
  }
}

export interface ReplicationControllerSpecTemplateContainerEnvValueFromConfigMapKeyRef {
  /** The key to select. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the ConfigMap or its key must be defined. */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: ReplicationControllerSpecTemplateContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateContainerEnvValueFromFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function replicationControllerSpecTemplateContainerEnvValueFromFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface ReplicationControllerSpecTemplateContainerEnvValueFromResourceFieldRef {
  readonly containerName?: string;
  /** Resource to select */
  readonly resource: string;
}

function replicationControllerSpecTemplateContainerEnvValueFromResourceFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface ReplicationControllerSpecTemplateContainerEnvValueFromSecretKeyRef {
  /** The key of the secret to select from. Must be a valid secret key. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the Secret or its key must be defined. */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateContainerEnvValueFromSecretKeyRefToTerraform(struct?: ReplicationControllerSpecTemplateContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateContainerEnvValueFrom {
  /** config_map_key_ref block */
  readonly configMapKeyRef?: ReplicationControllerSpecTemplateContainerEnvValueFromConfigMapKeyRef[];
  /** field_ref block */
  readonly fieldRef?: ReplicationControllerSpecTemplateContainerEnvValueFromFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: ReplicationControllerSpecTemplateContainerEnvValueFromResourceFieldRef[];
  /** secret_key_ref block */
  readonly secretKeyRef?: ReplicationControllerSpecTemplateContainerEnvValueFromSecretKeyRef[];
}

function replicationControllerSpecTemplateContainerEnvValueFromToTerraform(struct?: ReplicationControllerSpecTemplateContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map_key_ref: cdktf.listMapper(replicationControllerSpecTemplateContainerEnvValueFromConfigMapKeyRefToTerraform)(struct!.configMapKeyRef),
    field_ref: cdktf.listMapper(replicationControllerSpecTemplateContainerEnvValueFromFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(replicationControllerSpecTemplateContainerEnvValueFromResourceFieldRefToTerraform)(struct!.resourceFieldRef),
    secret_key_ref: cdktf.listMapper(replicationControllerSpecTemplateContainerEnvValueFromSecretKeyRefToTerraform)(struct!.secretKeyRef),
  }
}

export interface ReplicationControllerSpecTemplateContainerEnv {
  /** Name of the environment variable. Must be a C_IDENTIFIER */
  readonly name: string;
  /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  readonly value?: string;
  /** value_from block */
  readonly valueFrom?: ReplicationControllerSpecTemplateContainerEnvValueFrom[];
}

function replicationControllerSpecTemplateContainerEnvToTerraform(struct?: ReplicationControllerSpecTemplateContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: cdktf.listMapper(replicationControllerSpecTemplateContainerEnvValueFromToTerraform)(struct!.valueFrom),
  }
}

export interface ReplicationControllerSpecTemplateContainerEnvFromConfigMapRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  /** Specify whether the ConfigMap must be defined */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateContainerEnvFromConfigMapRefToTerraform(struct?: ReplicationControllerSpecTemplateContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateContainerEnvFromSecretRef {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
  /** Specify whether the Secret must be defined */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateContainerEnvFromSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateContainerEnvFrom {
  /** An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  readonly prefix?: string;
  /** config_map_ref block */
  readonly configMapRef?: ReplicationControllerSpecTemplateContainerEnvFromConfigMapRef[];
  /** secret_ref block */
  readonly secretRef?: ReplicationControllerSpecTemplateContainerEnvFromSecretRef[];
}

function replicationControllerSpecTemplateContainerEnvFromToTerraform(struct?: ReplicationControllerSpecTemplateContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cdktf.listMapper(replicationControllerSpecTemplateContainerEnvFromConfigMapRefToTerraform)(struct!.configMapRef),
    secret_ref: cdktf.listMapper(replicationControllerSpecTemplateContainerEnvFromSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface ReplicationControllerSpecTemplateContainerLifecyclePostStartExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateContainerLifecyclePostStartExecToTerraform(struct?: ReplicationControllerSpecTemplateContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateContainerLifecyclePostStartHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateContainerLifecyclePostStartHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateContainerLifecyclePostStartHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateContainerLifecyclePostStartHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateContainerLifecyclePostStartTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateContainerLifecyclePostStartTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateContainerLifecyclePostStart {
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateContainerLifecyclePostStartExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateContainerLifecyclePostStartHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateContainerLifecyclePostStartTcpSocket[];
}

function replicationControllerSpecTemplateContainerLifecyclePostStartToTerraform(struct?: ReplicationControllerSpecTemplateContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(replicationControllerSpecTemplateContainerLifecyclePostStartExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateContainerLifecyclePostStartHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateContainerLifecyclePreStopExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateContainerLifecyclePreStopExecToTerraform(struct?: ReplicationControllerSpecTemplateContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateContainerLifecyclePreStopHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateContainerLifecyclePreStopHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateContainerLifecyclePreStopHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateContainerLifecyclePreStopHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateContainerLifecyclePreStopTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateContainerLifecyclePreStopTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateContainerLifecyclePreStop {
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateContainerLifecyclePreStopExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateContainerLifecyclePreStopHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateContainerLifecyclePreStopTcpSocket[];
}

function replicationControllerSpecTemplateContainerLifecyclePreStopToTerraform(struct?: ReplicationControllerSpecTemplateContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(replicationControllerSpecTemplateContainerLifecyclePreStopExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateContainerLifecyclePreStopHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateContainerLifecycle {
  /** post_start block */
  readonly postStart?: ReplicationControllerSpecTemplateContainerLifecyclePostStart[];
  /** pre_stop block */
  readonly preStop?: ReplicationControllerSpecTemplateContainerLifecyclePreStop[];
}

function replicationControllerSpecTemplateContainerLifecycleToTerraform(struct?: ReplicationControllerSpecTemplateContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    post_start: cdktf.listMapper(replicationControllerSpecTemplateContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(replicationControllerSpecTemplateContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export interface ReplicationControllerSpecTemplateContainerLivenessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateContainerLivenessProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateContainerLivenessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateContainerLivenessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateContainerLivenessProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateContainerLivenessProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateContainerLivenessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateContainerLivenessProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateContainerLivenessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateContainerLivenessProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateContainerLivenessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateContainerLivenessProbeTcpSocket[];
}

function replicationControllerSpecTemplateContainerLivenessProbeToTerraform(struct?: ReplicationControllerSpecTemplateContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateContainerLivenessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateContainerPort {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  readonly containerPort: number;
  /** What host IP to bind the external port to. */
  readonly hostIp?: string;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  readonly hostPort?: number;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services */
  readonly name?: string;
  /** Protocol for port. Must be UDP or TCP. Defaults to "TCP". */
  readonly protocol?: string;
}

function replicationControllerSpecTemplateContainerPortToTerraform(struct?: ReplicationControllerSpecTemplateContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ReplicationControllerSpecTemplateContainerReadinessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateContainerReadinessProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateContainerReadinessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateContainerReadinessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateContainerReadinessProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateContainerReadinessProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateContainerReadinessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateContainerReadinessProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateContainerReadinessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateContainerReadinessProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateContainerReadinessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateContainerReadinessProbeTcpSocket[];
}

function replicationControllerSpecTemplateContainerReadinessProbeToTerraform(struct?: ReplicationControllerSpecTemplateContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateContainerReadinessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateContainerResourcesLimits {
  readonly cpu?: string;
  readonly memory?: string;
}

function replicationControllerSpecTemplateContainerResourcesLimitsToTerraform(struct?: ReplicationControllerSpecTemplateContainerResourcesLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export interface ReplicationControllerSpecTemplateContainerResourcesRequests {
  readonly cpu?: string;
  readonly memory?: string;
}

function replicationControllerSpecTemplateContainerResourcesRequestsToTerraform(struct?: ReplicationControllerSpecTemplateContainerResourcesRequests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export interface ReplicationControllerSpecTemplateContainerResources {
  /** limits block */
  readonly limits?: ReplicationControllerSpecTemplateContainerResourcesLimits[];
  /** requests block */
  readonly requests?: ReplicationControllerSpecTemplateContainerResourcesRequests[];
}

function replicationControllerSpecTemplateContainerResourcesToTerraform(struct?: ReplicationControllerSpecTemplateContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.listMapper(replicationControllerSpecTemplateContainerResourcesLimitsToTerraform)(struct!.limits),
    requests: cdktf.listMapper(replicationControllerSpecTemplateContainerResourcesRequestsToTerraform)(struct!.requests),
  }
}

export interface ReplicationControllerSpecTemplateContainerSecurityContextCapabilities {
  /** Added capabilities */
  readonly add?: string[];
  /** Removed capabilities */
  readonly drop?: string[];
}

function replicationControllerSpecTemplateContainerSecurityContextCapabilitiesToTerraform(struct?: ReplicationControllerSpecTemplateContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface ReplicationControllerSpecTemplateContainerSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function replicationControllerSpecTemplateContainerSecurityContextSeLinuxOptionsToTerraform(struct?: ReplicationControllerSpecTemplateContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface ReplicationControllerSpecTemplateContainerSecurityContext {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
  readonly allowPrivilegeEscalation?: boolean;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
  readonly privileged?: boolean;
  /** Whether this container has a read-only root filesystem. Default is false. */
  readonly readOnlyRootFilesystem?: boolean;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsGroup?: number;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsUser?: number;
  /** capabilities block */
  readonly capabilities?: ReplicationControllerSpecTemplateContainerSecurityContextCapabilities[];
  /** se_linux_options block */
  readonly seLinuxOptions?: ReplicationControllerSpecTemplateContainerSecurityContextSeLinuxOptions[];
}

function replicationControllerSpecTemplateContainerSecurityContextToTerraform(struct?: ReplicationControllerSpecTemplateContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    capabilities: cdktf.listMapper(replicationControllerSpecTemplateContainerSecurityContextCapabilitiesToTerraform)(struct!.capabilities),
    se_linux_options: cdktf.listMapper(replicationControllerSpecTemplateContainerSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export interface ReplicationControllerSpecTemplateContainerStartupProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateContainerStartupProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateContainerStartupProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateContainerStartupProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateContainerStartupProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateContainerStartupProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateContainerStartupProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateContainerStartupProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateContainerStartupProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateContainerStartupProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateContainerStartupProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateContainerStartupProbeTcpSocket[];
}

function replicationControllerSpecTemplateContainerStartupProbeToTerraform(struct?: ReplicationControllerSpecTemplateContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateContainerStartupProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateContainerStartupProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateContainerVolumeMount {
  /** Path within the container at which the volume should be mounted. Must not contain ':'. */
  readonly mountPath: string;
  /** Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional. */
  readonly mountPropagation?: string;
  /** This must match the Name of a Volume. */
  readonly name: string;
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readonly readOnly?: boolean;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  readonly subPath?: string;
}

function replicationControllerSpecTemplateContainerVolumeMountToTerraform(struct?: ReplicationControllerSpecTemplateContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface ReplicationControllerSpecTemplateContainer {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly args?: string[];
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly command?: string[];
  /** Docker image name. More info: http://kubernetes.io/docs/user-guide/images */
  readonly image?: string;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images */
  readonly imagePullPolicy?: string;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  readonly name: string;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF.  */
  readonly stdin?: boolean;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. */
  readonly stdinOnce?: boolean;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated. */
  readonly terminationMessagePath?: string;
  /** Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  readonly terminationMessagePolicy?: string;
  /** Whether this container should allocate a TTY for itself */
  readonly tty?: boolean;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  readonly workingDir?: string;
  /** env block */
  readonly env?: ReplicationControllerSpecTemplateContainerEnv[];
  /** env_from block */
  readonly envFrom?: ReplicationControllerSpecTemplateContainerEnvFrom[];
  /** lifecycle block */
  readonly lifecycle?: ReplicationControllerSpecTemplateContainerLifecycle[];
  /** liveness_probe block */
  readonly livenessProbe?: ReplicationControllerSpecTemplateContainerLivenessProbe[];
  /** port block */
  readonly port?: ReplicationControllerSpecTemplateContainerPort[];
  /** readiness_probe block */
  readonly readinessProbe?: ReplicationControllerSpecTemplateContainerReadinessProbe[];
  /** resources block */
  readonly resources?: ReplicationControllerSpecTemplateContainerResources[];
  /** security_context block */
  readonly securityContext?: ReplicationControllerSpecTemplateContainerSecurityContext[];
  /** startup_probe block */
  readonly startupProbe?: ReplicationControllerSpecTemplateContainerStartupProbe[];
  /** volume_mount block */
  readonly volumeMount?: ReplicationControllerSpecTemplateContainerVolumeMount[];
}

function replicationControllerSpecTemplateContainerToTerraform(struct?: ReplicationControllerSpecTemplateContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    env: cdktf.listMapper(replicationControllerSpecTemplateContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(replicationControllerSpecTemplateContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: cdktf.listMapper(replicationControllerSpecTemplateContainerLifecycleToTerraform)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(replicationControllerSpecTemplateContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    port: cdktf.listMapper(replicationControllerSpecTemplateContainerPortToTerraform)(struct!.port),
    readiness_probe: cdktf.listMapper(replicationControllerSpecTemplateContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    resources: cdktf.listMapper(replicationControllerSpecTemplateContainerResourcesToTerraform)(struct!.resources),
    security_context: cdktf.listMapper(replicationControllerSpecTemplateContainerSecurityContextToTerraform)(struct!.securityContext),
    startup_probe: cdktf.listMapper(replicationControllerSpecTemplateContainerStartupProbeToTerraform)(struct!.startupProbe),
    volume_mount: cdktf.listMapper(replicationControllerSpecTemplateContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface ReplicationControllerSpecTemplateDnsConfigOption {
  /** Name of the option. */
  readonly name: string;
  /** Value of the option. Optional: Defaults to empty. */
  readonly value?: string;
}

function replicationControllerSpecTemplateDnsConfigOptionToTerraform(struct?: ReplicationControllerSpecTemplateDnsConfigOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateDnsConfig {
  /** A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
  readonly nameservers?: string[];
  /** A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
  readonly searches?: string[];
  /** option block */
  readonly option?: ReplicationControllerSpecTemplateDnsConfigOption[];
}

function replicationControllerSpecTemplateDnsConfigToTerraform(struct?: ReplicationControllerSpecTemplateDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    searches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searches),
    option: cdktf.listMapper(replicationControllerSpecTemplateDnsConfigOptionToTerraform)(struct!.option),
  }
}

export interface ReplicationControllerSpecTemplateHostAliases {
  /** Hostnames for the IP address. */
  readonly hostnames: string[];
  /** IP address of the host file entry. */
  readonly ip: string;
}

function replicationControllerSpecTemplateHostAliasesToTerraform(struct?: ReplicationControllerSpecTemplateHostAliases): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface ReplicationControllerSpecTemplateImagePullSecrets {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
}

function replicationControllerSpecTemplateImagePullSecretsToTerraform(struct?: ReplicationControllerSpecTemplateImagePullSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerEnvValueFromConfigMapKeyRef {
  /** The key to select. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the ConfigMap or its key must be defined. */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateInitContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerEnvValueFromFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function replicationControllerSpecTemplateInitContainerEnvValueFromFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerEnvValueFromResourceFieldRef {
  readonly containerName?: string;
  /** Resource to select */
  readonly resource: string;
}

function replicationControllerSpecTemplateInitContainerEnvValueFromResourceFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerEnvValueFromSecretKeyRef {
  /** The key of the secret to select from. Must be a valid secret key. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the Secret or its key must be defined. */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateInitContainerEnvValueFromSecretKeyRefToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerEnvValueFrom {
  /** config_map_key_ref block */
  readonly configMapKeyRef?: ReplicationControllerSpecTemplateInitContainerEnvValueFromConfigMapKeyRef[];
  /** field_ref block */
  readonly fieldRef?: ReplicationControllerSpecTemplateInitContainerEnvValueFromFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: ReplicationControllerSpecTemplateInitContainerEnvValueFromResourceFieldRef[];
  /** secret_key_ref block */
  readonly secretKeyRef?: ReplicationControllerSpecTemplateInitContainerEnvValueFromSecretKeyRef[];
}

function replicationControllerSpecTemplateInitContainerEnvValueFromToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map_key_ref: cdktf.listMapper(replicationControllerSpecTemplateInitContainerEnvValueFromConfigMapKeyRefToTerraform)(struct!.configMapKeyRef),
    field_ref: cdktf.listMapper(replicationControllerSpecTemplateInitContainerEnvValueFromFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(replicationControllerSpecTemplateInitContainerEnvValueFromResourceFieldRefToTerraform)(struct!.resourceFieldRef),
    secret_key_ref: cdktf.listMapper(replicationControllerSpecTemplateInitContainerEnvValueFromSecretKeyRefToTerraform)(struct!.secretKeyRef),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerEnv {
  /** Name of the environment variable. Must be a C_IDENTIFIER */
  readonly name: string;
  /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  readonly value?: string;
  /** value_from block */
  readonly valueFrom?: ReplicationControllerSpecTemplateInitContainerEnvValueFrom[];
}

function replicationControllerSpecTemplateInitContainerEnvToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: cdktf.listMapper(replicationControllerSpecTemplateInitContainerEnvValueFromToTerraform)(struct!.valueFrom),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerEnvFromConfigMapRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  /** Specify whether the ConfigMap must be defined */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateInitContainerEnvFromConfigMapRefToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerEnvFromSecretRef {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
  /** Specify whether the Secret must be defined */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateInitContainerEnvFromSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerEnvFrom {
  /** An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  readonly prefix?: string;
  /** config_map_ref block */
  readonly configMapRef?: ReplicationControllerSpecTemplateInitContainerEnvFromConfigMapRef[];
  /** secret_ref block */
  readonly secretRef?: ReplicationControllerSpecTemplateInitContainerEnvFromSecretRef[];
}

function replicationControllerSpecTemplateInitContainerEnvFromToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cdktf.listMapper(replicationControllerSpecTemplateInitContainerEnvFromConfigMapRefToTerraform)(struct!.configMapRef),
    secret_ref: cdktf.listMapper(replicationControllerSpecTemplateInitContainerEnvFromSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLifecyclePostStartExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateInitContainerLifecyclePostStartExecToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLifecyclePostStartHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLifecyclePostStartHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateInitContainerLifecyclePostStartHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateInitContainerLifecyclePostStartHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLifecyclePostStartTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateInitContainerLifecyclePostStartTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLifecyclePostStart {
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateInitContainerLifecyclePostStartExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateInitContainerLifecyclePostStartHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateInitContainerLifecyclePostStartTcpSocket[];
}

function replicationControllerSpecTemplateInitContainerLifecyclePostStartToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLifecyclePostStartExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLifecyclePostStartHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLifecyclePreStopExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateInitContainerLifecyclePreStopExecToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLifecyclePreStopHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLifecyclePreStopHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateInitContainerLifecyclePreStopHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateInitContainerLifecyclePreStopHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLifecyclePreStopTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateInitContainerLifecyclePreStopTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLifecyclePreStop {
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateInitContainerLifecyclePreStopExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateInitContainerLifecyclePreStopHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateInitContainerLifecyclePreStopTcpSocket[];
}

function replicationControllerSpecTemplateInitContainerLifecyclePreStopToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLifecyclePreStopExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLifecyclePreStopHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLifecycle {
  /** post_start block */
  readonly postStart?: ReplicationControllerSpecTemplateInitContainerLifecyclePostStart[];
  /** pre_stop block */
  readonly preStop?: ReplicationControllerSpecTemplateInitContainerLifecyclePreStop[];
}

function replicationControllerSpecTemplateInitContainerLifecycleToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    post_start: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLivenessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateInitContainerLivenessProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLivenessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateInitContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLivenessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateInitContainerLivenessProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateInitContainerLivenessProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLivenessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateInitContainerLivenessProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerLivenessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateInitContainerLivenessProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateInitContainerLivenessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateInitContainerLivenessProbeTcpSocket[];
}

function replicationControllerSpecTemplateInitContainerLivenessProbeToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLivenessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerPort {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  readonly containerPort: number;
  /** What host IP to bind the external port to. */
  readonly hostIp?: string;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  readonly hostPort?: number;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services */
  readonly name?: string;
  /** Protocol for port. Must be UDP or TCP. Defaults to "TCP". */
  readonly protocol?: string;
}

function replicationControllerSpecTemplateInitContainerPortToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerReadinessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateInitContainerReadinessProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerReadinessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateInitContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerReadinessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateInitContainerReadinessProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateInitContainerReadinessProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateInitContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerReadinessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateInitContainerReadinessProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerReadinessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateInitContainerReadinessProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateInitContainerReadinessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateInitContainerReadinessProbeTcpSocket[];
}

function replicationControllerSpecTemplateInitContainerReadinessProbeToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateInitContainerReadinessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateInitContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateInitContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerResourcesLimits {
  readonly cpu?: string;
  readonly memory?: string;
}

function replicationControllerSpecTemplateInitContainerResourcesLimitsToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerResourcesLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerResourcesRequests {
  readonly cpu?: string;
  readonly memory?: string;
}

function replicationControllerSpecTemplateInitContainerResourcesRequestsToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerResourcesRequests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerResources {
  /** limits block */
  readonly limits?: ReplicationControllerSpecTemplateInitContainerResourcesLimits[];
  /** requests block */
  readonly requests?: ReplicationControllerSpecTemplateInitContainerResourcesRequests[];
}

function replicationControllerSpecTemplateInitContainerResourcesToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.listMapper(replicationControllerSpecTemplateInitContainerResourcesLimitsToTerraform)(struct!.limits),
    requests: cdktf.listMapper(replicationControllerSpecTemplateInitContainerResourcesRequestsToTerraform)(struct!.requests),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerSecurityContextCapabilities {
  /** Added capabilities */
  readonly add?: string[];
  /** Removed capabilities */
  readonly drop?: string[];
}

function replicationControllerSpecTemplateInitContainerSecurityContextCapabilitiesToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function replicationControllerSpecTemplateInitContainerSecurityContextSeLinuxOptionsToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerSecurityContext {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
  readonly allowPrivilegeEscalation?: boolean;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
  readonly privileged?: boolean;
  /** Whether this container has a read-only root filesystem. Default is false. */
  readonly readOnlyRootFilesystem?: boolean;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsGroup?: number;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsUser?: number;
  /** capabilities block */
  readonly capabilities?: ReplicationControllerSpecTemplateInitContainerSecurityContextCapabilities[];
  /** se_linux_options block */
  readonly seLinuxOptions?: ReplicationControllerSpecTemplateInitContainerSecurityContextSeLinuxOptions[];
}

function replicationControllerSpecTemplateInitContainerSecurityContextToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    capabilities: cdktf.listMapper(replicationControllerSpecTemplateInitContainerSecurityContextCapabilitiesToTerraform)(struct!.capabilities),
    se_linux_options: cdktf.listMapper(replicationControllerSpecTemplateInitContainerSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerStartupProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateInitContainerStartupProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerStartupProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateInitContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerStartupProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateInitContainerStartupProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateInitContainerStartupProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateInitContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerStartupProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateInitContainerStartupProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerStartupProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateInitContainerStartupProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateInitContainerStartupProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateInitContainerStartupProbeTcpSocket[];
}

function replicationControllerSpecTemplateInitContainerStartupProbeToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateInitContainerStartupProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateInitContainerStartupProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateInitContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateInitContainerVolumeMount {
  /** Path within the container at which the volume should be mounted. Must not contain ':'. */
  readonly mountPath: string;
  /** Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional. */
  readonly mountPropagation?: string;
  /** This must match the Name of a Volume. */
  readonly name: string;
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readonly readOnly?: boolean;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  readonly subPath?: string;
}

function replicationControllerSpecTemplateInitContainerVolumeMountToTerraform(struct?: ReplicationControllerSpecTemplateInitContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface ReplicationControllerSpecTemplateInitContainer {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly args?: string[];
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly command?: string[];
  /** Docker image name. More info: http://kubernetes.io/docs/user-guide/images */
  readonly image?: string;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images */
  readonly imagePullPolicy?: string;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  readonly name: string;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF.  */
  readonly stdin?: boolean;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. */
  readonly stdinOnce?: boolean;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated. */
  readonly terminationMessagePath?: string;
  /** Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  readonly terminationMessagePolicy?: string;
  /** Whether this container should allocate a TTY for itself */
  readonly tty?: boolean;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  readonly workingDir?: string;
  /** env block */
  readonly env?: ReplicationControllerSpecTemplateInitContainerEnv[];
  /** env_from block */
  readonly envFrom?: ReplicationControllerSpecTemplateInitContainerEnvFrom[];
  /** lifecycle block */
  readonly lifecycle?: ReplicationControllerSpecTemplateInitContainerLifecycle[];
  /** liveness_probe block */
  readonly livenessProbe?: ReplicationControllerSpecTemplateInitContainerLivenessProbe[];
  /** port block */
  readonly port?: ReplicationControllerSpecTemplateInitContainerPort[];
  /** readiness_probe block */
  readonly readinessProbe?: ReplicationControllerSpecTemplateInitContainerReadinessProbe[];
  /** resources block */
  readonly resources?: ReplicationControllerSpecTemplateInitContainerResources[];
  /** security_context block */
  readonly securityContext?: ReplicationControllerSpecTemplateInitContainerSecurityContext[];
  /** startup_probe block */
  readonly startupProbe?: ReplicationControllerSpecTemplateInitContainerStartupProbe[];
  /** volume_mount block */
  readonly volumeMount?: ReplicationControllerSpecTemplateInitContainerVolumeMount[];
}

function replicationControllerSpecTemplateInitContainerToTerraform(struct?: ReplicationControllerSpecTemplateInitContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    env: cdktf.listMapper(replicationControllerSpecTemplateInitContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(replicationControllerSpecTemplateInitContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLifecycleToTerraform)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(replicationControllerSpecTemplateInitContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    port: cdktf.listMapper(replicationControllerSpecTemplateInitContainerPortToTerraform)(struct!.port),
    readiness_probe: cdktf.listMapper(replicationControllerSpecTemplateInitContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    resources: cdktf.listMapper(replicationControllerSpecTemplateInitContainerResourcesToTerraform)(struct!.resources),
    security_context: cdktf.listMapper(replicationControllerSpecTemplateInitContainerSecurityContextToTerraform)(struct!.securityContext),
    startup_probe: cdktf.listMapper(replicationControllerSpecTemplateInitContainerStartupProbeToTerraform)(struct!.startupProbe),
    volume_mount: cdktf.listMapper(replicationControllerSpecTemplateInitContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface ReplicationControllerSpecTemplateMetadata {
  /** An unstructured key value map stored with the replication controller's template that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the replication controller's template. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the replication controller's template, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the replication controller's template must be unique. */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateMetadataToTerraform(struct?: ReplicationControllerSpecTemplateMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateReadinessGate {
  /** refers to a condition in the pod's condition list with matching type. */
  readonly conditionType: string;
}

function replicationControllerSpecTemplateReadinessGateToTerraform(struct?: ReplicationControllerSpecTemplateReadinessGate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}

export interface ReplicationControllerSpecTemplateSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function replicationControllerSpecTemplateSecurityContextSeLinuxOptionsToTerraform(struct?: ReplicationControllerSpecTemplateSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface ReplicationControllerSpecTemplateSecurityContextSysctl {
  /** Name of a property to set. */
  readonly name: string;
  /** Value of a property to set. */
  readonly value: string;
}

function replicationControllerSpecTemplateSecurityContextSysctlToTerraform(struct?: ReplicationControllerSpecTemplateSecurityContextSysctl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSecurityContext {
  /** A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. */
  readonly fsGroup?: number;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly runAsGroup?: number;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly runAsUser?: number;
  /** A list of groups applied to the first process run in each container, in addition to the container's primary GID. If unspecified, no groups will be added to any container. */
  readonly supplementalGroups?: number[];
  /** se_linux_options block */
  readonly seLinuxOptions?: ReplicationControllerSpecTemplateSecurityContextSeLinuxOptions[];
  /** sysctl block */
  readonly sysctl?: ReplicationControllerSpecTemplateSecurityContextSysctl[];
}

function replicationControllerSpecTemplateSecurityContextToTerraform(struct?: ReplicationControllerSpecTemplateSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    supplemental_groups: cdktf.listMapper(cdktf.numberToTerraform)(struct!.supplementalGroups),
    se_linux_options: cdktf.listMapper(replicationControllerSpecTemplateSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
    sysctl: cdktf.listMapper(replicationControllerSpecTemplateSecurityContextSysctlToTerraform)(struct!.sysctl),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  readonly operator?: string;
  /** Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[];
}

function replicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight is in the range 1-100 */
  readonly weight: number;
  /** preference block */
  readonly preference: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference[];
}

function replicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform)(struct!.preference),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** Operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt. */
  readonly operator?: string;
  /** Values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm {
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions[];
}

function replicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** node_selector_term block */
  readonly nodeSelectorTerm?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm[];
}

function replicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_selector_term: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermToTerraform)(struct!.nodeSelectorTerm),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityNodeAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function replicationControllerSpecTemplateSpecAffinityNodeAffinityToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function replicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function replicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100 */
  readonly weight: number;
  /** pod_affinity_term block */
  readonly podAffinityTerm: ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}

function replicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform)(struct!.podAffinityTerm),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function replicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function replicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function replicationControllerSpecTemplateSpecAffinityPodAffinityToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[];
}

function replicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector[];
}

function replicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /** weight associated with matching the corresponding podAffinityTerm, in the range 1-100 */
  readonly weight: number;
  /** pod_affinity_term block */
  readonly podAffinityTerm: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm[];
}

function replicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform)(struct!.podAffinityTerm),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}

function replicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[];
}

function replicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /** namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means 'this pod's namespace' */
  readonly namespaces?: string[];
  /** empty topology key is interpreted by the scheduler as 'all topologies' */
  readonly topologyKey?: string;
  /** label_selector block */
  readonly labelSelector?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector[];
}

function replicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform)(struct!.labelSelector),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinity {
  /** preferred_during_scheduling_ignored_during_execution block */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[];
  /** required_during_scheduling_ignored_during_execution block */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[];
}

function replicationControllerSpecTemplateSpecAffinityPodAntiAffinityToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}

export interface ReplicationControllerSpecTemplateSpecAffinity {
  /** node_affinity block */
  readonly nodeAffinity?: ReplicationControllerSpecTemplateSpecAffinityNodeAffinity[];
  /** pod_affinity block */
  readonly podAffinity?: ReplicationControllerSpecTemplateSpecAffinityPodAffinity[];
  /** pod_anti_affinity block */
  readonly podAntiAffinity?: ReplicationControllerSpecTemplateSpecAffinityPodAntiAffinity[];
}

function replicationControllerSpecTemplateSpecAffinityToTerraform(struct?: ReplicationControllerSpecTemplateSpecAffinity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_affinity: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityNodeAffinityToTerraform)(struct!.nodeAffinity),
    pod_affinity: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAffinityToTerraform)(struct!.podAffinity),
    pod_anti_affinity: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityPodAntiAffinityToTerraform)(struct!.podAntiAffinity),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef {
  /** The key to select. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the ConfigMap or its key must be defined. */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerEnvValueFromFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function replicationControllerSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerEnvValueFromResourceFieldRef {
  readonly containerName?: string;
  /** Resource to select */
  readonly resource: string;
}

function replicationControllerSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerEnvValueFromSecretKeyRef {
  /** The key of the secret to select from. Must be a valid secret key. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the Secret or its key must be defined. */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerEnvValueFrom {
  /** config_map_key_ref block */
  readonly configMapKeyRef?: ReplicationControllerSpecTemplateSpecContainerEnvValueFromConfigMapKeyRef[];
  /** field_ref block */
  readonly fieldRef?: ReplicationControllerSpecTemplateSpecContainerEnvValueFromFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: ReplicationControllerSpecTemplateSpecContainerEnvValueFromResourceFieldRef[];
  /** secret_key_ref block */
  readonly secretKeyRef?: ReplicationControllerSpecTemplateSpecContainerEnvValueFromSecretKeyRef[];
}

function replicationControllerSpecTemplateSpecContainerEnvValueFromToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map_key_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerEnvValueFromConfigMapKeyRefToTerraform)(struct!.configMapKeyRef),
    field_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerEnvValueFromFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerEnvValueFromResourceFieldRefToTerraform)(struct!.resourceFieldRef),
    secret_key_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerEnvValueFromSecretKeyRefToTerraform)(struct!.secretKeyRef),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerEnv {
  /** Name of the environment variable. Must be a C_IDENTIFIER */
  readonly name: string;
  /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  readonly value?: string;
  /** value_from block */
  readonly valueFrom?: ReplicationControllerSpecTemplateSpecContainerEnvValueFrom[];
}

function replicationControllerSpecTemplateSpecContainerEnvToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerEnvValueFromToTerraform)(struct!.valueFrom),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerEnvFromConfigMapRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  /** Specify whether the ConfigMap must be defined */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerEnvFromSecretRef {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
  /** Specify whether the Secret must be defined */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateSpecContainerEnvFromSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerEnvFrom {
  /** An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  readonly prefix?: string;
  /** config_map_ref block */
  readonly configMapRef?: ReplicationControllerSpecTemplateSpecContainerEnvFromConfigMapRef[];
  /** secret_ref block */
  readonly secretRef?: ReplicationControllerSpecTemplateSpecContainerEnvFromSecretRef[];
}

function replicationControllerSpecTemplateSpecContainerEnvFromToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerEnvFromConfigMapRefToTerraform)(struct!.configMapRef),
    secret_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerEnvFromSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateSpecContainerLifecyclePostStartExecToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLifecyclePostStart {
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateSpecContainerLifecyclePostStartTcpSocket[];
}

function replicationControllerSpecTemplateSpecContainerLifecyclePostStartToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLifecyclePostStartExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLifecyclePostStartHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateSpecContainerLifecyclePreStopExecToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLifecyclePreStop {
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateSpecContainerLifecyclePreStopTcpSocket[];
}

function replicationControllerSpecTemplateSpecContainerLifecyclePreStopToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLifecyclePreStopExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLifecyclePreStopHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLifecycle {
  /** post_start block */
  readonly postStart?: ReplicationControllerSpecTemplateSpecContainerLifecyclePostStart[];
  /** pre_stop block */
  readonly preStop?: ReplicationControllerSpecTemplateSpecContainerLifecyclePreStop[];
}

function replicationControllerSpecTemplateSpecContainerLifecycleToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    post_start: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLivenessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateSpecContainerLivenessProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLivenessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLivenessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerLivenessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateSpecContainerLivenessProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateSpecContainerLivenessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateSpecContainerLivenessProbeTcpSocket[];
}

function replicationControllerSpecTemplateSpecContainerLivenessProbeToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLivenessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerPort {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  readonly containerPort: number;
  /** What host IP to bind the external port to. */
  readonly hostIp?: string;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  readonly hostPort?: number;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services */
  readonly name?: string;
  /** Protocol for port. Must be UDP or TCP. Defaults to "TCP". */
  readonly protocol?: string;
}

function replicationControllerSpecTemplateSpecContainerPortToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerReadinessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateSpecContainerReadinessProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerReadinessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerReadinessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerReadinessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateSpecContainerReadinessProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateSpecContainerReadinessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateSpecContainerReadinessProbeTcpSocket[];
}

function replicationControllerSpecTemplateSpecContainerReadinessProbeToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerReadinessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerResourcesLimits {
  readonly cpu?: string;
  readonly memory?: string;
}

function replicationControllerSpecTemplateSpecContainerResourcesLimitsToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerResourcesLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerResourcesRequests {
  readonly cpu?: string;
  readonly memory?: string;
}

function replicationControllerSpecTemplateSpecContainerResourcesRequestsToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerResourcesRequests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerResources {
  /** limits block */
  readonly limits?: ReplicationControllerSpecTemplateSpecContainerResourcesLimits[];
  /** requests block */
  readonly requests?: ReplicationControllerSpecTemplateSpecContainerResourcesRequests[];
}

function replicationControllerSpecTemplateSpecContainerResourcesToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerResourcesLimitsToTerraform)(struct!.limits),
    requests: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerResourcesRequestsToTerraform)(struct!.requests),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerSecurityContextCapabilities {
  /** Added capabilities */
  readonly add?: string[];
  /** Removed capabilities */
  readonly drop?: string[];
}

function replicationControllerSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function replicationControllerSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerSecurityContext {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
  readonly allowPrivilegeEscalation?: boolean;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
  readonly privileged?: boolean;
  /** Whether this container has a read-only root filesystem. Default is false. */
  readonly readOnlyRootFilesystem?: boolean;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsGroup?: number;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsUser?: number;
  /** capabilities block */
  readonly capabilities?: ReplicationControllerSpecTemplateSpecContainerSecurityContextCapabilities[];
  /** se_linux_options block */
  readonly seLinuxOptions?: ReplicationControllerSpecTemplateSpecContainerSecurityContextSeLinuxOptions[];
}

function replicationControllerSpecTemplateSpecContainerSecurityContextToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    capabilities: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerSecurityContextCapabilitiesToTerraform)(struct!.capabilities),
    se_linux_options: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerStartupProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateSpecContainerStartupProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerStartupProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateSpecContainerStartupProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateSpecContainerStartupProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerStartupProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerStartupProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateSpecContainerStartupProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateSpecContainerStartupProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateSpecContainerStartupProbeTcpSocket[];
}

function replicationControllerSpecTemplateSpecContainerStartupProbeToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerStartupProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerStartupProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainerVolumeMount {
  /** Path within the container at which the volume should be mounted. Must not contain ':'. */
  readonly mountPath: string;
  /** Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional. */
  readonly mountPropagation?: string;
  /** This must match the Name of a Volume. */
  readonly name: string;
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readonly readOnly?: boolean;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  readonly subPath?: string;
}

function replicationControllerSpecTemplateSpecContainerVolumeMountToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface ReplicationControllerSpecTemplateSpecContainer {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly args?: string[];
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly command?: string[];
  /** Docker image name. More info: http://kubernetes.io/docs/user-guide/images */
  readonly image?: string;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images */
  readonly imagePullPolicy?: string;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  readonly name: string;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF.  */
  readonly stdin?: boolean;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. */
  readonly stdinOnce?: boolean;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated. */
  readonly terminationMessagePath?: string;
  /** Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  readonly terminationMessagePolicy?: string;
  /** Whether this container should allocate a TTY for itself */
  readonly tty?: boolean;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  readonly workingDir?: string;
  /** env block */
  readonly env?: ReplicationControllerSpecTemplateSpecContainerEnv[];
  /** env_from block */
  readonly envFrom?: ReplicationControllerSpecTemplateSpecContainerEnvFrom[];
  /** lifecycle block */
  readonly lifecycle?: ReplicationControllerSpecTemplateSpecContainerLifecycle[];
  /** liveness_probe block */
  readonly livenessProbe?: ReplicationControllerSpecTemplateSpecContainerLivenessProbe[];
  /** port block */
  readonly port?: ReplicationControllerSpecTemplateSpecContainerPort[];
  /** readiness_probe block */
  readonly readinessProbe?: ReplicationControllerSpecTemplateSpecContainerReadinessProbe[];
  /** resources block */
  readonly resources?: ReplicationControllerSpecTemplateSpecContainerResources[];
  /** security_context block */
  readonly securityContext?: ReplicationControllerSpecTemplateSpecContainerSecurityContext[];
  /** startup_probe block */
  readonly startupProbe?: ReplicationControllerSpecTemplateSpecContainerStartupProbe[];
  /** volume_mount block */
  readonly volumeMount?: ReplicationControllerSpecTemplateSpecContainerVolumeMount[];
}

function replicationControllerSpecTemplateSpecContainerToTerraform(struct?: ReplicationControllerSpecTemplateSpecContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    env: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLifecycleToTerraform)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    port: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerPortToTerraform)(struct!.port),
    readiness_probe: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    resources: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerResourcesToTerraform)(struct!.resources),
    security_context: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerSecurityContextToTerraform)(struct!.securityContext),
    startup_probe: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerStartupProbeToTerraform)(struct!.startupProbe),
    volume_mount: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface ReplicationControllerSpecTemplateSpecDnsConfigOption {
  /** Name of the option. */
  readonly name: string;
  /** Value of the option. Optional: Defaults to empty. */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecDnsConfigOptionToTerraform(struct?: ReplicationControllerSpecTemplateSpecDnsConfigOption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecDnsConfig {
  /** A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed. */
  readonly nameservers?: string[];
  /** A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed. */
  readonly searches?: string[];
  /** option block */
  readonly option?: ReplicationControllerSpecTemplateSpecDnsConfigOption[];
}

function replicationControllerSpecTemplateSpecDnsConfigToTerraform(struct?: ReplicationControllerSpecTemplateSpecDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    searches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searches),
    option: cdktf.listMapper(replicationControllerSpecTemplateSpecDnsConfigOptionToTerraform)(struct!.option),
  }
}

export interface ReplicationControllerSpecTemplateSpecHostAliases {
  /** Hostnames for the IP address. */
  readonly hostnames: string[];
  /** IP address of the host file entry. */
  readonly ip: string;
}

function replicationControllerSpecTemplateSpecHostAliasesToTerraform(struct?: ReplicationControllerSpecTemplateSpecHostAliases): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface ReplicationControllerSpecTemplateSpecImagePullSecrets {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
}

function replicationControllerSpecTemplateSpecImagePullSecretsToTerraform(struct?: ReplicationControllerSpecTemplateSpecImagePullSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef {
  /** The key to select. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the ConfigMap or its key must be defined. */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function replicationControllerSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef {
  readonly containerName?: string;
  /** Resource to select */
  readonly resource: string;
}

function replicationControllerSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef {
  /** The key of the secret to select from. Must be a valid secret key. */
  readonly key?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Specify whether the Secret or its key must be defined. */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerEnvValueFrom {
  /** config_map_key_ref block */
  readonly configMapKeyRef?: ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRef[];
  /** field_ref block */
  readonly fieldRef?: ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromResourceFieldRef[];
  /** secret_key_ref block */
  readonly secretKeyRef?: ReplicationControllerSpecTemplateSpecInitContainerEnvValueFromSecretKeyRef[];
}

function replicationControllerSpecTemplateSpecInitContainerEnvValueFromToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerEnvValueFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map_key_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerEnvValueFromConfigMapKeyRefToTerraform)(struct!.configMapKeyRef),
    field_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerEnvValueFromFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerEnvValueFromResourceFieldRefToTerraform)(struct!.resourceFieldRef),
    secret_key_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerEnvValueFromSecretKeyRefToTerraform)(struct!.secretKeyRef),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerEnv {
  /** Name of the environment variable. Must be a C_IDENTIFIER */
  readonly name: string;
  /** Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". */
  readonly value?: string;
  /** value_from block */
  readonly valueFrom?: ReplicationControllerSpecTemplateSpecInitContainerEnvValueFrom[];
}

function replicationControllerSpecTemplateSpecInitContainerEnvToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerEnv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerEnvValueFromToTerraform)(struct!.valueFrom),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerEnvFromConfigMapRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name: string;
  /** Specify whether the ConfigMap must be defined */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerEnvFromConfigMapRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerEnvFromSecretRef {
  /** Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
  readonly name: string;
  /** Specify whether the Secret must be defined */
  readonly optional?: boolean;
}

function replicationControllerSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerEnvFromSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerEnvFrom {
  /** An optional identifer to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
  readonly prefix?: string;
  /** config_map_ref block */
  readonly configMapRef?: ReplicationControllerSpecTemplateSpecInitContainerEnvFromConfigMapRef[];
  /** secret_ref block */
  readonly secretRef?: ReplicationControllerSpecTemplateSpecInitContainerEnvFromSecretRef[];
}

function replicationControllerSpecTemplateSpecInitContainerEnvFromToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerEnvFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    config_map_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerEnvFromConfigMapRefToTerraform)(struct!.configMapRef),
    secret_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerEnvFromSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLifecyclePostStartHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStart {
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStartTcpSocket[];
}

function replicationControllerSpecTemplateSpecInitContainerLifecyclePostStartToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLifecyclePostStartExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLifecyclePostStartHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLifecyclePostStartTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLifecyclePreStopHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStop {
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStopTcpSocket[];
}

function replicationControllerSpecTemplateSpecInitContainerLifecyclePreStopToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStop): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exec: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLifecyclePreStopExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLifecyclePreStopHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLifecyclePreStopTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLifecycle {
  /** post_start block */
  readonly postStart?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePostStart[];
  /** pre_stop block */
  readonly preStop?: ReplicationControllerSpecTemplateSpecInitContainerLifecyclePreStop[];
}

function replicationControllerSpecTemplateSpecInitContainerLifecycleToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    post_start: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLifecyclePostStartToTerraform)(struct!.postStart),
    pre_stop: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLifecyclePreStopToTerraform)(struct!.preStop),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateSpecInitContainerLivenessProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLivenessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerLivenessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateSpecInitContainerLivenessProbeTcpSocket[];
}

function replicationControllerSpecTemplateSpecInitContainerLivenessProbeToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerLivenessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLivenessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLivenessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLivenessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerPort {
  /** Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536. */
  readonly containerPort: number;
  /** What host IP to bind the external port to. */
  readonly hostIp?: string;
  /** Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. */
  readonly hostPort?: number;
  /** If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services */
  readonly name?: string;
  /** Protocol for port. Must be UDP or TCP. Defaults to "TCP". */
  readonly protocol?: string;
}

function replicationControllerSpecTemplateSpecInitContainerPortToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateSpecInitContainerReadinessProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerReadinessProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerReadinessProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateSpecInitContainerReadinessProbeTcpSocket[];
}

function replicationControllerSpecTemplateSpecInitContainerReadinessProbeToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerReadinessProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerReadinessProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerReadinessProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerReadinessProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerResourcesLimits {
  readonly cpu?: string;
  readonly memory?: string;
}

function replicationControllerSpecTemplateSpecInitContainerResourcesLimitsToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerResourcesLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerResourcesRequests {
  readonly cpu?: string;
  readonly memory?: string;
}

function replicationControllerSpecTemplateSpecInitContainerResourcesRequestsToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerResourcesRequests): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerResources {
  /** limits block */
  readonly limits?: ReplicationControllerSpecTemplateSpecInitContainerResourcesLimits[];
  /** requests block */
  readonly requests?: ReplicationControllerSpecTemplateSpecInitContainerResourcesRequests[];
}

function replicationControllerSpecTemplateSpecInitContainerResourcesToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerResourcesLimitsToTerraform)(struct!.limits),
    requests: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerResourcesRequestsToTerraform)(struct!.requests),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerSecurityContextCapabilities {
  /** Added capabilities */
  readonly add?: string[];
  /** Removed capabilities */
  readonly drop?: string[];
}

function replicationControllerSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerSecurityContextCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function replicationControllerSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerSecurityContext {
  /** AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN */
  readonly allowPrivilegeEscalation?: boolean;
  /** Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. */
  readonly privileged?: boolean;
  /** Whether this container has a read-only root filesystem. Default is false. */
  readonly readOnlyRootFilesystem?: boolean;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsGroup?: number;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsUser?: number;
  /** capabilities block */
  readonly capabilities?: ReplicationControllerSpecTemplateSpecInitContainerSecurityContextCapabilities[];
  /** se_linux_options block */
  readonly seLinuxOptions?: ReplicationControllerSpecTemplateSpecInitContainerSecurityContextSeLinuxOptions[];
}

function replicationControllerSpecTemplateSpecInitContainerSecurityContextToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    capabilities: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerSecurityContextCapabilitiesToTerraform)(struct!.capabilities),
    se_linux_options: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerStartupProbeExec {
  /** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
  readonly command?: string[];
}

function replicationControllerSpecTemplateSpecInitContainerStartupProbeExecToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerStartupProbeExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader {
  /** The header field name */
  readonly name?: string;
  /** The header field value */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerStartupProbeHttpGet {
  /** Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. */
  readonly host?: string;
  /** Path to access on the HTTP server. */
  readonly path?: string;
  /** Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port?: string;
  /** Scheme to use for connecting to the host. */
  readonly scheme?: string;
  /** http_header block */
  readonly httpHeader?: ReplicationControllerSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeader[];
}

function replicationControllerSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_header: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerStartupProbeHttpGetHttpHeaderToTerraform)(struct!.httpHeader),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerStartupProbeTcpSocket {
  /** Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. */
  readonly port: string;
}

function replicationControllerSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerStartupProbe {
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded. */
  readonly failureThreshold?: number;
  /** Number of seconds after the container has started before liveness probes are initiated. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly initialDelaySeconds?: number;
  /** How often (in seconds) to perform the probe */
  readonly periodSeconds?: number;
  /** Minimum consecutive successes for the probe to be considered successful after having failed. */
  readonly successThreshold?: number;
  /** Number of seconds after which the probe times out. More info: http://kubernetes.io/docs/user-guide/pod-states#container-probes */
  readonly timeoutSeconds?: number;
  /** exec block */
  readonly exec?: ReplicationControllerSpecTemplateSpecInitContainerStartupProbeExec[];
  /** http_get block */
  readonly httpGet?: ReplicationControllerSpecTemplateSpecInitContainerStartupProbeHttpGet[];
  /** tcp_socket block */
  readonly tcpSocket?: ReplicationControllerSpecTemplateSpecInitContainerStartupProbeTcpSocket[];
}

function replicationControllerSpecTemplateSpecInitContainerStartupProbeToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerStartupProbe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerStartupProbeExecToTerraform)(struct!.exec),
    http_get: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerStartupProbeHttpGetToTerraform)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerStartupProbeTcpSocketToTerraform)(struct!.tcpSocket),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainerVolumeMount {
  /** Path within the container at which the volume should be mounted. Must not contain ':'. */
  readonly mountPath: string;
  /** Mount propagation mode. mount_propagation determines how mounts are propagated from the host to container and the other way around. Valid values are None (default), HostToContainer and Bidirectional. */
  readonly mountPropagation?: string;
  /** This must match the Name of a Volume. */
  readonly name: string;
  /** Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. */
  readonly readOnly?: boolean;
  /** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
  readonly subPath?: string;
}

function replicationControllerSpecTemplateSpecInitContainerVolumeMountToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainerVolumeMount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
  }
}

export interface ReplicationControllerSpecTemplateSpecInitContainer {
  /** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly args?: string[];
  /** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/containers#containers-and-commands */
  readonly command?: string[];
  /** Docker image name. More info: http://kubernetes.io/docs/user-guide/images */
  readonly image?: string;
  /** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/images#updating-images */
  readonly imagePullPolicy?: string;
  /** Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated. */
  readonly name: string;
  /** Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF.  */
  readonly stdin?: boolean;
  /** Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. */
  readonly stdinOnce?: boolean;
  /** Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Defaults to /dev/termination-log. Cannot be updated. */
  readonly terminationMessagePath?: string;
  /** Optional: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
  readonly terminationMessagePolicy?: string;
  /** Whether this container should allocate a TTY for itself */
  readonly tty?: boolean;
  /** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. */
  readonly workingDir?: string;
  /** env block */
  readonly env?: ReplicationControllerSpecTemplateSpecInitContainerEnv[];
  /** env_from block */
  readonly envFrom?: ReplicationControllerSpecTemplateSpecInitContainerEnvFrom[];
  /** lifecycle block */
  readonly lifecycle?: ReplicationControllerSpecTemplateSpecInitContainerLifecycle[];
  /** liveness_probe block */
  readonly livenessProbe?: ReplicationControllerSpecTemplateSpecInitContainerLivenessProbe[];
  /** port block */
  readonly port?: ReplicationControllerSpecTemplateSpecInitContainerPort[];
  /** readiness_probe block */
  readonly readinessProbe?: ReplicationControllerSpecTemplateSpecInitContainerReadinessProbe[];
  /** resources block */
  readonly resources?: ReplicationControllerSpecTemplateSpecInitContainerResources[];
  /** security_context block */
  readonly securityContext?: ReplicationControllerSpecTemplateSpecInitContainerSecurityContext[];
  /** startup_probe block */
  readonly startupProbe?: ReplicationControllerSpecTemplateSpecInitContainerStartupProbe[];
  /** volume_mount block */
  readonly volumeMount?: ReplicationControllerSpecTemplateSpecInitContainerVolumeMount[];
}

function replicationControllerSpecTemplateSpecInitContainerToTerraform(struct?: ReplicationControllerSpecTemplateSpecInitContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    env: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerEnvToTerraform)(struct!.env),
    env_from: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerEnvFromToTerraform)(struct!.envFrom),
    lifecycle: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLifecycleToTerraform)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerLivenessProbeToTerraform)(struct!.livenessProbe),
    port: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerPortToTerraform)(struct!.port),
    readiness_probe: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerReadinessProbeToTerraform)(struct!.readinessProbe),
    resources: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerResourcesToTerraform)(struct!.resources),
    security_context: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerSecurityContextToTerraform)(struct!.securityContext),
    startup_probe: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerStartupProbeToTerraform)(struct!.startupProbe),
    volume_mount: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerVolumeMountToTerraform)(struct!.volumeMount),
  }
}

export interface ReplicationControllerSpecTemplateSpecReadinessGate {
  /** refers to a condition in the pod's condition list with matching type. */
  readonly conditionType: string;
}

function replicationControllerSpecTemplateSpecReadinessGateToTerraform(struct?: ReplicationControllerSpecTemplateSpecReadinessGate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}

export interface ReplicationControllerSpecTemplateSpecSecurityContextSeLinuxOptions {
  /** Level is SELinux level label that applies to the container. */
  readonly level?: string;
  /** Role is a SELinux role label that applies to the container. */
  readonly role?: string;
  /** Type is a SELinux type label that applies to the container. */
  readonly type?: string;
  /** User is a SELinux user label that applies to the container. */
  readonly user?: string;
}

function replicationControllerSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform(struct?: ReplicationControllerSpecTemplateSpecSecurityContextSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface ReplicationControllerSpecTemplateSpecSecurityContextSysctl {
  /** Name of a property to set. */
  readonly name: string;
  /** Value of a property to set. */
  readonly value: string;
}

function replicationControllerSpecTemplateSpecSecurityContextSysctlToTerraform(struct?: ReplicationControllerSpecTemplateSpecSecurityContextSysctl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecSecurityContext {
  /** A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod: 1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw---- If unset, the Kubelet will not modify the ownership and permissions of any volume. */
  readonly fsGroup?: number;
  /** The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly runAsGroup?: number;
  /** Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
  readonly runAsNonRoot?: boolean;
  /** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. */
  readonly runAsUser?: number;
  /** A list of groups applied to the first process run in each container, in addition to the container's primary GID. If unspecified, no groups will be added to any container. */
  readonly supplementalGroups?: number[];
  /** se_linux_options block */
  readonly seLinuxOptions?: ReplicationControllerSpecTemplateSpecSecurityContextSeLinuxOptions[];
  /** sysctl block */
  readonly sysctl?: ReplicationControllerSpecTemplateSpecSecurityContextSysctl[];
}

function replicationControllerSpecTemplateSpecSecurityContextToTerraform(struct?: ReplicationControllerSpecTemplateSpecSecurityContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    supplemental_groups: cdktf.listMapper(cdktf.numberToTerraform)(struct!.supplementalGroups),
    se_linux_options: cdktf.listMapper(replicationControllerSpecTemplateSpecSecurityContextSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
    sysctl: cdktf.listMapper(replicationControllerSpecTemplateSpecSecurityContextSysctlToTerraform)(struct!.sysctl),
  }
}

export interface ReplicationControllerSpecTemplateSpecToleration {
  /** Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
  readonly effect?: string;
  /** Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
  readonly key?: string;
  /** Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
  readonly operator?: string;
  /** TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. */
  readonly tolerationSeconds?: string;
  /** Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
  readonly value?: string;
}

function replicationControllerSpecTemplateSpecTolerationToTerraform(struct?: ReplicationControllerSpecTemplateSpecToleration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.stringToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeAwsElasticBlockStore {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  readonly partition?: number;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly readOnly?: boolean;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly volumeId: string;
}

function replicationControllerSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeAzureDisk {
  /** Host Caching mode: None, Read Only, Read Write. */
  readonly cachingMode: string;
  /** The URI the data disk in the blob storage */
  readonly dataDiskUri: string;
  /** The Name of the data disk in the blob storage */
  readonly diskName: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared */
  readonly kind?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
}

function replicationControllerSpecTemplateSpecVolumeAzureDiskToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeAzureDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    data_disk_uri: cdktf.stringToTerraform(struct!.dataDiskUri),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeAzureFile {
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** The name of secret that contains Azure Storage Account Name and Key */
  readonly secretName: string;
  /** Share Name */
  readonly shareName: string;
}

function replicationControllerSpecTemplateSpecVolumeAzureFileToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeAzureFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeCephFsSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateSpecVolumeCephFsSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeCephFs {
  /** Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly monitors: string[];
  /** Used as the mounted root, rather than the full Ceph tree, default is / */
  readonly path?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly secretFile?: string;
  /** User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly user?: string;
  /** secret_ref block */
  readonly secretRef?: ReplicationControllerSpecTemplateSpecVolumeCephFsSecretRef[];
}

function replicationControllerSpecTemplateSpecVolumeCephFsToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeCephFs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    user: cdktf.stringToTerraform(struct!.user),
    secret_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeCephFsSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeCinder {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly fsType?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly readOnly?: boolean;
  /** Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly volumeId: string;
}

function replicationControllerSpecTemplateSpecVolumeCinderToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeCinder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeConfigMapItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function replicationControllerSpecTemplateSpecVolumeConfigMapItemsToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeConfigMap {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Optional: Specify whether the ConfigMap or its keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateSpecVolumeConfigMapItems[];
}

function replicationControllerSpecTemplateSpecVolumeConfigMapToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeCsiControllerExpandSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateSpecVolumeCsiControllerExpandSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeCsiControllerExpandSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeCsiControllerPublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateSpecVolumeCsiControllerPublishSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeCsiControllerPublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeCsiNodePublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeCsiNodeStageSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateSpecVolumeCsiNodeStageSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeCsiNodeStageSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeCsi {
  /** the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi */
  readonly readOnly?: boolean;
  /** Attributes of the volume to publish. */
  readonly volumeAttributes?: { [key: string]: string };
  /** A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly volumeHandle: string;
  /** controller_expand_secret_ref block */
  readonly controllerExpandSecretRef?: ReplicationControllerSpecTemplateSpecVolumeCsiControllerExpandSecretRef[];
  /** controller_publish_secret_ref block */
  readonly controllerPublishSecretRef?: ReplicationControllerSpecTemplateSpecVolumeCsiControllerPublishSecretRef[];
  /** node_publish_secret_ref block */
  readonly nodePublishSecretRef?: ReplicationControllerSpecTemplateSpecVolumeCsiNodePublishSecretRef[];
  /** node_stage_secret_ref block */
  readonly nodeStageSecretRef?: ReplicationControllerSpecTemplateSpecVolumeCsiNodeStageSecretRef[];
}

function replicationControllerSpecTemplateSpecVolumeCsiToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeCsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.volumeAttributes),
    volume_handle: cdktf.stringToTerraform(struct!.volumeHandle),
    controller_expand_secret_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeCsiControllerExpandSecretRefToTerraform)(struct!.controllerExpandSecretRef),
    controller_publish_secret_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeCsiControllerPublishSecretRefToTerraform)(struct!.controllerPublishSecretRef),
    node_publish_secret_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeCsiNodePublishSecretRefToTerraform)(struct!.nodePublishSecretRef),
    node_stage_secret_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeCsiNodeStageSecretRefToTerraform)(struct!.nodeStageSecretRef),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeDownwardApiItemsFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function replicationControllerSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef {
  readonly containerName: string;
  readonly quantity?: string;
  /** Resource to select */
  readonly resource: string;
}

function replicationControllerSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    quantity: cdktf.stringToTerraform(struct!.quantity),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeDownwardApiItems {
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  readonly path: string;
  /** field_ref block */
  readonly fieldRef: ReplicationControllerSpecTemplateSpecVolumeDownwardApiItemsFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: ReplicationControllerSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRef[];
}

function replicationControllerSpecTemplateSpecVolumeDownwardApiItemsToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeDownwardApiItemsFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeDownwardApiItemsResourceFieldRefToTerraform)(struct!.resourceFieldRef),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeDownwardApi {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateSpecVolumeDownwardApiItems[];
}

function replicationControllerSpecTemplateSpecVolumeDownwardApiToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeDownwardApiItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeEmptyDir {
  /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir */
  readonly medium?: string;
  /** Total amount of local storage required for this EmptyDir volume. */
  readonly sizeLimit?: string;
}

function replicationControllerSpecTemplateSpecVolumeEmptyDirToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeFc {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** FC target lun number */
  readonly lun: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** FC target worldwide names (WWNs) */
  readonly targetWwNs: string[];
}

function replicationControllerSpecTemplateSpecVolumeFcToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeFc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetWwNs),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeFlexVolumeSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeFlexVolume {
  /** Driver is the name of the driver to use for this volume. */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  readonly fsType?: string;
  /** Extra command options if any. */
  readonly options?: { [key: string]: string };
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** secret_ref block */
  readonly secretRef?: ReplicationControllerSpecTemplateSpecVolumeFlexVolumeSecretRef[];
}

function replicationControllerSpecTemplateSpecVolumeFlexVolumeToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeFlexVolumeSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeFlocker {
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  readonly datasetName?: string;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
  readonly datasetUuid?: string;
}

function replicationControllerSpecTemplateSpecVolumeFlockerToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeFlocker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeGcePersistentDisk {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly partition?: number;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly pdName: string;
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly readOnly?: boolean;
}

function replicationControllerSpecTemplateSpecVolumeGcePersistentDiskToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeGcePersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeGitRepo {
  /** Target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  readonly directory?: string;
  /** Repository URL */
  readonly repository?: string;
  /** Commit hash for the specified revision. */
  readonly revision?: string;
}

function replicationControllerSpecTemplateSpecVolumeGitRepoToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeGitRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeGlusterfs {
  /** The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly endpointsName: string;
  /** The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly path: string;
  /** Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly readOnly?: boolean;
}

function replicationControllerSpecTemplateSpecVolumeGlusterfsToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeGlusterfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoints_name: cdktf.stringToTerraform(struct!.endpointsName),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeHostPath {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath */
  readonly path?: string;
  /** Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice */
  readonly type?: string;
}

function replicationControllerSpecTemplateSpecVolumeHostPathToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeHostPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeIscsi {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi */
  readonly fsType?: string;
  /** Target iSCSI Qualified Name. */
  readonly iqn: string;
  /** iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  readonly iscsiInterface?: string;
  /** iSCSI target lun number. */
  readonly lun?: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. */
  readonly readOnly?: boolean;
  /** iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  readonly targetPortal: string;
}

function replicationControllerSpecTemplateSpecVolumeIscsiToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeIscsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeLocal {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local */
  readonly path?: string;
}

function replicationControllerSpecTemplateSpecVolumeLocalToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeLocal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeNfs {
  /** Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly path: string;
  /** Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly readOnly?: boolean;
  /** Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly server: string;
}

function replicationControllerSpecTemplateSpecVolumeNfsToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeNfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumePersistentVolumeClaim {
  /** ClaimName is the name of a PersistentVolumeClaim in the same  */
  readonly claimName?: string;
  /** Will force the ReadOnly setting in VolumeMounts. */
  readonly readOnly?: boolean;
}

function replicationControllerSpecTemplateSpecVolumePersistentVolumeClaimToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumePhotonPersistentDisk {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** ID that identifies Photon Controller persistent disk */
  readonly pdId: string;
}

function replicationControllerSpecTemplateSpecVolumePhotonPersistentDiskToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesConfigMapItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function replicationControllerSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesConfigMap {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Optional: Specify whether the ConfigMap or it's keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesConfigMapItems[];
}

function replicationControllerSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeProjectedSourcesConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to 'v1'. */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function replicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef {
  readonly containerName: string;
  readonly quantity?: string;
  /** Resource to select */
  readonly resource: string;
}

function replicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    quantity: cdktf.stringToTerraform(struct!.quantity),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems {
  /** Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  readonly path: string;
  /** field_ref block */
  readonly fieldRef?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef[];
}

function replicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform)(struct!.resourceFieldRef),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApi {
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItems[];
}

function replicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesSecretItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function replicationControllerSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesSecret {
  /** Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets */
  readonly name?: string;
  /** Optional: Specify whether the Secret or it's keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesSecretItems[];
}

function replicationControllerSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeProjectedSourcesSecretItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken {
  /** Audience is the intended audience of the token */
  readonly audience?: string;
  /** ExpirationSeconds is the expected duration of validity of the service account token. It defaults to 1 hour and must be at least 10 minutes (600 seconds). */
  readonly expirationSeconds?: number;
  /** Path specifies a relative path to the mount point of the projected volume. */
  readonly path: string;
}

function replicationControllerSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeProjectedSources {
  /** config_map block */
  readonly configMap?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesConfigMap[];
  /** downward_api block */
  readonly downwardApi?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApi[];
  /** secret block */
  readonly secret?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesSecret[];
  /** service_account_token block */
  readonly serviceAccountToken?: ReplicationControllerSpecTemplateSpecVolumeProjectedSourcesServiceAccountToken[];
}

function replicationControllerSpecTemplateSpecVolumeProjectedSourcesToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeProjectedSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeProjectedSourcesConfigMapToTerraform)(struct!.configMap),
    downward_api: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeProjectedSourcesDownwardApiToTerraform)(struct!.downwardApi),
    secret: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeProjectedSourcesSecretToTerraform)(struct!.secret),
    service_account_token: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeProjectedSourcesServiceAccountTokenToTerraform)(struct!.serviceAccountToken),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeProjected {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** sources block */
  readonly sources: ReplicationControllerSpecTemplateSpecVolumeProjectedSources[];
}

function replicationControllerSpecTemplateSpecVolumeProjectedToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeProjected): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeProjectedSourcesToTerraform)(struct!.sources),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeQuobyte {
  /** Group to map volume access to Default is no group */
  readonly group?: string;
  /** Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
  readonly readOnly?: boolean;
  /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
  readonly registry: string;
  /** User to map volume access to Defaults to serivceaccount user */
  readonly user?: string;
  /** Volume is a string that references an already created Quobyte volume by name. */
  readonly volume: string;
}

function replicationControllerSpecTemplateSpecVolumeQuobyteToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeQuobyte): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeRbdSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateSpecVolumeRbdSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeRbd {
  /** A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly cephMonitors: string[];
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd */
  readonly fsType?: string;
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly keyring?: string;
  /** The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly radosUser?: string;
  /** The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly rbdImage: string;
  /** The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. */
  readonly rbdPool?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** secret_ref block */
  readonly secretRef?: ReplicationControllerSpecTemplateSpecVolumeRbdSecretRef[];
}

function replicationControllerSpecTemplateSpecVolumeRbdToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeRbd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ceph_monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cephMonitors),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    rados_user: cdktf.stringToTerraform(struct!.radosUser),
    rbd_image: cdktf.stringToTerraform(struct!.rbdImage),
    rbd_pool: cdktf.stringToTerraform(struct!.rbdPool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeRbdSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeSecretItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function replicationControllerSpecTemplateSpecVolumeSecretItemsToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeSecret {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** Optional: Specify whether the Secret or its keys must be defined. */
  readonly optional?: boolean;
  /** Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets */
  readonly secretName?: string;
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateSpecVolumeSecretItems[];
}

function replicationControllerSpecTemplateSpecVolumeSecretToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    items: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeSecretItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolumeVsphereVolume {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Path that identifies vSphere volume vmdk */
  readonly volumePath: string;
}

function replicationControllerSpecTemplateSpecVolumeVsphereVolumeToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}

export interface ReplicationControllerSpecTemplateSpecVolume {
  /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** aws_elastic_block_store block */
  readonly awsElasticBlockStore?: ReplicationControllerSpecTemplateSpecVolumeAwsElasticBlockStore[];
  /** azure_disk block */
  readonly azureDisk?: ReplicationControllerSpecTemplateSpecVolumeAzureDisk[];
  /** azure_file block */
  readonly azureFile?: ReplicationControllerSpecTemplateSpecVolumeAzureFile[];
  /** ceph_fs block */
  readonly cephFs?: ReplicationControllerSpecTemplateSpecVolumeCephFs[];
  /** cinder block */
  readonly cinder?: ReplicationControllerSpecTemplateSpecVolumeCinder[];
  /** config_map block */
  readonly configMap?: ReplicationControllerSpecTemplateSpecVolumeConfigMap[];
  /** csi block */
  readonly csi?: ReplicationControllerSpecTemplateSpecVolumeCsi[];
  /** downward_api block */
  readonly downwardApi?: ReplicationControllerSpecTemplateSpecVolumeDownwardApi[];
  /** empty_dir block */
  readonly emptyDir?: ReplicationControllerSpecTemplateSpecVolumeEmptyDir[];
  /** fc block */
  readonly fc?: ReplicationControllerSpecTemplateSpecVolumeFc[];
  /** flex_volume block */
  readonly flexVolume?: ReplicationControllerSpecTemplateSpecVolumeFlexVolume[];
  /** flocker block */
  readonly flocker?: ReplicationControllerSpecTemplateSpecVolumeFlocker[];
  /** gce_persistent_disk block */
  readonly gcePersistentDisk?: ReplicationControllerSpecTemplateSpecVolumeGcePersistentDisk[];
  /** git_repo block */
  readonly gitRepo?: ReplicationControllerSpecTemplateSpecVolumeGitRepo[];
  /** glusterfs block */
  readonly glusterfs?: ReplicationControllerSpecTemplateSpecVolumeGlusterfs[];
  /** host_path block */
  readonly hostPath?: ReplicationControllerSpecTemplateSpecVolumeHostPath[];
  /** iscsi block */
  readonly iscsi?: ReplicationControllerSpecTemplateSpecVolumeIscsi[];
  /** local block */
  readonly local?: ReplicationControllerSpecTemplateSpecVolumeLocal[];
  /** nfs block */
  readonly nfs?: ReplicationControllerSpecTemplateSpecVolumeNfs[];
  /** persistent_volume_claim block */
  readonly persistentVolumeClaim?: ReplicationControllerSpecTemplateSpecVolumePersistentVolumeClaim[];
  /** photon_persistent_disk block */
  readonly photonPersistentDisk?: ReplicationControllerSpecTemplateSpecVolumePhotonPersistentDisk[];
  /** projected block */
  readonly projected?: ReplicationControllerSpecTemplateSpecVolumeProjected[];
  /** quobyte block */
  readonly quobyte?: ReplicationControllerSpecTemplateSpecVolumeQuobyte[];
  /** rbd block */
  readonly rbd?: ReplicationControllerSpecTemplateSpecVolumeRbd[];
  /** secret block */
  readonly secret?: ReplicationControllerSpecTemplateSpecVolumeSecret[];
  /** vsphere_volume block */
  readonly vsphereVolume?: ReplicationControllerSpecTemplateSpecVolumeVsphereVolume[];
}

function replicationControllerSpecTemplateSpecVolumeToTerraform(struct?: ReplicationControllerSpecTemplateSpecVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    aws_elastic_block_store: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeAwsElasticBlockStoreToTerraform)(struct!.awsElasticBlockStore),
    azure_disk: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeAzureDiskToTerraform)(struct!.azureDisk),
    azure_file: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeAzureFileToTerraform)(struct!.azureFile),
    ceph_fs: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeCephFsToTerraform)(struct!.cephFs),
    cinder: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeCinderToTerraform)(struct!.cinder),
    config_map: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeConfigMapToTerraform)(struct!.configMap),
    csi: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeCsiToTerraform)(struct!.csi),
    downward_api: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeDownwardApiToTerraform)(struct!.downwardApi),
    empty_dir: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeEmptyDirToTerraform)(struct!.emptyDir),
    fc: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeFcToTerraform)(struct!.fc),
    flex_volume: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeFlexVolumeToTerraform)(struct!.flexVolume),
    flocker: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeFlockerToTerraform)(struct!.flocker),
    gce_persistent_disk: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeGcePersistentDiskToTerraform)(struct!.gcePersistentDisk),
    git_repo: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeGitRepoToTerraform)(struct!.gitRepo),
    glusterfs: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeGlusterfsToTerraform)(struct!.glusterfs),
    host_path: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeHostPathToTerraform)(struct!.hostPath),
    iscsi: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeIscsiToTerraform)(struct!.iscsi),
    local: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeLocalToTerraform)(struct!.local),
    nfs: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeNfsToTerraform)(struct!.nfs),
    persistent_volume_claim: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumePersistentVolumeClaimToTerraform)(struct!.persistentVolumeClaim),
    photon_persistent_disk: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumePhotonPersistentDiskToTerraform)(struct!.photonPersistentDisk),
    projected: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeProjectedToTerraform)(struct!.projected),
    quobyte: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeQuobyteToTerraform)(struct!.quobyte),
    rbd: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeRbdToTerraform)(struct!.rbd),
    secret: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeSecretToTerraform)(struct!.secret),
    vsphere_volume: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeVsphereVolumeToTerraform)(struct!.vsphereVolume),
  }
}

export interface ReplicationControllerSpecTemplateSpec {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  readonly activeDeadlineSeconds?: number;
  /** AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
  readonly automountServiceAccountToken?: boolean;
  /** Set DNS policy for containers within the pod. Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. Optional: Defaults to 'ClusterFirst', see [Kubernetes reference](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy). */
  readonly dnsPolicy?: string;
  /** Enables generating environment variables for service discovery. Optional: Defaults to true. */
  readonly enableServiceLinks?: boolean;
  /** Use the host's ipc namespace. Optional: Defaults to false. */
  readonly hostIpc?: boolean;
  /** Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. */
  readonly hostNetwork?: boolean;
  /** Use the host's pid namespace. */
  readonly hostPid?: boolean;
  /** Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
  readonly hostname?: string;
  /** NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. */
  readonly nodeName?: string;
  /** NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: http://kubernetes.io/docs/user-guide/node-selection. */
  readonly nodeSelector?: { [key: string]: string };
  /** If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
  readonly priorityClassName?: string;
  /** Restart policy for all containers within the pod. One of Always, OnFailure, Never. More info: http://kubernetes.io/docs/user-guide/pod-states#restartpolicy. */
  readonly restartPolicy?: string;
  /** ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: http://releases.k8s.io/HEAD/docs/design/service_accounts.md. */
  readonly serviceAccountName?: string;
  /** Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Defaults to false. */
  readonly shareProcessNamespace?: boolean;
  /** If specified, the fully qualified Pod hostname will be "...svc.". If not specified, the pod will not have a domainname at all.. */
  readonly subdomain?: string;
  /** Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. */
  readonly terminationGracePeriodSeconds?: number;
  /** affinity block */
  readonly affinity?: ReplicationControllerSpecTemplateSpecAffinity[];
  /** container block */
  readonly container?: ReplicationControllerSpecTemplateSpecContainer[];
  /** dns_config block */
  readonly dnsConfig?: ReplicationControllerSpecTemplateSpecDnsConfig[];
  /** host_aliases block */
  readonly hostAliases?: ReplicationControllerSpecTemplateSpecHostAliases[];
  /** image_pull_secrets block */
  readonly imagePullSecrets?: ReplicationControllerSpecTemplateSpecImagePullSecrets[];
  /** init_container block */
  readonly initContainer?: ReplicationControllerSpecTemplateSpecInitContainer[];
  /** readiness_gate block */
  readonly readinessGate?: ReplicationControllerSpecTemplateSpecReadinessGate[];
  /** security_context block */
  readonly securityContext?: ReplicationControllerSpecTemplateSpecSecurityContext[];
  /** toleration block */
  readonly toleration?: ReplicationControllerSpecTemplateSpecToleration[];
  /** volume block */
  readonly volume?: ReplicationControllerSpecTemplateSpecVolume[];
}

function replicationControllerSpecTemplateSpecToTerraform(struct?: ReplicationControllerSpecTemplateSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    node_selector: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.nodeSelector),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    affinity: cdktf.listMapper(replicationControllerSpecTemplateSpecAffinityToTerraform)(struct!.affinity),
    container: cdktf.listMapper(replicationControllerSpecTemplateSpecContainerToTerraform)(struct!.container),
    dns_config: cdktf.listMapper(replicationControllerSpecTemplateSpecDnsConfigToTerraform)(struct!.dnsConfig),
    host_aliases: cdktf.listMapper(replicationControllerSpecTemplateSpecHostAliasesToTerraform)(struct!.hostAliases),
    image_pull_secrets: cdktf.listMapper(replicationControllerSpecTemplateSpecImagePullSecretsToTerraform)(struct!.imagePullSecrets),
    init_container: cdktf.listMapper(replicationControllerSpecTemplateSpecInitContainerToTerraform)(struct!.initContainer),
    readiness_gate: cdktf.listMapper(replicationControllerSpecTemplateSpecReadinessGateToTerraform)(struct!.readinessGate),
    security_context: cdktf.listMapper(replicationControllerSpecTemplateSpecSecurityContextToTerraform)(struct!.securityContext),
    toleration: cdktf.listMapper(replicationControllerSpecTemplateSpecTolerationToTerraform)(struct!.toleration),
    volume: cdktf.listMapper(replicationControllerSpecTemplateSpecVolumeToTerraform)(struct!.volume),
  }
}

export interface ReplicationControllerSpecTemplateToleration {
  /** Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute. */
  readonly effect?: string;
  /** Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys. */
  readonly key?: string;
  /** Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category. */
  readonly operator?: string;
  /** TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system. */
  readonly tolerationSeconds?: string;
  /** Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string. */
  readonly value?: string;
}

function replicationControllerSpecTemplateTolerationToTerraform(struct?: ReplicationControllerSpecTemplateToleration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.stringToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ReplicationControllerSpecTemplateVolumeAwsElasticBlockStore {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). */
  readonly partition?: number;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly readOnly?: boolean;
  /** Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore */
  readonly volumeId: string;
}

function replicationControllerSpecTemplateVolumeAwsElasticBlockStoreToTerraform(struct?: ReplicationControllerSpecTemplateVolumeAwsElasticBlockStore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface ReplicationControllerSpecTemplateVolumeAzureDisk {
  /** Host Caching mode: None, Read Only, Read Write. */
  readonly cachingMode: string;
  /** The URI the data disk in the blob storage */
  readonly dataDiskUri: string;
  /** The Name of the data disk in the blob storage */
  readonly diskName: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared */
  readonly kind?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
}

function replicationControllerSpecTemplateVolumeAzureDiskToTerraform(struct?: ReplicationControllerSpecTemplateVolumeAzureDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    data_disk_uri: cdktf.stringToTerraform(struct!.dataDiskUri),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface ReplicationControllerSpecTemplateVolumeAzureFile {
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** The name of secret that contains Azure Storage Account Name and Key */
  readonly secretName: string;
  /** Share Name */
  readonly shareName: string;
}

function replicationControllerSpecTemplateVolumeAzureFileToTerraform(struct?: ReplicationControllerSpecTemplateVolumeAzureFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}

export interface ReplicationControllerSpecTemplateVolumeCephFsSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateVolumeCephFsSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateVolumeCephFsSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateVolumeCephFs {
  /** Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly monitors: string[];
  /** Used as the mounted root, rather than the full Ceph tree, default is / */
  readonly path?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly secretFile?: string;
  /** User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it */
  readonly user?: string;
  /** secret_ref block */
  readonly secretRef?: ReplicationControllerSpecTemplateVolumeCephFsSecretRef[];
}

function replicationControllerSpecTemplateVolumeCephFsToTerraform(struct?: ReplicationControllerSpecTemplateVolumeCephFs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    user: cdktf.stringToTerraform(struct!.user),
    secret_ref: cdktf.listMapper(replicationControllerSpecTemplateVolumeCephFsSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface ReplicationControllerSpecTemplateVolumeCinder {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly fsType?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly readOnly?: boolean;
  /** Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md */
  readonly volumeId: string;
}

function replicationControllerSpecTemplateVolumeCinderToTerraform(struct?: ReplicationControllerSpecTemplateVolumeCinder): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}

export interface ReplicationControllerSpecTemplateVolumeConfigMapItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function replicationControllerSpecTemplateVolumeConfigMapItemsToTerraform(struct?: ReplicationControllerSpecTemplateVolumeConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateVolumeConfigMap {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Optional: Specify whether the ConfigMap or its keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateVolumeConfigMapItems[];
}

function replicationControllerSpecTemplateVolumeConfigMapToTerraform(struct?: ReplicationControllerSpecTemplateVolumeConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(replicationControllerSpecTemplateVolumeConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateVolumeCsiControllerExpandSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateVolumeCsiControllerExpandSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateVolumeCsiControllerExpandSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateVolumeCsiControllerPublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateVolumeCsiControllerPublishSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateVolumeCsiControllerPublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateVolumeCsiNodePublishSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateVolumeCsiNodePublishSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateVolumeCsiNodePublishSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateVolumeCsiNodeStageSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateVolumeCsiNodeStageSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateVolumeCsiNodeStageSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateVolumeCsi {
  /** the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi */
  readonly readOnly?: boolean;
  /** Attributes of the volume to publish. */
  readonly volumeAttributes?: { [key: string]: string };
  /** A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi */
  readonly volumeHandle: string;
  /** controller_expand_secret_ref block */
  readonly controllerExpandSecretRef?: ReplicationControllerSpecTemplateVolumeCsiControllerExpandSecretRef[];
  /** controller_publish_secret_ref block */
  readonly controllerPublishSecretRef?: ReplicationControllerSpecTemplateVolumeCsiControllerPublishSecretRef[];
  /** node_publish_secret_ref block */
  readonly nodePublishSecretRef?: ReplicationControllerSpecTemplateVolumeCsiNodePublishSecretRef[];
  /** node_stage_secret_ref block */
  readonly nodeStageSecretRef?: ReplicationControllerSpecTemplateVolumeCsiNodeStageSecretRef[];
}

function replicationControllerSpecTemplateVolumeCsiToTerraform(struct?: ReplicationControllerSpecTemplateVolumeCsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.volumeAttributes),
    volume_handle: cdktf.stringToTerraform(struct!.volumeHandle),
    controller_expand_secret_ref: cdktf.listMapper(replicationControllerSpecTemplateVolumeCsiControllerExpandSecretRefToTerraform)(struct!.controllerExpandSecretRef),
    controller_publish_secret_ref: cdktf.listMapper(replicationControllerSpecTemplateVolumeCsiControllerPublishSecretRefToTerraform)(struct!.controllerPublishSecretRef),
    node_publish_secret_ref: cdktf.listMapper(replicationControllerSpecTemplateVolumeCsiNodePublishSecretRefToTerraform)(struct!.nodePublishSecretRef),
    node_stage_secret_ref: cdktf.listMapper(replicationControllerSpecTemplateVolumeCsiNodeStageSecretRefToTerraform)(struct!.nodeStageSecretRef),
  }
}

export interface ReplicationControllerSpecTemplateVolumeDownwardApiItemsFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to "v1". */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function replicationControllerSpecTemplateVolumeDownwardApiItemsFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateVolumeDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface ReplicationControllerSpecTemplateVolumeDownwardApiItemsResourceFieldRef {
  readonly containerName: string;
  readonly quantity?: string;
  /** Resource to select */
  readonly resource: string;
}

function replicationControllerSpecTemplateVolumeDownwardApiItemsResourceFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateVolumeDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    quantity: cdktf.stringToTerraform(struct!.quantity),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface ReplicationControllerSpecTemplateVolumeDownwardApiItems {
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  readonly path: string;
  /** field_ref block */
  readonly fieldRef: ReplicationControllerSpecTemplateVolumeDownwardApiItemsFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: ReplicationControllerSpecTemplateVolumeDownwardApiItemsResourceFieldRef[];
}

function replicationControllerSpecTemplateVolumeDownwardApiItemsToTerraform(struct?: ReplicationControllerSpecTemplateVolumeDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: cdktf.listMapper(replicationControllerSpecTemplateVolumeDownwardApiItemsFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(replicationControllerSpecTemplateVolumeDownwardApiItemsResourceFieldRefToTerraform)(struct!.resourceFieldRef),
  }
}

export interface ReplicationControllerSpecTemplateVolumeDownwardApi {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateVolumeDownwardApiItems[];
}

function replicationControllerSpecTemplateVolumeDownwardApiToTerraform(struct?: ReplicationControllerSpecTemplateVolumeDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(replicationControllerSpecTemplateVolumeDownwardApiItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateVolumeEmptyDir {
  /** What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir */
  readonly medium?: string;
  /** Total amount of local storage required for this EmptyDir volume. */
  readonly sizeLimit?: string;
}

function replicationControllerSpecTemplateVolumeEmptyDirToTerraform(struct?: ReplicationControllerSpecTemplateVolumeEmptyDir): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}

export interface ReplicationControllerSpecTemplateVolumeFc {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** FC target lun number */
  readonly lun: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** FC target worldwide names (WWNs) */
  readonly targetWwNs: string[];
}

function replicationControllerSpecTemplateVolumeFcToTerraform(struct?: ReplicationControllerSpecTemplateVolumeFc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetWwNs),
  }
}

export interface ReplicationControllerSpecTemplateVolumeFlexVolumeSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateVolumeFlexVolumeSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateVolumeFlexVolumeSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateVolumeFlexVolume {
  /** Driver is the name of the driver to use for this volume. */
  readonly driver: string;
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script. */
  readonly fsType?: string;
  /** Extra command options if any. */
  readonly options?: { [key: string]: string };
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). */
  readonly readOnly?: boolean;
  /** secret_ref block */
  readonly secretRef?: ReplicationControllerSpecTemplateVolumeFlexVolumeSecretRef[];
}

function replicationControllerSpecTemplateVolumeFlexVolumeToTerraform(struct?: ReplicationControllerSpecTemplateVolumeFlexVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(replicationControllerSpecTemplateVolumeFlexVolumeSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface ReplicationControllerSpecTemplateVolumeFlocker {
  /** Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated */
  readonly datasetName?: string;
  /** UUID of the dataset. This is unique identifier of a Flocker dataset */
  readonly datasetUuid?: string;
}

function replicationControllerSpecTemplateVolumeFlockerToTerraform(struct?: ReplicationControllerSpecTemplateVolumeFlocker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}

export interface ReplicationControllerSpecTemplateVolumeGcePersistentDisk {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly fsType?: string;
  /** The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly partition?: number;
  /** Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly pdName: string;
  /** Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk */
  readonly readOnly?: boolean;
}

function replicationControllerSpecTemplateVolumeGcePersistentDiskToTerraform(struct?: ReplicationControllerSpecTemplateVolumeGcePersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface ReplicationControllerSpecTemplateVolumeGitRepo {
  /** Target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. */
  readonly directory?: string;
  /** Repository URL */
  readonly repository?: string;
  /** Commit hash for the specified revision. */
  readonly revision?: string;
}

function replicationControllerSpecTemplateVolumeGitRepoToTerraform(struct?: ReplicationControllerSpecTemplateVolumeGitRepo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}

export interface ReplicationControllerSpecTemplateVolumeGlusterfs {
  /** The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly endpointsName: string;
  /** The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly path: string;
  /** Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod */
  readonly readOnly?: boolean;
}

function replicationControllerSpecTemplateVolumeGlusterfsToTerraform(struct?: ReplicationControllerSpecTemplateVolumeGlusterfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoints_name: cdktf.stringToTerraform(struct!.endpointsName),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface ReplicationControllerSpecTemplateVolumeHostPath {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath */
  readonly path?: string;
  /** Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice */
  readonly type?: string;
}

function replicationControllerSpecTemplateVolumeHostPathToTerraform(struct?: ReplicationControllerSpecTemplateVolumeHostPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ReplicationControllerSpecTemplateVolumeIscsi {
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi */
  readonly fsType?: string;
  /** Target iSCSI Qualified Name. */
  readonly iqn: string;
  /** iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). */
  readonly iscsiInterface?: string;
  /** iSCSI target lun number. */
  readonly lun?: number;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. */
  readonly readOnly?: boolean;
  /** iSCSI target portal. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). */
  readonly targetPortal: string;
}

function replicationControllerSpecTemplateVolumeIscsiToTerraform(struct?: ReplicationControllerSpecTemplateVolumeIscsi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}

export interface ReplicationControllerSpecTemplateVolumeLocal {
  /** Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local */
  readonly path?: string;
}

function replicationControllerSpecTemplateVolumeLocalToTerraform(struct?: ReplicationControllerSpecTemplateVolumeLocal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateVolumeNfs {
  /** Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly path: string;
  /** Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly readOnly?: boolean;
  /** Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs */
  readonly server: string;
}

function replicationControllerSpecTemplateVolumeNfsToTerraform(struct?: ReplicationControllerSpecTemplateVolumeNfs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}

export interface ReplicationControllerSpecTemplateVolumePersistentVolumeClaim {
  /** ClaimName is the name of a PersistentVolumeClaim in the same  */
  readonly claimName?: string;
  /** Will force the ReadOnly setting in VolumeMounts. */
  readonly readOnly?: boolean;
}

function replicationControllerSpecTemplateVolumePersistentVolumeClaimToTerraform(struct?: ReplicationControllerSpecTemplateVolumePersistentVolumeClaim): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface ReplicationControllerSpecTemplateVolumePhotonPersistentDisk {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** ID that identifies Photon Controller persistent disk */
  readonly pdId: string;
}

function replicationControllerSpecTemplateVolumePhotonPersistentDiskToTerraform(struct?: ReplicationControllerSpecTemplateVolumePhotonPersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}

export interface ReplicationControllerSpecTemplateVolumeProjectedSourcesConfigMapItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function replicationControllerSpecTemplateVolumeProjectedSourcesConfigMapItemsToTerraform(struct?: ReplicationControllerSpecTemplateVolumeProjectedSourcesConfigMapItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateVolumeProjectedSourcesConfigMap {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Optional: Specify whether the ConfigMap or it's keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateVolumeProjectedSourcesConfigMapItems[];
}

function replicationControllerSpecTemplateVolumeProjectedSourcesConfigMapToTerraform(struct?: ReplicationControllerSpecTemplateVolumeProjectedSourcesConfigMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(replicationControllerSpecTemplateVolumeProjectedSourcesConfigMapItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsFieldRef {
  /** Version of the schema the FieldPath is written in terms of, defaults to 'v1'. */
  readonly apiVersion?: string;
  /** Path of the field to select in the specified API version */
  readonly fieldPath?: string;
}

function replicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}

export interface ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsResourceFieldRef {
  readonly containerName: string;
  readonly quantity?: string;
  /** Resource to select */
  readonly resource: string;
}

function replicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsResourceFieldRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    quantity: cdktf.stringToTerraform(struct!.quantity),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItems {
  /** Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..' */
  readonly path: string;
  /** field_ref block */
  readonly fieldRef?: ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsFieldRef[];
  /** resource_field_ref block */
  readonly resourceFieldRef?: ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsResourceFieldRef[];
}

function replicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsToTerraform(struct?: ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    field_ref: cdktf.listMapper(replicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsFieldRefToTerraform)(struct!.fieldRef),
    resource_field_ref: cdktf.listMapper(replicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform)(struct!.resourceFieldRef),
  }
}

export interface ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApi {
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItems[];
}

function replicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiToTerraform(struct?: ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApi): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(replicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateVolumeProjectedSourcesSecretItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function replicationControllerSpecTemplateVolumeProjectedSourcesSecretItemsToTerraform(struct?: ReplicationControllerSpecTemplateVolumeProjectedSourcesSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateVolumeProjectedSourcesSecret {
  /** Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets */
  readonly name?: string;
  /** Optional: Specify whether the Secret or it's keys must be defined. */
  readonly optional?: boolean;
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateVolumeProjectedSourcesSecretItems[];
}

function replicationControllerSpecTemplateVolumeProjectedSourcesSecretToTerraform(struct?: ReplicationControllerSpecTemplateVolumeProjectedSourcesSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    items: cdktf.listMapper(replicationControllerSpecTemplateVolumeProjectedSourcesSecretItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateVolumeProjectedSourcesServiceAccountToken {
  /** Audience is the intended audience of the token */
  readonly audience?: string;
  /** ExpirationSeconds is the expected duration of validity of the service account token. It defaults to 1 hour and must be at least 10 minutes (600 seconds). */
  readonly expirationSeconds?: number;
  /** Path specifies a relative path to the mount point of the projected volume. */
  readonly path: string;
}

function replicationControllerSpecTemplateVolumeProjectedSourcesServiceAccountTokenToTerraform(struct?: ReplicationControllerSpecTemplateVolumeProjectedSourcesServiceAccountToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateVolumeProjectedSources {
  /** config_map block */
  readonly configMap?: ReplicationControllerSpecTemplateVolumeProjectedSourcesConfigMap[];
  /** downward_api block */
  readonly downwardApi?: ReplicationControllerSpecTemplateVolumeProjectedSourcesDownwardApi[];
  /** secret block */
  readonly secret?: ReplicationControllerSpecTemplateVolumeProjectedSourcesSecret[];
  /** service_account_token block */
  readonly serviceAccountToken?: ReplicationControllerSpecTemplateVolumeProjectedSourcesServiceAccountToken[];
}

function replicationControllerSpecTemplateVolumeProjectedSourcesToTerraform(struct?: ReplicationControllerSpecTemplateVolumeProjectedSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_map: cdktf.listMapper(replicationControllerSpecTemplateVolumeProjectedSourcesConfigMapToTerraform)(struct!.configMap),
    downward_api: cdktf.listMapper(replicationControllerSpecTemplateVolumeProjectedSourcesDownwardApiToTerraform)(struct!.downwardApi),
    secret: cdktf.listMapper(replicationControllerSpecTemplateVolumeProjectedSourcesSecretToTerraform)(struct!.secret),
    service_account_token: cdktf.listMapper(replicationControllerSpecTemplateVolumeProjectedSourcesServiceAccountTokenToTerraform)(struct!.serviceAccountToken),
  }
}

export interface ReplicationControllerSpecTemplateVolumeProjected {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** sources block */
  readonly sources: ReplicationControllerSpecTemplateVolumeProjectedSources[];
}

function replicationControllerSpecTemplateVolumeProjectedToTerraform(struct?: ReplicationControllerSpecTemplateVolumeProjected): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(replicationControllerSpecTemplateVolumeProjectedSourcesToTerraform)(struct!.sources),
  }
}

export interface ReplicationControllerSpecTemplateVolumeQuobyte {
  /** Group to map volume access to Default is no group */
  readonly group?: string;
  /** Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. */
  readonly readOnly?: boolean;
  /** Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes */
  readonly registry: string;
  /** User to map volume access to Defaults to serivceaccount user */
  readonly user?: string;
  /** Volume is a string that references an already created Quobyte volume by name. */
  readonly volume: string;
}

function replicationControllerSpecTemplateVolumeQuobyteToTerraform(struct?: ReplicationControllerSpecTemplateVolumeQuobyte): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}

export interface ReplicationControllerSpecTemplateVolumeRbdSecretRef {
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly namespace?: string;
}

function replicationControllerSpecTemplateVolumeRbdSecretRefToTerraform(struct?: ReplicationControllerSpecTemplateVolumeRbdSecretRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ReplicationControllerSpecTemplateVolumeRbd {
  /** A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly cephMonitors: string[];
  /** Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd */
  readonly fsType?: string;
  /** Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly keyring?: string;
  /** The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly radosUser?: string;
  /** The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly rbdImage: string;
  /** The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. */
  readonly rbdPool?: string;
  /** Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it */
  readonly readOnly?: boolean;
  /** secret_ref block */
  readonly secretRef?: ReplicationControllerSpecTemplateVolumeRbdSecretRef[];
}

function replicationControllerSpecTemplateVolumeRbdToTerraform(struct?: ReplicationControllerSpecTemplateVolumeRbd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ceph_monitors: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cephMonitors),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    rados_user: cdktf.stringToTerraform(struct!.radosUser),
    rbd_image: cdktf.stringToTerraform(struct!.rbdImage),
    rbd_pool: cdktf.stringToTerraform(struct!.rbdPool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: cdktf.listMapper(replicationControllerSpecTemplateVolumeRbdSecretRefToTerraform)(struct!.secretRef),
  }
}

export interface ReplicationControllerSpecTemplateVolumeSecretItems {
  /** The key to project. */
  readonly key?: string;
  /** Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly mode?: string;
  /** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
  readonly path?: string;
}

function replicationControllerSpecTemplateVolumeSecretItemsToTerraform(struct?: ReplicationControllerSpecTemplateVolumeSecretItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ReplicationControllerSpecTemplateVolumeSecret {
  /** Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
  readonly defaultMode?: string;
  /** Optional: Specify whether the Secret or its keys must be defined. */
  readonly optional?: boolean;
  /** Name of the secret in the pod's namespace to use. More info: http://kubernetes.io/docs/user-guide/volumes#secrets */
  readonly secretName?: string;
  /** items block */
  readonly items?: ReplicationControllerSpecTemplateVolumeSecretItems[];
}

function replicationControllerSpecTemplateVolumeSecretToTerraform(struct?: ReplicationControllerSpecTemplateVolumeSecret): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_mode: cdktf.stringToTerraform(struct!.defaultMode),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    items: cdktf.listMapper(replicationControllerSpecTemplateVolumeSecretItemsToTerraform)(struct!.items),
  }
}

export interface ReplicationControllerSpecTemplateVolumeVsphereVolume {
  /** Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. */
  readonly fsType?: string;
  /** Path that identifies vSphere volume vmdk */
  readonly volumePath: string;
}

function replicationControllerSpecTemplateVolumeVsphereVolumeToTerraform(struct?: ReplicationControllerSpecTemplateVolumeVsphereVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}

export interface ReplicationControllerSpecTemplateVolume {
  /** Volume's name. Must be a DNS_LABEL and unique within the pod. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** aws_elastic_block_store block */
  readonly awsElasticBlockStore?: ReplicationControllerSpecTemplateVolumeAwsElasticBlockStore[];
  /** azure_disk block */
  readonly azureDisk?: ReplicationControllerSpecTemplateVolumeAzureDisk[];
  /** azure_file block */
  readonly azureFile?: ReplicationControllerSpecTemplateVolumeAzureFile[];
  /** ceph_fs block */
  readonly cephFs?: ReplicationControllerSpecTemplateVolumeCephFs[];
  /** cinder block */
  readonly cinder?: ReplicationControllerSpecTemplateVolumeCinder[];
  /** config_map block */
  readonly configMap?: ReplicationControllerSpecTemplateVolumeConfigMap[];
  /** csi block */
  readonly csi?: ReplicationControllerSpecTemplateVolumeCsi[];
  /** downward_api block */
  readonly downwardApi?: ReplicationControllerSpecTemplateVolumeDownwardApi[];
  /** empty_dir block */
  readonly emptyDir?: ReplicationControllerSpecTemplateVolumeEmptyDir[];
  /** fc block */
  readonly fc?: ReplicationControllerSpecTemplateVolumeFc[];
  /** flex_volume block */
  readonly flexVolume?: ReplicationControllerSpecTemplateVolumeFlexVolume[];
  /** flocker block */
  readonly flocker?: ReplicationControllerSpecTemplateVolumeFlocker[];
  /** gce_persistent_disk block */
  readonly gcePersistentDisk?: ReplicationControllerSpecTemplateVolumeGcePersistentDisk[];
  /** git_repo block */
  readonly gitRepo?: ReplicationControllerSpecTemplateVolumeGitRepo[];
  /** glusterfs block */
  readonly glusterfs?: ReplicationControllerSpecTemplateVolumeGlusterfs[];
  /** host_path block */
  readonly hostPath?: ReplicationControllerSpecTemplateVolumeHostPath[];
  /** iscsi block */
  readonly iscsi?: ReplicationControllerSpecTemplateVolumeIscsi[];
  /** local block */
  readonly local?: ReplicationControllerSpecTemplateVolumeLocal[];
  /** nfs block */
  readonly nfs?: ReplicationControllerSpecTemplateVolumeNfs[];
  /** persistent_volume_claim block */
  readonly persistentVolumeClaim?: ReplicationControllerSpecTemplateVolumePersistentVolumeClaim[];
  /** photon_persistent_disk block */
  readonly photonPersistentDisk?: ReplicationControllerSpecTemplateVolumePhotonPersistentDisk[];
  /** projected block */
  readonly projected?: ReplicationControllerSpecTemplateVolumeProjected[];
  /** quobyte block */
  readonly quobyte?: ReplicationControllerSpecTemplateVolumeQuobyte[];
  /** rbd block */
  readonly rbd?: ReplicationControllerSpecTemplateVolumeRbd[];
  /** secret block */
  readonly secret?: ReplicationControllerSpecTemplateVolumeSecret[];
  /** vsphere_volume block */
  readonly vsphereVolume?: ReplicationControllerSpecTemplateVolumeVsphereVolume[];
}

function replicationControllerSpecTemplateVolumeToTerraform(struct?: ReplicationControllerSpecTemplateVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    aws_elastic_block_store: cdktf.listMapper(replicationControllerSpecTemplateVolumeAwsElasticBlockStoreToTerraform)(struct!.awsElasticBlockStore),
    azure_disk: cdktf.listMapper(replicationControllerSpecTemplateVolumeAzureDiskToTerraform)(struct!.azureDisk),
    azure_file: cdktf.listMapper(replicationControllerSpecTemplateVolumeAzureFileToTerraform)(struct!.azureFile),
    ceph_fs: cdktf.listMapper(replicationControllerSpecTemplateVolumeCephFsToTerraform)(struct!.cephFs),
    cinder: cdktf.listMapper(replicationControllerSpecTemplateVolumeCinderToTerraform)(struct!.cinder),
    config_map: cdktf.listMapper(replicationControllerSpecTemplateVolumeConfigMapToTerraform)(struct!.configMap),
    csi: cdktf.listMapper(replicationControllerSpecTemplateVolumeCsiToTerraform)(struct!.csi),
    downward_api: cdktf.listMapper(replicationControllerSpecTemplateVolumeDownwardApiToTerraform)(struct!.downwardApi),
    empty_dir: cdktf.listMapper(replicationControllerSpecTemplateVolumeEmptyDirToTerraform)(struct!.emptyDir),
    fc: cdktf.listMapper(replicationControllerSpecTemplateVolumeFcToTerraform)(struct!.fc),
    flex_volume: cdktf.listMapper(replicationControllerSpecTemplateVolumeFlexVolumeToTerraform)(struct!.flexVolume),
    flocker: cdktf.listMapper(replicationControllerSpecTemplateVolumeFlockerToTerraform)(struct!.flocker),
    gce_persistent_disk: cdktf.listMapper(replicationControllerSpecTemplateVolumeGcePersistentDiskToTerraform)(struct!.gcePersistentDisk),
    git_repo: cdktf.listMapper(replicationControllerSpecTemplateVolumeGitRepoToTerraform)(struct!.gitRepo),
    glusterfs: cdktf.listMapper(replicationControllerSpecTemplateVolumeGlusterfsToTerraform)(struct!.glusterfs),
    host_path: cdktf.listMapper(replicationControllerSpecTemplateVolumeHostPathToTerraform)(struct!.hostPath),
    iscsi: cdktf.listMapper(replicationControllerSpecTemplateVolumeIscsiToTerraform)(struct!.iscsi),
    local: cdktf.listMapper(replicationControllerSpecTemplateVolumeLocalToTerraform)(struct!.local),
    nfs: cdktf.listMapper(replicationControllerSpecTemplateVolumeNfsToTerraform)(struct!.nfs),
    persistent_volume_claim: cdktf.listMapper(replicationControllerSpecTemplateVolumePersistentVolumeClaimToTerraform)(struct!.persistentVolumeClaim),
    photon_persistent_disk: cdktf.listMapper(replicationControllerSpecTemplateVolumePhotonPersistentDiskToTerraform)(struct!.photonPersistentDisk),
    projected: cdktf.listMapper(replicationControllerSpecTemplateVolumeProjectedToTerraform)(struct!.projected),
    quobyte: cdktf.listMapper(replicationControllerSpecTemplateVolumeQuobyteToTerraform)(struct!.quobyte),
    rbd: cdktf.listMapper(replicationControllerSpecTemplateVolumeRbdToTerraform)(struct!.rbd),
    secret: cdktf.listMapper(replicationControllerSpecTemplateVolumeSecretToTerraform)(struct!.secret),
    vsphere_volume: cdktf.listMapper(replicationControllerSpecTemplateVolumeVsphereVolumeToTerraform)(struct!.vsphereVolume),
  }
}

export interface ReplicationControllerSpecTemplate {
  /** Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer. */
  readonly activeDeadlineSeconds?: number;
  /** AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. */
  readonly automountServiceAccountToken?: boolean;
  /** Set DNS policy for containers within the pod. Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'. Optional: Defaults to 'ClusterFirst', see [Kubernetes reference](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy). */
  readonly dnsPolicy?: string;
  /** Enables generating environment variables for service discovery. Optional: Defaults to true. */
  readonly enableServiceLinks?: boolean;
  /** Use the host's ipc namespace. Optional: Defaults to false. */
  readonly hostIpc?: boolean;
  /** Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. */
  readonly hostNetwork?: boolean;
  /** Use the host's pid namespace. */
  readonly hostPid?: boolean;
  /** Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value. */
  readonly hostname?: string;
  /** NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements. */
  readonly nodeName?: string;
  /** NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: http://kubernetes.io/docs/user-guide/node-selection. */
  readonly nodeSelector?: { [key: string]: string };
  /** If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default. */
  readonly priorityClassName?: string;
  /** Restart policy for all containers within the pod. One of Always, OnFailure, Never. More info: http://kubernetes.io/docs/user-guide/pod-states#restartpolicy. */
  readonly restartPolicy?: string;
  /** ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: http://releases.k8s.io/HEAD/docs/design/service_accounts.md. */
  readonly serviceAccountName?: string;
  /** Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Defaults to false. */
  readonly shareProcessNamespace?: boolean;
  /** If specified, the fully qualified Pod hostname will be "...svc.". If not specified, the pod will not have a domainname at all.. */
  readonly subdomain?: string;
  /** Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. */
  readonly terminationGracePeriodSeconds?: number;
  /** affinity block */
  readonly affinity?: ReplicationControllerSpecTemplateAffinity[];
  /** container block */
  readonly container?: ReplicationControllerSpecTemplateContainer[];
  /** dns_config block */
  readonly dnsConfig?: ReplicationControllerSpecTemplateDnsConfig[];
  /** host_aliases block */
  readonly hostAliases?: ReplicationControllerSpecTemplateHostAliases[];
  /** image_pull_secrets block */
  readonly imagePullSecrets?: ReplicationControllerSpecTemplateImagePullSecrets[];
  /** init_container block */
  readonly initContainer?: ReplicationControllerSpecTemplateInitContainer[];
  /** metadata block */
  readonly metadata?: ReplicationControllerSpecTemplateMetadata[];
  /** readiness_gate block */
  readonly readinessGate?: ReplicationControllerSpecTemplateReadinessGate[];
  /** security_context block */
  readonly securityContext?: ReplicationControllerSpecTemplateSecurityContext[];
  /** spec block */
  readonly spec?: ReplicationControllerSpecTemplateSpec[];
  /** toleration block */
  readonly toleration?: ReplicationControllerSpecTemplateToleration[];
  /** volume block */
  readonly volume?: ReplicationControllerSpecTemplateVolume[];
}

function replicationControllerSpecTemplateToTerraform(struct?: ReplicationControllerSpecTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    node_selector: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.nodeSelector),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    share_process_namespace: cdktf.booleanToTerraform(struct!.shareProcessNamespace),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    affinity: cdktf.listMapper(replicationControllerSpecTemplateAffinityToTerraform)(struct!.affinity),
    container: cdktf.listMapper(replicationControllerSpecTemplateContainerToTerraform)(struct!.container),
    dns_config: cdktf.listMapper(replicationControllerSpecTemplateDnsConfigToTerraform)(struct!.dnsConfig),
    host_aliases: cdktf.listMapper(replicationControllerSpecTemplateHostAliasesToTerraform)(struct!.hostAliases),
    image_pull_secrets: cdktf.listMapper(replicationControllerSpecTemplateImagePullSecretsToTerraform)(struct!.imagePullSecrets),
    init_container: cdktf.listMapper(replicationControllerSpecTemplateInitContainerToTerraform)(struct!.initContainer),
    metadata: cdktf.listMapper(replicationControllerSpecTemplateMetadataToTerraform)(struct!.metadata),
    readiness_gate: cdktf.listMapper(replicationControllerSpecTemplateReadinessGateToTerraform)(struct!.readinessGate),
    security_context: cdktf.listMapper(replicationControllerSpecTemplateSecurityContextToTerraform)(struct!.securityContext),
    spec: cdktf.listMapper(replicationControllerSpecTemplateSpecToTerraform)(struct!.spec),
    toleration: cdktf.listMapper(replicationControllerSpecTemplateTolerationToTerraform)(struct!.toleration),
    volume: cdktf.listMapper(replicationControllerSpecTemplateVolumeToTerraform)(struct!.volume),
  }
}

export interface ReplicationControllerSpec {
  /** Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready) */
  readonly minReadySeconds?: number;
  /** The number of desired replicas. Defaults to 1. More info: http://kubernetes.io/docs/user-guide/replication-controller#what-is-a-replication-controller */
  readonly replicas?: number;
  /** A label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: http://kubernetes.io/docs/user-guide/labels#label-selectors */
  readonly selector: { [key: string]: string };
  /** template block */
  readonly template: ReplicationControllerSpecTemplate[];
}

function replicationControllerSpecToTerraform(struct?: ReplicationControllerSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    selector: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.selector),
    template: cdktf.listMapper(replicationControllerSpecTemplateToTerraform)(struct!.template),
  }
}

export interface ReplicationControllerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function replicationControllerTimeoutsToTerraform(struct?: ReplicationControllerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ReplicationController extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ReplicationControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_replication_controller',
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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: ReplicationControllerMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: ReplicationControllerMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: ReplicationControllerSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: ReplicationControllerSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ReplicationControllerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ReplicationControllerTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(replicationControllerMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(replicationControllerSpecToTerraform)(this._spec),
      timeouts: replicationControllerTimeoutsToTerraform(this._timeouts),
    };
  }
}
