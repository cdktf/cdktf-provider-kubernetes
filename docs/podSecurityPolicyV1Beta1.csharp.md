# `podSecurityPolicyV1Beta1` Submodule <a name="`podSecurityPolicyV1Beta1` Submodule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PodSecurityPolicyV1Beta1 <a name="PodSecurityPolicyV1Beta1" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1 kubernetes_pod_security_policy_v1beta1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1(Construct Scope, string Id, PodSecurityPolicyV1Beta1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config">PodSecurityPolicyV1Beta1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config">PodSecurityPolicyV1Beta1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putMetadata"></a>

```csharp
private void PutMetadata(PodSecurityPolicyV1Beta1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec"></a>

```csharp
private void PutSpec(PodSecurityPolicyV1Beta1Spec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PodSecurityPolicyV1Beta1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PodSecurityPolicyV1Beta1.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PodSecurityPolicyV1Beta1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PodSecurityPolicyV1Beta1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PodSecurityPolicyV1Beta1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PodSecurityPolicyV1Beta1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PodSecurityPolicyV1Beta1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PodSecurityPolicyV1Beta1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PodSecurityPolicyV1Beta1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference">PodSecurityPolicyV1Beta1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference">PodSecurityPolicyV1Beta1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.metadata"></a>

```csharp
public PodSecurityPolicyV1Beta1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference">PodSecurityPolicyV1Beta1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.spec"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference">PodSecurityPolicyV1Beta1SpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.metadataInput"></a>

```csharp
public PodSecurityPolicyV1Beta1Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.specInput"></a>

```csharp
public PodSecurityPolicyV1Beta1Spec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PodSecurityPolicyV1Beta1Config <a name="PodSecurityPolicyV1Beta1Config" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    PodSecurityPolicyV1Beta1Metadata Metadata,
    PodSecurityPolicyV1Beta1Spec Spec,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#id PodSecurityPolicyV1Beta1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.metadata"></a>

```csharp
public PodSecurityPolicyV1Beta1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#metadata PodSecurityPolicyV1Beta1#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.spec"></a>

```csharp
public PodSecurityPolicyV1Beta1Spec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#spec PodSecurityPolicyV1Beta1#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#id PodSecurityPolicyV1Beta1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### PodSecurityPolicyV1Beta1Metadata <a name="PodSecurityPolicyV1Beta1Metadata" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.name">Name</a></code> | <code>string</code> | Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#annotations PodSecurityPolicyV1Beta1#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#labels PodSecurityPolicyV1Beta1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#name PodSecurityPolicyV1Beta1#name}

---

### PodSecurityPolicyV1Beta1Spec <a name="PodSecurityPolicyV1Beta1Spec" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1Spec {
    PodSecurityPolicyV1Beta1SpecFsGroup FsGroup,
    PodSecurityPolicyV1Beta1SpecRunAsUser RunAsUser,
    PodSecurityPolicyV1Beta1SpecSupplementalGroups SupplementalGroups,
    string[] AllowedCapabilities = null,
    object AllowedFlexVolumes = null,
    object AllowedHostPaths = null,
    string[] AllowedProcMountTypes = null,
    string[] AllowedUnsafeSysctls = null,
    object AllowPrivilegeEscalation = null,
    string[] DefaultAddCapabilities = null,
    object DefaultAllowPrivilegeEscalation = null,
    string[] ForbiddenSysctls = null,
    object HostIpc = null,
    object HostNetwork = null,
    object HostPid = null,
    object HostPorts = null,
    object Privileged = null,
    object ReadOnlyRootFilesystem = null,
    string[] RequiredDropCapabilities = null,
    PodSecurityPolicyV1Beta1SpecRunAsGroup RunAsGroup = null,
    PodSecurityPolicyV1Beta1SpecSeLinux SeLinux = null,
    string[] Volumes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.fsGroup">FsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a></code> | fs_group block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.runAsUser">RunAsUser</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a></code> | run_as_user block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.supplementalGroups">SupplementalGroups</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a></code> | supplemental_groups block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedCapabilities">AllowedCapabilities</a></code> | <code>string[]</code> | allowedCapabilities is a list of capabilities that can be requested to add to the container. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedFlexVolumes">AllowedFlexVolumes</a></code> | <code>object</code> | allowed_flex_volumes block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedHostPaths">AllowedHostPaths</a></code> | <code>object</code> | allowed_host_paths block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedProcMountTypes">AllowedProcMountTypes</a></code> | <code>string[]</code> | AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedUnsafeSysctls">AllowedUnsafeSysctls</a></code> | <code>string[]</code> | allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowPrivilegeEscalation">AllowPrivilegeEscalation</a></code> | <code>object</code> | allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.defaultAddCapabilities">DefaultAddCapabilities</a></code> | <code>string[]</code> | defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.defaultAllowPrivilegeEscalation">DefaultAllowPrivilegeEscalation</a></code> | <code>object</code> | defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.forbiddenSysctls">ForbiddenSysctls</a></code> | <code>string[]</code> | forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostIpc">HostIpc</a></code> | <code>object</code> | hostIPC determines if the policy allows the use of HostIPC in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostNetwork">HostNetwork</a></code> | <code>object</code> | hostNetwork determines if the policy allows the use of HostNetwork in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostPid">HostPid</a></code> | <code>object</code> | hostPID determines if the policy allows the use of HostPID in the pod spec. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostPorts">HostPorts</a></code> | <code>object</code> | host_ports block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.privileged">Privileged</a></code> | <code>object</code> | privileged determines if a pod can request to be run as privileged. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.readOnlyRootFilesystem">ReadOnlyRootFilesystem</a></code> | <code>object</code> | readOnlyRootFilesystem when set to true will force containers to run with a read only root file system. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.requiredDropCapabilities">RequiredDropCapabilities</a></code> | <code>string[]</code> | requiredDropCapabilities are the capabilities that will be dropped from the container. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.runAsGroup">RunAsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a></code> | run_as_group block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.seLinux">SeLinux</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a></code> | se_linux block. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.volumes">Volumes</a></code> | <code>string[]</code> | volumes is an allowlist of volume plugins. |

---

##### `FsGroup`<sup>Required</sup> <a name="FsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.fsGroup"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecFsGroup FsGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a>

fs_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#fs_group PodSecurityPolicyV1Beta1#fs_group}

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.runAsUser"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecRunAsUser RunAsUser { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a>

run_as_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#run_as_user PodSecurityPolicyV1Beta1#run_as_user}

---

##### `SupplementalGroups`<sup>Required</sup> <a name="SupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.supplementalGroups"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecSupplementalGroups SupplementalGroups { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a>

supplemental_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#supplemental_groups PodSecurityPolicyV1Beta1#supplemental_groups}

---

##### `AllowedCapabilities`<sup>Optional</sup> <a name="AllowedCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedCapabilities"></a>

```csharp
public string[] AllowedCapabilities { get; set; }
```

- *Type:* string[]

allowedCapabilities is a list of capabilities that can be requested to add to the container.

Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_capabilities PodSecurityPolicyV1Beta1#allowed_capabilities}

---

##### `AllowedFlexVolumes`<sup>Optional</sup> <a name="AllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedFlexVolumes"></a>

```csharp
public object AllowedFlexVolumes { get; set; }
```

- *Type:* object

allowed_flex_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_flex_volumes PodSecurityPolicyV1Beta1#allowed_flex_volumes}

---

##### `AllowedHostPaths`<sup>Optional</sup> <a name="AllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedHostPaths"></a>

```csharp
public object AllowedHostPaths { get; set; }
```

- *Type:* object

allowed_host_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_host_paths PodSecurityPolicyV1Beta1#allowed_host_paths}

---

##### `AllowedProcMountTypes`<sup>Optional</sup> <a name="AllowedProcMountTypes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedProcMountTypes"></a>

```csharp
public string[] AllowedProcMountTypes { get; set; }
```

- *Type:* string[]

AllowedProcMountTypes is an allowlist of allowed ProcMountTypes.

Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_proc_mount_types PodSecurityPolicyV1Beta1#allowed_proc_mount_types}

---

##### `AllowedUnsafeSysctls`<sup>Optional</sup> <a name="AllowedUnsafeSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowedUnsafeSysctls"></a>

```csharp
public string[] AllowedUnsafeSysctls { get; set; }
```

- *Type:* string[]

allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allowed_unsafe_sysctls PodSecurityPolicyV1Beta1#allowed_unsafe_sysctls}

---

##### `AllowPrivilegeEscalation`<sup>Optional</sup> <a name="AllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.allowPrivilegeEscalation"></a>

```csharp
public object AllowPrivilegeEscalation { get; set; }
```

- *Type:* object

allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#allow_privilege_escalation PodSecurityPolicyV1Beta1#allow_privilege_escalation}

---

##### `DefaultAddCapabilities`<sup>Optional</sup> <a name="DefaultAddCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.defaultAddCapabilities"></a>

```csharp
public string[] DefaultAddCapabilities { get; set; }
```

- *Type:* string[]

defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.

You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#default_add_capabilities PodSecurityPolicyV1Beta1#default_add_capabilities}

---

##### `DefaultAllowPrivilegeEscalation`<sup>Optional</sup> <a name="DefaultAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.defaultAllowPrivilegeEscalation"></a>

```csharp
public object DefaultAllowPrivilegeEscalation { get; set; }
```

- *Type:* object

defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#default_allow_privilege_escalation PodSecurityPolicyV1Beta1#default_allow_privilege_escalation}

---

##### `ForbiddenSysctls`<sup>Optional</sup> <a name="ForbiddenSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.forbiddenSysctls"></a>

```csharp
public string[] ForbiddenSysctls { get; set; }
```

- *Type:* string[]

forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none.

Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#forbidden_sysctls PodSecurityPolicyV1Beta1#forbidden_sysctls}

---

##### `HostIpc`<sup>Optional</sup> <a name="HostIpc" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostIpc"></a>

```csharp
public object HostIpc { get; set; }
```

- *Type:* object

hostIPC determines if the policy allows the use of HostIPC in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_ipc PodSecurityPolicyV1Beta1#host_ipc}

---

##### `HostNetwork`<sup>Optional</sup> <a name="HostNetwork" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostNetwork"></a>

```csharp
public object HostNetwork { get; set; }
```

- *Type:* object

hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_network PodSecurityPolicyV1Beta1#host_network}

---

##### `HostPid`<sup>Optional</sup> <a name="HostPid" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostPid"></a>

```csharp
public object HostPid { get; set; }
```

- *Type:* object

hostPID determines if the policy allows the use of HostPID in the pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_pid PodSecurityPolicyV1Beta1#host_pid}

---

##### `HostPorts`<sup>Optional</sup> <a name="HostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.hostPorts"></a>

```csharp
public object HostPorts { get; set; }
```

- *Type:* object

host_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#host_ports PodSecurityPolicyV1Beta1#host_ports}

---

##### `Privileged`<sup>Optional</sup> <a name="Privileged" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.privileged"></a>

```csharp
public object Privileged { get; set; }
```

- *Type:* object

privileged determines if a pod can request to be run as privileged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#privileged PodSecurityPolicyV1Beta1#privileged}

---

##### `ReadOnlyRootFilesystem`<sup>Optional</sup> <a name="ReadOnlyRootFilesystem" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.readOnlyRootFilesystem"></a>

```csharp
public object ReadOnlyRootFilesystem { get; set; }
```

- *Type:* object

readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.

If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#read_only_root_filesystem PodSecurityPolicyV1Beta1#read_only_root_filesystem}

---

##### `RequiredDropCapabilities`<sup>Optional</sup> <a name="RequiredDropCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.requiredDropCapabilities"></a>

```csharp
public string[] RequiredDropCapabilities { get; set; }
```

- *Type:* string[]

requiredDropCapabilities are the capabilities that will be dropped from the container.

These are required to be dropped and cannot be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#required_drop_capabilities PodSecurityPolicyV1Beta1#required_drop_capabilities}

---

##### `RunAsGroup`<sup>Optional</sup> <a name="RunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.runAsGroup"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecRunAsGroup RunAsGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a>

run_as_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#run_as_group PodSecurityPolicyV1Beta1#run_as_group}

---

##### `SeLinux`<sup>Optional</sup> <a name="SeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.seLinux"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecSeLinux SeLinux { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a>

se_linux block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#se_linux PodSecurityPolicyV1Beta1#se_linux}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec.property.volumes"></a>

```csharp
public string[] Volumes { get; set; }
```

- *Type:* string[]

volumes is an allowlist of volume plugins.

Empty indicates that no volumes may be used. To allow all volumes you may use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#volumes PodSecurityPolicyV1Beta1#volumes}

---

### PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes <a name="PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes {
    string Driver
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes.property.driver">Driver</a></code> | <code>string</code> | driver is the name of the Flexvolume driver. |

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumes.property.driver"></a>

```csharp
public string Driver { get; set; }
```

- *Type:* string

driver is the name of the Flexvolume driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#driver PodSecurityPolicyV1Beta1#driver}

---

### PodSecurityPolicyV1Beta1SpecAllowedHostPaths <a name="PodSecurityPolicyV1Beta1SpecAllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecAllowedHostPaths {
    string PathPrefix,
    object ReadOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths.property.pathPrefix">PathPrefix</a></code> | <code>string</code> | pathPrefix is the path prefix that the host volume must match. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths.property.readOnly">ReadOnly</a></code> | <code>object</code> | when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly. |

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths.property.pathPrefix"></a>

```csharp
public string PathPrefix { get; set; }
```

- *Type:* string

pathPrefix is the path prefix that the host volume must match.

It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#path_prefix PodSecurityPolicyV1Beta1#path_prefix}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPaths.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#read_only PodSecurityPolicyV1Beta1#read_only}

---

### PodSecurityPolicyV1Beta1SpecFsGroup <a name="PodSecurityPolicyV1Beta1SpecFsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecFsGroup {
    string Rule,
    object Range = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup.property.rule">Rule</a></code> | <code>string</code> | rule is the strategy that will dictate what FSGroup is used in the SecurityContext. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup.property.range">Range</a></code> | <code>object</code> | range block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

rule is the strategy that will dictate what FSGroup is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup.property.range"></a>

```csharp
public object Range { get; set; }
```

- *Type:* object

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

### PodSecurityPolicyV1Beta1SpecFsGroupRange <a name="PodSecurityPolicyV1Beta1SpecFsGroupRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecFsGroupRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange.property.max">Max</a></code> | <code>double</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange.property.min">Min</a></code> | <code>double</code> | min is the start of the range, inclusive. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#max PodSecurityPolicyV1Beta1#max}

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#min PodSecurityPolicyV1Beta1#min}

---

### PodSecurityPolicyV1Beta1SpecHostPorts <a name="PodSecurityPolicyV1Beta1SpecHostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecHostPorts {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts.property.max">Max</a></code> | <code>double</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts.property.min">Min</a></code> | <code>double</code> | min is the start of the range, inclusive. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#max PodSecurityPolicyV1Beta1#max}

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPorts.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#min PodSecurityPolicyV1Beta1#min}

---

### PodSecurityPolicyV1Beta1SpecRunAsGroup <a name="PodSecurityPolicyV1Beta1SpecRunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecRunAsGroup {
    string Rule,
    object Range = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup.property.rule">Rule</a></code> | <code>string</code> | rule is the strategy that will dictate the allowable RunAsGroup values that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup.property.range">Range</a></code> | <code>object</code> | range block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

rule is the strategy that will dictate the allowable RunAsGroup values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup.property.range"></a>

```csharp
public object Range { get; set; }
```

- *Type:* object

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

### PodSecurityPolicyV1Beta1SpecRunAsGroupRange <a name="PodSecurityPolicyV1Beta1SpecRunAsGroupRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecRunAsGroupRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange.property.max">Max</a></code> | <code>double</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange.property.min">Min</a></code> | <code>double</code> | min is the start of the range, inclusive. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#max PodSecurityPolicyV1Beta1#max}

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#min PodSecurityPolicyV1Beta1#min}

---

### PodSecurityPolicyV1Beta1SpecRunAsUser <a name="PodSecurityPolicyV1Beta1SpecRunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecRunAsUser {
    string Rule,
    object Range = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser.property.rule">Rule</a></code> | <code>string</code> | rule is the strategy that will dictate the allowable RunAsUser values that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser.property.range">Range</a></code> | <code>object</code> | range block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

rule is the strategy that will dictate the allowable RunAsUser values that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser.property.range"></a>

```csharp
public object Range { get; set; }
```

- *Type:* object

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

### PodSecurityPolicyV1Beta1SpecRunAsUserRange <a name="PodSecurityPolicyV1Beta1SpecRunAsUserRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecRunAsUserRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange.property.max">Max</a></code> | <code>double</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange.property.min">Min</a></code> | <code>double</code> | min is the start of the range, inclusive. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#max PodSecurityPolicyV1Beta1#max}

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#min PodSecurityPolicyV1Beta1#min}

---

### PodSecurityPolicyV1Beta1SpecSeLinux <a name="PodSecurityPolicyV1Beta1SpecSeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecSeLinux {
    string Rule,
    object SeLinuxOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux.property.rule">Rule</a></code> | <code>string</code> | rule is the strategy that will dictate the allowable labels that may be set. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux.property.seLinuxOptions">SeLinuxOptions</a></code> | <code>object</code> | se_linux_options block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

rule is the strategy that will dictate the allowable labels that may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

##### `SeLinuxOptions`<sup>Optional</sup> <a name="SeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux.property.seLinuxOptions"></a>

```csharp
public object SeLinuxOptions { get; set; }
```

- *Type:* object

se_linux_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#se_linux_options PodSecurityPolicyV1Beta1#se_linux_options}

---

### PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions <a name="PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions {
    string Level,
    string Role,
    string Type,
    string User
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.level">Level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#level PodSecurityPolicyV1Beta1#level}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#role PodSecurityPolicyV1Beta1#role}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#type PodSecurityPolicyV1Beta1#type}. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.user">User</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#user PodSecurityPolicyV1Beta1#user}. |

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#level PodSecurityPolicyV1Beta1#level}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#role PodSecurityPolicyV1Beta1#role}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#type PodSecurityPolicyV1Beta1#type}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptions.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#user PodSecurityPolicyV1Beta1#user}.

---

### PodSecurityPolicyV1Beta1SpecSupplementalGroups <a name="PodSecurityPolicyV1Beta1SpecSupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecSupplementalGroups {
    string Rule,
    object Range = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups.property.rule">Rule</a></code> | <code>string</code> | rule is the strategy that will dictate what supplemental groups is used in the SecurityContext. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups.property.range">Range</a></code> | <code>object</code> | range block. |

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups.property.rule"></a>

```csharp
public string Rule { get; set; }
```

- *Type:* string

rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#rule PodSecurityPolicyV1Beta1#rule}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups.property.range"></a>

```csharp
public object Range { get; set; }
```

- *Type:* object

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#range PodSecurityPolicyV1Beta1#range}

---

### PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange <a name="PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange {
    double Max,
    double Min
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange.property.max">Max</a></code> | <code>double</code> | max is the end of the range, inclusive. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange.property.min">Min</a></code> | <code>double</code> | min is the start of the range, inclusive. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

max is the end of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#max PodSecurityPolicyV1Beta1#max}

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRange.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

min is the start of the range, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.2/docs/resources/pod_security_policy_v1beta1#min PodSecurityPolicyV1Beta1#min}

---

## Classes <a name="Classes" id="Classes"></a>

### PodSecurityPolicyV1Beta1MetadataOutputReference <a name="PodSecurityPolicyV1Beta1MetadataOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1MetadataOutputReference.property.internalValue"></a>

```csharp
public PodSecurityPolicyV1Beta1Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Metadata">PodSecurityPolicyV1Beta1Metadata</a>

---


### PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList <a name="PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.get"></a>

```csharp
private PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference <a name="PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.driverInput">DriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.driver">Driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.driverInput"></a>

```csharp
public string DriverInput { get; }
```

- *Type:* string

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.driver"></a>

```csharp
public string Driver { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecAllowedHostPathsList <a name="PodSecurityPolicyV1Beta1SpecAllowedHostPathsList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecAllowedHostPathsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.get"></a>

```csharp
private PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference <a name="PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.pathPrefixInput">PathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.pathPrefix">PathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathPrefixInput`<sup>Optional</sup> <a name="PathPrefixInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.pathPrefixInput"></a>

```csharp
public string PathPrefixInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.pathPrefix"></a>

```csharp
public string PathPrefix { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecFsGroupOutputReference <a name="PodSecurityPolicyV1Beta1SpecFsGroupOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecFsGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.resetRange">ResetRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.putRange"></a>

```csharp
private void PutRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.putRange.parameter.value"></a>

- *Type:* object

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList">PodSecurityPolicyV1Beta1SpecFsGroupRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.rangeInput">RangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.rule">Rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.range"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecFsGroupRangeList Range { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList">PodSecurityPolicyV1Beta1SpecFsGroupRangeList</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.rangeInput"></a>

```csharp
public object RangeInput { get; }
```

- *Type:* object

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference.property.internalValue"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecFsGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a>

---


### PodSecurityPolicyV1Beta1SpecFsGroupRangeList <a name="PodSecurityPolicyV1Beta1SpecFsGroupRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecFsGroupRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.get"></a>

```csharp
private PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference <a name="PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecHostPortsList <a name="PodSecurityPolicyV1Beta1SpecHostPortsList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecHostPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.get"></a>

```csharp
private PodSecurityPolicyV1Beta1SpecHostPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecHostPortsOutputReference <a name="PodSecurityPolicyV1Beta1SpecHostPortsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecHostPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecOutputReference <a name="PodSecurityPolicyV1Beta1SpecOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedFlexVolumes">PutAllowedFlexVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedHostPaths">PutAllowedHostPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putFsGroup">PutFsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putHostPorts">PutHostPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsGroup">PutRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsUser">PutRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSeLinux">PutSeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSupplementalGroups">PutSupplementalGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedCapabilities">ResetAllowedCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedFlexVolumes">ResetAllowedFlexVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedHostPaths">ResetAllowedHostPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedProcMountTypes">ResetAllowedProcMountTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedUnsafeSysctls">ResetAllowedUnsafeSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowPrivilegeEscalation">ResetAllowPrivilegeEscalation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetDefaultAddCapabilities">ResetDefaultAddCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetDefaultAllowPrivilegeEscalation">ResetDefaultAllowPrivilegeEscalation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetForbiddenSysctls">ResetForbiddenSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostIpc">ResetHostIpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostNetwork">ResetHostNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostPid">ResetHostPid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostPorts">ResetHostPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetPrivileged">ResetPrivileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetReadOnlyRootFilesystem">ResetReadOnlyRootFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetRequiredDropCapabilities">ResetRequiredDropCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetRunAsGroup">ResetRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetSeLinux">ResetSeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedFlexVolumes` <a name="PutAllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedFlexVolumes"></a>

```csharp
private void PutAllowedFlexVolumes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedFlexVolumes.parameter.value"></a>

- *Type:* object

---

##### `PutAllowedHostPaths` <a name="PutAllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedHostPaths"></a>

```csharp
private void PutAllowedHostPaths(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putAllowedHostPaths.parameter.value"></a>

- *Type:* object

---

##### `PutFsGroup` <a name="PutFsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putFsGroup"></a>

```csharp
private void PutFsGroup(PodSecurityPolicyV1Beta1SpecFsGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putFsGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a>

---

##### `PutHostPorts` <a name="PutHostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putHostPorts"></a>

```csharp
private void PutHostPorts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putHostPorts.parameter.value"></a>

- *Type:* object

---

##### `PutRunAsGroup` <a name="PutRunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsGroup"></a>

```csharp
private void PutRunAsGroup(PodSecurityPolicyV1Beta1SpecRunAsGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a>

---

##### `PutRunAsUser` <a name="PutRunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsUser"></a>

```csharp
private void PutRunAsUser(PodSecurityPolicyV1Beta1SpecRunAsUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putRunAsUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a>

---

##### `PutSeLinux` <a name="PutSeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSeLinux"></a>

```csharp
private void PutSeLinux(PodSecurityPolicyV1Beta1SpecSeLinux Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSeLinux.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a>

---

##### `PutSupplementalGroups` <a name="PutSupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSupplementalGroups"></a>

```csharp
private void PutSupplementalGroups(PodSecurityPolicyV1Beta1SpecSupplementalGroups Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.putSupplementalGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a>

---

##### `ResetAllowedCapabilities` <a name="ResetAllowedCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedCapabilities"></a>

```csharp
private void ResetAllowedCapabilities()
```

##### `ResetAllowedFlexVolumes` <a name="ResetAllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedFlexVolumes"></a>

```csharp
private void ResetAllowedFlexVolumes()
```

##### `ResetAllowedHostPaths` <a name="ResetAllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedHostPaths"></a>

```csharp
private void ResetAllowedHostPaths()
```

##### `ResetAllowedProcMountTypes` <a name="ResetAllowedProcMountTypes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedProcMountTypes"></a>

```csharp
private void ResetAllowedProcMountTypes()
```

##### `ResetAllowedUnsafeSysctls` <a name="ResetAllowedUnsafeSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowedUnsafeSysctls"></a>

```csharp
private void ResetAllowedUnsafeSysctls()
```

##### `ResetAllowPrivilegeEscalation` <a name="ResetAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetAllowPrivilegeEscalation"></a>

```csharp
private void ResetAllowPrivilegeEscalation()
```

##### `ResetDefaultAddCapabilities` <a name="ResetDefaultAddCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetDefaultAddCapabilities"></a>

```csharp
private void ResetDefaultAddCapabilities()
```

##### `ResetDefaultAllowPrivilegeEscalation` <a name="ResetDefaultAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetDefaultAllowPrivilegeEscalation"></a>

```csharp
private void ResetDefaultAllowPrivilegeEscalation()
```

##### `ResetForbiddenSysctls` <a name="ResetForbiddenSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetForbiddenSysctls"></a>

```csharp
private void ResetForbiddenSysctls()
```

##### `ResetHostIpc` <a name="ResetHostIpc" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostIpc"></a>

```csharp
private void ResetHostIpc()
```

##### `ResetHostNetwork` <a name="ResetHostNetwork" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostNetwork"></a>

```csharp
private void ResetHostNetwork()
```

##### `ResetHostPid` <a name="ResetHostPid" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostPid"></a>

```csharp
private void ResetHostPid()
```

##### `ResetHostPorts` <a name="ResetHostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetHostPorts"></a>

```csharp
private void ResetHostPorts()
```

##### `ResetPrivileged` <a name="ResetPrivileged" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetPrivileged"></a>

```csharp
private void ResetPrivileged()
```

##### `ResetReadOnlyRootFilesystem` <a name="ResetReadOnlyRootFilesystem" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetReadOnlyRootFilesystem"></a>

```csharp
private void ResetReadOnlyRootFilesystem()
```

##### `ResetRequiredDropCapabilities` <a name="ResetRequiredDropCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetRequiredDropCapabilities"></a>

```csharp
private void ResetRequiredDropCapabilities()
```

##### `ResetRunAsGroup` <a name="ResetRunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetRunAsGroup"></a>

```csharp
private void ResetRunAsGroup()
```

##### `ResetSeLinux` <a name="ResetSeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetSeLinux"></a>

```csharp
private void ResetSeLinux()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.resetVolumes"></a>

```csharp
private void ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedFlexVolumes">AllowedFlexVolumes</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedHostPaths">AllowedHostPaths</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList">PodSecurityPolicyV1Beta1SpecAllowedHostPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fsGroup">FsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference">PodSecurityPolicyV1Beta1SpecFsGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPorts">HostPorts</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList">PodSecurityPolicyV1Beta1SpecHostPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsGroup">RunAsGroup</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference">PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsUser">RunAsUser</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference">PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.seLinux">SeLinux</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference">PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.supplementalGroups">SupplementalGroups</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference">PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedCapabilitiesInput">AllowedCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedFlexVolumesInput">AllowedFlexVolumesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedHostPathsInput">AllowedHostPathsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedProcMountTypesInput">AllowedProcMountTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedUnsafeSysctlsInput">AllowedUnsafeSysctlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowPrivilegeEscalationInput">AllowPrivilegeEscalationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAddCapabilitiesInput">DefaultAddCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAllowPrivilegeEscalationInput">DefaultAllowPrivilegeEscalationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.forbiddenSysctlsInput">ForbiddenSysctlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fsGroupInput">FsGroupInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostIpcInput">HostIpcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostNetworkInput">HostNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPidInput">HostPidInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPortsInput">HostPortsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.privilegedInput">PrivilegedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.readOnlyRootFilesystemInput">ReadOnlyRootFilesystemInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.requiredDropCapabilitiesInput">RequiredDropCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsGroupInput">RunAsGroupInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsUserInput">RunAsUserInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.seLinuxInput">SeLinuxInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.supplementalGroupsInput">SupplementalGroupsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.volumesInput">VolumesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedCapabilities">AllowedCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedProcMountTypes">AllowedProcMountTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedUnsafeSysctls">AllowedUnsafeSysctls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowPrivilegeEscalation">AllowPrivilegeEscalation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAddCapabilities">DefaultAddCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAllowPrivilegeEscalation">DefaultAllowPrivilegeEscalation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.forbiddenSysctls">ForbiddenSysctls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostIpc">HostIpc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostNetwork">HostNetwork</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPid">HostPid</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.privileged">Privileged</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.readOnlyRootFilesystem">ReadOnlyRootFilesystem</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.requiredDropCapabilities">RequiredDropCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.volumes">Volumes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedFlexVolumes`<sup>Required</sup> <a name="AllowedFlexVolumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedFlexVolumes"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList AllowedFlexVolumes { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList">PodSecurityPolicyV1Beta1SpecAllowedFlexVolumesList</a>

---

##### `AllowedHostPaths`<sup>Required</sup> <a name="AllowedHostPaths" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedHostPaths"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecAllowedHostPathsList AllowedHostPaths { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecAllowedHostPathsList">PodSecurityPolicyV1Beta1SpecAllowedHostPathsList</a>

---

##### `FsGroup`<sup>Required</sup> <a name="FsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fsGroup"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecFsGroupOutputReference FsGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroupOutputReference">PodSecurityPolicyV1Beta1SpecFsGroupOutputReference</a>

---

##### `HostPorts`<sup>Required</sup> <a name="HostPorts" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPorts"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecHostPortsList HostPorts { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecHostPortsList">PodSecurityPolicyV1Beta1SpecHostPortsList</a>

---

##### `RunAsGroup`<sup>Required</sup> <a name="RunAsGroup" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsGroup"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference RunAsGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference">PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference</a>

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsUser"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference RunAsUser { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference">PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference</a>

---

##### `SeLinux`<sup>Required</sup> <a name="SeLinux" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.seLinux"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference SeLinux { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference">PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference</a>

---

##### `SupplementalGroups`<sup>Required</sup> <a name="SupplementalGroups" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.supplementalGroups"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference SupplementalGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference">PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference</a>

---

##### `AllowedCapabilitiesInput`<sup>Optional</sup> <a name="AllowedCapabilitiesInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedCapabilitiesInput"></a>

```csharp
public string[] AllowedCapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `AllowedFlexVolumesInput`<sup>Optional</sup> <a name="AllowedFlexVolumesInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedFlexVolumesInput"></a>

```csharp
public object AllowedFlexVolumesInput { get; }
```

- *Type:* object

---

##### `AllowedHostPathsInput`<sup>Optional</sup> <a name="AllowedHostPathsInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedHostPathsInput"></a>

```csharp
public object AllowedHostPathsInput { get; }
```

- *Type:* object

---

##### `AllowedProcMountTypesInput`<sup>Optional</sup> <a name="AllowedProcMountTypesInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedProcMountTypesInput"></a>

```csharp
public string[] AllowedProcMountTypesInput { get; }
```

- *Type:* string[]

---

##### `AllowedUnsafeSysctlsInput`<sup>Optional</sup> <a name="AllowedUnsafeSysctlsInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedUnsafeSysctlsInput"></a>

```csharp
public string[] AllowedUnsafeSysctlsInput { get; }
```

- *Type:* string[]

---

##### `AllowPrivilegeEscalationInput`<sup>Optional</sup> <a name="AllowPrivilegeEscalationInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowPrivilegeEscalationInput"></a>

```csharp
public object AllowPrivilegeEscalationInput { get; }
```

- *Type:* object

---

##### `DefaultAddCapabilitiesInput`<sup>Optional</sup> <a name="DefaultAddCapabilitiesInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAddCapabilitiesInput"></a>

```csharp
public string[] DefaultAddCapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `DefaultAllowPrivilegeEscalationInput`<sup>Optional</sup> <a name="DefaultAllowPrivilegeEscalationInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAllowPrivilegeEscalationInput"></a>

```csharp
public object DefaultAllowPrivilegeEscalationInput { get; }
```

- *Type:* object

---

##### `ForbiddenSysctlsInput`<sup>Optional</sup> <a name="ForbiddenSysctlsInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.forbiddenSysctlsInput"></a>

```csharp
public string[] ForbiddenSysctlsInput { get; }
```

- *Type:* string[]

---

##### `FsGroupInput`<sup>Optional</sup> <a name="FsGroupInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.fsGroupInput"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecFsGroup FsGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecFsGroup">PodSecurityPolicyV1Beta1SpecFsGroup</a>

---

##### `HostIpcInput`<sup>Optional</sup> <a name="HostIpcInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostIpcInput"></a>

```csharp
public object HostIpcInput { get; }
```

- *Type:* object

---

##### `HostNetworkInput`<sup>Optional</sup> <a name="HostNetworkInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostNetworkInput"></a>

```csharp
public object HostNetworkInput { get; }
```

- *Type:* object

---

##### `HostPidInput`<sup>Optional</sup> <a name="HostPidInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPidInput"></a>

```csharp
public object HostPidInput { get; }
```

- *Type:* object

---

##### `HostPortsInput`<sup>Optional</sup> <a name="HostPortsInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPortsInput"></a>

```csharp
public object HostPortsInput { get; }
```

- *Type:* object

---

##### `PrivilegedInput`<sup>Optional</sup> <a name="PrivilegedInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.privilegedInput"></a>

```csharp
public object PrivilegedInput { get; }
```

- *Type:* object

---

##### `ReadOnlyRootFilesystemInput`<sup>Optional</sup> <a name="ReadOnlyRootFilesystemInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.readOnlyRootFilesystemInput"></a>

```csharp
public object ReadOnlyRootFilesystemInput { get; }
```

- *Type:* object

---

##### `RequiredDropCapabilitiesInput`<sup>Optional</sup> <a name="RequiredDropCapabilitiesInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.requiredDropCapabilitiesInput"></a>

```csharp
public string[] RequiredDropCapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `RunAsGroupInput`<sup>Optional</sup> <a name="RunAsGroupInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsGroupInput"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecRunAsGroup RunAsGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a>

---

##### `RunAsUserInput`<sup>Optional</sup> <a name="RunAsUserInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.runAsUserInput"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecRunAsUser RunAsUserInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a>

---

##### `SeLinuxInput`<sup>Optional</sup> <a name="SeLinuxInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.seLinuxInput"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecSeLinux SeLinuxInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a>

---

##### `SupplementalGroupsInput`<sup>Optional</sup> <a name="SupplementalGroupsInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.supplementalGroupsInput"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecSupplementalGroups SupplementalGroupsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a>

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.volumesInput"></a>

```csharp
public string[] VolumesInput { get; }
```

- *Type:* string[]

---

##### `AllowedCapabilities`<sup>Required</sup> <a name="AllowedCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedCapabilities"></a>

```csharp
public string[] AllowedCapabilities { get; }
```

- *Type:* string[]

---

##### `AllowedProcMountTypes`<sup>Required</sup> <a name="AllowedProcMountTypes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedProcMountTypes"></a>

```csharp
public string[] AllowedProcMountTypes { get; }
```

- *Type:* string[]

---

##### `AllowedUnsafeSysctls`<sup>Required</sup> <a name="AllowedUnsafeSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowedUnsafeSysctls"></a>

```csharp
public string[] AllowedUnsafeSysctls { get; }
```

- *Type:* string[]

---

##### `AllowPrivilegeEscalation`<sup>Required</sup> <a name="AllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.allowPrivilegeEscalation"></a>

```csharp
public object AllowPrivilegeEscalation { get; }
```

- *Type:* object

---

##### `DefaultAddCapabilities`<sup>Required</sup> <a name="DefaultAddCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAddCapabilities"></a>

```csharp
public string[] DefaultAddCapabilities { get; }
```

- *Type:* string[]

---

##### `DefaultAllowPrivilegeEscalation`<sup>Required</sup> <a name="DefaultAllowPrivilegeEscalation" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.defaultAllowPrivilegeEscalation"></a>

```csharp
public object DefaultAllowPrivilegeEscalation { get; }
```

- *Type:* object

---

##### `ForbiddenSysctls`<sup>Required</sup> <a name="ForbiddenSysctls" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.forbiddenSysctls"></a>

```csharp
public string[] ForbiddenSysctls { get; }
```

- *Type:* string[]

---

##### `HostIpc`<sup>Required</sup> <a name="HostIpc" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostIpc"></a>

```csharp
public object HostIpc { get; }
```

- *Type:* object

---

##### `HostNetwork`<sup>Required</sup> <a name="HostNetwork" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostNetwork"></a>

```csharp
public object HostNetwork { get; }
```

- *Type:* object

---

##### `HostPid`<sup>Required</sup> <a name="HostPid" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.hostPid"></a>

```csharp
public object HostPid { get; }
```

- *Type:* object

---

##### `Privileged`<sup>Required</sup> <a name="Privileged" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.privileged"></a>

```csharp
public object Privileged { get; }
```

- *Type:* object

---

##### `ReadOnlyRootFilesystem`<sup>Required</sup> <a name="ReadOnlyRootFilesystem" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.readOnlyRootFilesystem"></a>

```csharp
public object ReadOnlyRootFilesystem { get; }
```

- *Type:* object

---

##### `RequiredDropCapabilities`<sup>Required</sup> <a name="RequiredDropCapabilities" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.requiredDropCapabilities"></a>

```csharp
public string[] RequiredDropCapabilities { get; }
```

- *Type:* string[]

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.volumes"></a>

```csharp
public string[] Volumes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecOutputReference.property.internalValue"></a>

```csharp
public PodSecurityPolicyV1Beta1Spec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1Spec">PodSecurityPolicyV1Beta1Spec</a>

---


### PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference <a name="PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.resetRange">ResetRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.putRange"></a>

```csharp
private void PutRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.putRange.parameter.value"></a>

- *Type:* object

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList">PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.rangeInput">RangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.rule">Rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.range"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList Range { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList">PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.rangeInput"></a>

```csharp
public object RangeInput { get; }
```

- *Type:* object

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupOutputReference.property.internalValue"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecRunAsGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroup">PodSecurityPolicyV1Beta1SpecRunAsGroup</a>

---


### PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList <a name="PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.get"></a>

```csharp
private PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference <a name="PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsGroupRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference <a name="PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.resetRange">ResetRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.putRange"></a>

```csharp
private void PutRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.putRange.parameter.value"></a>

- *Type:* object

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList">PodSecurityPolicyV1Beta1SpecRunAsUserRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.rangeInput">RangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.rule">Rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.range"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecRunAsUserRangeList Range { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList">PodSecurityPolicyV1Beta1SpecRunAsUserRangeList</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.rangeInput"></a>

```csharp
public object RangeInput { get; }
```

- *Type:* object

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserOutputReference.property.internalValue"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecRunAsUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUser">PodSecurityPolicyV1Beta1SpecRunAsUser</a>

---


### PodSecurityPolicyV1Beta1SpecRunAsUserRangeList <a name="PodSecurityPolicyV1Beta1SpecRunAsUserRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecRunAsUserRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.get"></a>

```csharp
private PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference <a name="PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecRunAsUserRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference <a name="PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.putSeLinuxOptions">PutSeLinuxOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.resetSeLinuxOptions">ResetSeLinuxOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSeLinuxOptions` <a name="PutSeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.putSeLinuxOptions"></a>

```csharp
private void PutSeLinuxOptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.putSeLinuxOptions.parameter.value"></a>

- *Type:* object

---

##### `ResetSeLinuxOptions` <a name="ResetSeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.resetSeLinuxOptions"></a>

```csharp
private void ResetSeLinuxOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.seLinuxOptions">SeLinuxOptions</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.seLinuxOptionsInput">SeLinuxOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.rule">Rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SeLinuxOptions`<sup>Required</sup> <a name="SeLinuxOptions" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.seLinuxOptions"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList SeLinuxOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList">PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `SeLinuxOptionsInput`<sup>Optional</sup> <a name="SeLinuxOptionsInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.seLinuxOptionsInput"></a>

```csharp
public object SeLinuxOptionsInput { get; }
```

- *Type:* object

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxOutputReference.property.internalValue"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecSeLinux InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinux">PodSecurityPolicyV1Beta1SpecSeLinux</a>

---


### PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList <a name="PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.get"></a>

```csharp
private PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference <a name="PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSeLinuxSeLinuxOptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference <a name="PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.resetRange">ResetRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.putRange"></a>

```csharp
private void PutRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.putRange.parameter.value"></a>

- *Type:* object

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.rangeInput">RangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.ruleInput">RuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.rule">Rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.range"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList Range { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList">PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.rangeInput"></a>

```csharp
public object RangeInput { get; }
```

- *Type:* object

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.ruleInput"></a>

```csharp
public string RuleInput { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.rule"></a>

```csharp
public string Rule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsOutputReference.property.internalValue"></a>

```csharp
public PodSecurityPolicyV1Beta1SpecSupplementalGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroups">PodSecurityPolicyV1Beta1SpecSupplementalGroups</a>

---


### PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList <a name="PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.get"></a>

```csharp
private PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference <a name="PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podSecurityPolicyV1Beta1.PodSecurityPolicyV1Beta1SpecSupplementalGroupsRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



