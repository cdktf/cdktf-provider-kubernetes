// https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PodDisruptionBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#metadata PodDisruptionBudget#metadata}
  */
  readonly metadata: PodDisruptionBudgetMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#spec PodDisruptionBudget#spec}
  */
  readonly spec: PodDisruptionBudgetSpec[];
}
export interface PodDisruptionBudgetMetadata {
  /**
  * An unstructured key value map stored with the pod disruption budget that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#annotations PodDisruptionBudget#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#generate_name PodDisruptionBudget#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the pod disruption budget. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#labels PodDisruptionBudget#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the pod disruption budget, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#name PodDisruptionBudget#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the pod disruption budget must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#namespace PodDisruptionBudget#namespace}
  */
  readonly namespace?: string;
}

function podDisruptionBudgetMetadataToTerraform(struct?: PodDisruptionBudgetMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface PodDisruptionBudgetSpecSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#key PodDisruptionBudget#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#operator PodDisruptionBudget#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#values PodDisruptionBudget#values}
  */
  readonly values?: string[];
}

function podDisruptionBudgetSpecSelectorMatchExpressionsToTerraform(struct?: PodDisruptionBudgetSpecSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface PodDisruptionBudgetSpecSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#match_labels PodDisruptionBudget#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#match_expressions PodDisruptionBudget#match_expressions}
  */
  readonly matchExpressions?: PodDisruptionBudgetSpecSelectorMatchExpressions[];
}

function podDisruptionBudgetSpecSelectorToTerraform(struct?: PodDisruptionBudgetSpecSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(podDisruptionBudgetSpecSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface PodDisruptionBudgetSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#max_unavailable PodDisruptionBudget#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#min_available PodDisruptionBudget#min_available}
  */
  readonly minAvailable?: string;
  /**
  * selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html#selector PodDisruptionBudget#selector}
  */
  readonly selector: PodDisruptionBudgetSpecSelector[];
}

function podDisruptionBudgetSpecToTerraform(struct?: PodDisruptionBudgetSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    min_available: cdktf.stringToTerraform(struct!.minAvailable),
    selector: cdktf.listMapper(podDisruptionBudgetSpecSelectorToTerraform)(struct!.selector),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html kubernetes_pod_disruption_budget}
*/
export class PodDisruptionBudget extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_disruption_budget.html kubernetes_pod_disruption_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PodDisruptionBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: PodDisruptionBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_pod_disruption_budget',
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
  private _metadata: PodDisruptionBudgetMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: PodDisruptionBudgetMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: PodDisruptionBudgetSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: PodDisruptionBudgetSpec[]) {
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
      metadata: cdktf.listMapper(podDisruptionBudgetMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(podDisruptionBudgetSpecToTerraform)(this._spec),
    };
  }
}
