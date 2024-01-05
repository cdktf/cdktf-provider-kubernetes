# `persistentVolumeClaimV1` Submodule <a name="`persistentVolumeClaimV1` Submodule" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersistentVolumeClaimV1 <a name="PersistentVolumeClaimV1" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1 kubernetes_persistent_volume_claim_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1(Construct Scope, string Id, PersistentVolumeClaimV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config">PersistentVolumeClaimV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config">PersistentVolumeClaimV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetWaitUntilBound">ResetWaitUntilBound</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata"></a>

```csharp
private void PutMetadata(PersistentVolumeClaimV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec"></a>

```csharp
private void PutSpec(PersistentVolumeClaimV1Spec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putTimeouts"></a>

```csharp
private void PutTimeouts(PersistentVolumeClaimV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWaitUntilBound` <a name="ResetWaitUntilBound" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.resetWaitUntilBound"></a>

```csharp
private void ResetWaitUntilBound()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PersistentVolumeClaimV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PersistentVolumeClaimV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PersistentVolumeClaimV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PersistentVolumeClaimV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

PersistentVolumeClaimV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PersistentVolumeClaimV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersistentVolumeClaimV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersistentVolumeClaimV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PersistentVolumeClaimV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference">PersistentVolumeClaimV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference">PersistentVolumeClaimV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference">PersistentVolumeClaimV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBoundInput">WaitUntilBoundInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBound">WaitUntilBound</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadata"></a>

```csharp
public PersistentVolumeClaimV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference">PersistentVolumeClaimV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.spec"></a>

```csharp
public PersistentVolumeClaimV1SpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference">PersistentVolumeClaimV1SpecOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeouts"></a>

```csharp
public PersistentVolumeClaimV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference">PersistentVolumeClaimV1TimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.metadataInput"></a>

```csharp
public PersistentVolumeClaimV1Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.specInput"></a>

```csharp
public PersistentVolumeClaimV1Spec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WaitUntilBoundInput`<sup>Optional</sup> <a name="WaitUntilBoundInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBoundInput"></a>

```csharp
public object WaitUntilBoundInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WaitUntilBound`<sup>Required</sup> <a name="WaitUntilBound" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.waitUntilBound"></a>

```csharp
public object WaitUntilBound { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersistentVolumeClaimV1Config <a name="PersistentVolumeClaimV1Config" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    PersistentVolumeClaimV1Metadata Metadata,
    PersistentVolumeClaimV1Spec Spec,
    string Id = null,
    PersistentVolumeClaimV1Timeouts Timeouts = null,
    object WaitUntilBound = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#id PersistentVolumeClaimV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.waitUntilBound">WaitUntilBound</a></code> | <code>object</code> | Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.metadata"></a>

```csharp
public PersistentVolumeClaimV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#metadata PersistentVolumeClaimV1#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.spec"></a>

```csharp
public PersistentVolumeClaimV1Spec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#spec PersistentVolumeClaimV1#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#id PersistentVolumeClaimV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.timeouts"></a>

```csharp
public PersistentVolumeClaimV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts">PersistentVolumeClaimV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#timeouts PersistentVolumeClaimV1#timeouts}

---

##### `WaitUntilBound`<sup>Optional</sup> <a name="WaitUntilBound" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Config.property.waitUntilBound"></a>

```csharp
public object WaitUntilBound { get; set; }
```

- *Type:* object

Whether to wait for the claim to reach `Bound` state (to find volume in which to claim the space).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#wait_until_bound PersistentVolumeClaimV1#wait_until_bound}

---

### PersistentVolumeClaimV1Metadata <a name="PersistentVolumeClaimV1Metadata" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.name">Name</a></code> | <code>string</code> | Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the persistent volume claim must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the persistent volume claim that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#annotations PersistentVolumeClaimV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#generate_name PersistentVolumeClaimV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume claim.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#labels PersistentVolumeClaimV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the persistent volume claim, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#name PersistentVolumeClaimV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which name of the persistent volume claim must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#namespace PersistentVolumeClaimV1#namespace}

---

### PersistentVolumeClaimV1Spec <a name="PersistentVolumeClaimV1Spec" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1Spec {
    string[] AccessModes,
    PersistentVolumeClaimV1SpecResources Resources,
    PersistentVolumeClaimV1SpecSelector Selector = null,
    string StorageClassName = null,
    string VolumeMode = null,
    string VolumeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.accessModes">AccessModes</a></code> | <code>string[]</code> | A set of the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.storageClassName">StorageClassName</a></code> | <code>string</code> | Name of the storage class requested by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.volumeMode">VolumeMode</a></code> | <code>string</code> | Defines what type of volume is required by the claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.volumeName">VolumeName</a></code> | <code>string</code> | The binding reference to the PersistentVolume backing this claim. |

---

##### `AccessModes`<sup>Required</sup> <a name="AccessModes" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.accessModes"></a>

```csharp
public string[] AccessModes { get; set; }
```

- *Type:* string[]

A set of the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#access_modes PersistentVolumeClaimV1#access_modes}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.resources"></a>

```csharp
public PersistentVolumeClaimV1SpecResources Resources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#resources PersistentVolumeClaimV1#resources}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.selector"></a>

```csharp
public PersistentVolumeClaimV1SpecSelector Selector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#selector PersistentVolumeClaimV1#selector}

---

##### `StorageClassName`<sup>Optional</sup> <a name="StorageClassName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.storageClassName"></a>

```csharp
public string StorageClassName { get; set; }
```

- *Type:* string

Name of the storage class requested by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#storage_class_name PersistentVolumeClaimV1#storage_class_name}

---

##### `VolumeMode`<sup>Optional</sup> <a name="VolumeMode" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.volumeMode"></a>

```csharp
public string VolumeMode { get; set; }
```

- *Type:* string

Defines what type of volume is required by the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#volume_mode PersistentVolumeClaimV1#volume_mode}

---

##### `VolumeName`<sup>Optional</sup> <a name="VolumeName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec.property.volumeName"></a>

```csharp
public string VolumeName { get; set; }
```

- *Type:* string

The binding reference to the PersistentVolume backing this claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#volume_name PersistentVolumeClaimV1#volume_name}

---

### PersistentVolumeClaimV1SpecResources <a name="PersistentVolumeClaimV1SpecResources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1SpecResources {
    System.Collections.Generic.IDictionary<string, string> Limits = null,
    System.Collections.Generic.IDictionary<string, string> Requests = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.limits">Limits</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map describing the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.requests">Requests</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map describing the minimum amount of compute resources required. |

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.limits"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Limits { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map describing the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#limits PersistentVolumeClaimV1#limits}

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources.property.requests"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Requests { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map describing the minimum amount of compute resources required.

If this is omitted for a container, it defaults to `limits` if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#requests PersistentVolumeClaimV1#requests}

---

### PersistentVolumeClaimV1SpecSelector <a name="PersistentVolumeClaimV1SpecSelector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1SpecSelector {
    object MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchExpressions">MatchExpressions</a></code> | <code>object</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchExpressions"></a>

```csharp
public object MatchExpressions { get; set; }
```

- *Type:* object

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#match_expressions PersistentVolumeClaimV1#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#match_labels PersistentVolumeClaimV1#match_labels}

---

### PersistentVolumeClaimV1SpecSelectorMatchExpressions <a name="PersistentVolumeClaimV1SpecSelectorMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1SpecSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#key PersistentVolumeClaimV1#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#operator PersistentVolumeClaimV1#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#values PersistentVolumeClaimV1#values}

---

### PersistentVolumeClaimV1Timeouts <a name="PersistentVolumeClaimV1Timeouts" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1Timeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#create PersistentVolumeClaimV1#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume_claim_v1#create PersistentVolumeClaimV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersistentVolumeClaimV1MetadataOutputReference <a name="PersistentVolumeClaimV1MetadataOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1MetadataOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeClaimV1Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Metadata">PersistentVolumeClaimV1Metadata</a>

---


### PersistentVolumeClaimV1SpecOutputReference <a name="PersistentVolumeClaimV1SpecOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1SpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetStorageClassName">ResetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetVolumeMode">ResetVolumeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetVolumeName">ResetVolumeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResources` <a name="PutResources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putResources"></a>

```csharp
private void PutResources(PersistentVolumeClaimV1SpecResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

---

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putSelector"></a>

```csharp
private void PutSelector(PersistentVolumeClaimV1SpecSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

---

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```

##### `ResetStorageClassName` <a name="ResetStorageClassName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetStorageClassName"></a>

```csharp
private void ResetStorageClassName()
```

##### `ResetVolumeMode` <a name="ResetVolumeMode" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetVolumeMode"></a>

```csharp
private void ResetVolumeMode()
```

##### `ResetVolumeName` <a name="ResetVolumeName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.resetVolumeName"></a>

```csharp
private void ResetVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference">PersistentVolumeClaimV1SpecResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference">PersistentVolumeClaimV1SpecSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModesInput">AccessModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selectorInput">SelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassNameInput">StorageClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeModeInput">VolumeModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeNameInput">VolumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModes">AccessModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassName">StorageClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeMode">VolumeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeName">VolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resources"></a>

```csharp
public PersistentVolumeClaimV1SpecResourcesOutputReference Resources { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference">PersistentVolumeClaimV1SpecResourcesOutputReference</a>

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selector"></a>

```csharp
public PersistentVolumeClaimV1SpecSelectorOutputReference Selector { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference">PersistentVolumeClaimV1SpecSelectorOutputReference</a>

---

##### `AccessModesInput`<sup>Optional</sup> <a name="AccessModesInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModesInput"></a>

```csharp
public string[] AccessModesInput { get; }
```

- *Type:* string[]

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.resourcesInput"></a>

```csharp
public PersistentVolumeClaimV1SpecResources ResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.selectorInput"></a>

```csharp
public PersistentVolumeClaimV1SpecSelector SelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

---

##### `StorageClassNameInput`<sup>Optional</sup> <a name="StorageClassNameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassNameInput"></a>

```csharp
public string StorageClassNameInput { get; }
```

- *Type:* string

---

##### `VolumeModeInput`<sup>Optional</sup> <a name="VolumeModeInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeModeInput"></a>

```csharp
public string VolumeModeInput { get; }
```

- *Type:* string

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeNameInput"></a>

```csharp
public string VolumeNameInput { get; }
```

- *Type:* string

---

##### `AccessModes`<sup>Required</sup> <a name="AccessModes" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.accessModes"></a>

```csharp
public string[] AccessModes { get; }
```

- *Type:* string[]

---

##### `StorageClassName`<sup>Required</sup> <a name="StorageClassName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.storageClassName"></a>

```csharp
public string StorageClassName { get; }
```

- *Type:* string

---

##### `VolumeMode`<sup>Required</sup> <a name="VolumeMode" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeMode"></a>

```csharp
public string VolumeMode { get; }
```

- *Type:* string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.volumeName"></a>

```csharp
public string VolumeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeClaimV1Spec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1Spec">PersistentVolumeClaimV1Spec</a>

---


### PersistentVolumeClaimV1SpecResourcesOutputReference <a name="PersistentVolumeClaimV1SpecResourcesOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1SpecResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetLimits"></a>

```csharp
private void ResetLimits()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.resetRequests"></a>

```csharp
private void ResetRequests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limitsInput">LimitsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requestsInput">RequestsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limits">Limits</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requests">Requests</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limitsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LimitsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requestsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.limits"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Limits { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.requests"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Requests { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResourcesOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeClaimV1SpecResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecResources">PersistentVolumeClaimV1SpecResources</a>

---


### PersistentVolumeClaimV1SpecSelectorMatchExpressionsList <a name="PersistentVolumeClaimV1SpecSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1SpecSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get"></a>

```csharp
private PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference <a name="PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PersistentVolumeClaimV1SpecSelectorOutputReference <a name="PersistentVolumeClaimV1SpecSelectorOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1SpecSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* object

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList">PersistentVolumeClaimV1SpecSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressions"></a>

```csharp
public PersistentVolumeClaimV1SpecSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorMatchExpressionsList">PersistentVolumeClaimV1SpecSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public object MatchExpressionsInput { get; }
```

- *Type:* object

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelectorOutputReference.property.internalValue"></a>

```csharp
public PersistentVolumeClaimV1SpecSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1SpecSelector">PersistentVolumeClaimV1SpecSelector</a>

---


### PersistentVolumeClaimV1TimeoutsOutputReference <a name="PersistentVolumeClaimV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new PersistentVolumeClaimV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.persistentVolumeClaimV1.PersistentVolumeClaimV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



